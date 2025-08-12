import nodemailer from 'nodemailer';

// Create a transporter using Brevo (Sendinblue) SMTP with credentials
const transporter = nodemailer.createTransport({
  host: 'smtp-relay.brevo.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.BREVO_SMTP_USER, // Your Brevo SMTP username
    pass: process.env.BREVO_SMTP_PASSWORD // Your Brevo SMTP master password
  },
  tls: {
    rejectUnauthorized: false
  },
  // Alternative configuration for Brevo
  requireTLS: true,
  logger: false, // Disable verbose logging
  debug: false   // Disable debug output
});

// Function to send email when contact form is submitted
export const sendContactEmail = async (name, email, message) => {
  try {
    // Verify transporter before sending
    await transporter.verify();
    console.log('✅ SMTP connection verified successfully');
    
    // Use a verified sender email (your actual email, not the SMTP username)
    const senderEmail = process.env.VERIFIED_SENDER_EMAIL || process.env.BREVO_SMTP_USER;
    
    // Get the base URL for your application
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    
    // Email to yourself (admin notification)
    const adminMailOptions = {
      from: `"Portfolio Contact" <${senderEmail}>`,
      to: senderEmail,
      subject: `New Contact Form Submission from ${name}`,
      html: `
       
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Message: ${message}
      `
    };

    // Email to the person who submitted the form (confirmation)
    const userMailOptions = {
      from: `"Anugrah Singh" <${senderEmail}>`,
      to: email,
      subject: 'Thank you for contacting me!',
      html: `
        <div style="text-align: center; margin-bottom: 20px;">
          <img src="${baseUrl}/Logo.png" alt="Anugrah Singh Logo" style="width: 120px; height: auto; margin-bottom: 15px;">
        </div>
        <h2>Thank you for contacting me!</h2>
        <p>Hi ${name},</p>
        <p>Thank you for contacting me through my portfolio. I have received your message and will get back to you as soon as possible.</p>
        <p><strong>Your message:</strong></p>
        <p>${message}</p>
        <p>Best regards,<br>Anugrah Singh</p>
      `,
      text: `
Thank you for contacting me!

Hi ${name},

Thank you for contacting me through my portfolio. I have received your message and will get back to you as soon as possible.

Your message:
${message}

Best regards,
Anugrah Singh
      `
    };

    console.log('📧 Sending admin notification email...');
    const adminResult = await transporter.sendMail(adminMailOptions);
    console.log('✅ Admin email sent successfully:', adminResult.messageId);
    
    console.log('📧 Sending user confirmation email...');
    const userResult = await transporter.sendMail(userMailOptions);
    console.log('✅ User email sent successfully:', userResult.messageId);

    return { 
      success: true, 
      message: 'Emails sent successfully',
      adminMessageId: adminResult.messageId,
      userMessageId: userResult.messageId
    };
  } catch (error) {
    console.error('❌ Email sending error:', error);
    
    // More detailed error logging
    if (error.code === 'EAUTH') {
      console.error('🔐 Authentication failed. Please check your Brevo SMTP credentials:');
      console.error('- BREVO_SMTP_USER:', process.env.BREVO_SMTP_USER ? 'Set' : 'Not set');
      console.error('- BREVO_SMTP_PASSWORD:', process.env.BREVO_SMTP_PASSWORD ? 'Set (length: ' + process.env.BREVO_SMTP_PASSWORD.length + ')' : 'Not set');
    }
    
    throw new Error('Failed to send email');
  }
};

// Verify transporter configuration
export const verifyTransporter = async () => {
  try {
    await transporter.verify();
    console.log('✅ Brevo SMTP transporter is ready');
    return true;
  } catch (error) {
    console.error('❌ Brevo SMTP transporter verification failed:', error);
    return false;
  }
};

export default transporter;
