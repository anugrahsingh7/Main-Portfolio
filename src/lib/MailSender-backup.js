import nodemailer from 'nodemailer';

// Alternative Brevo configuration
const transporter = nodemailer.createTransport({
  host: 'smtp-relay.brevo.com',
  port: 465,
  secure: true, // Use SSL
  auth: {
    user: process.env.BREVO_EMAIL_USER,
    pass: process.env.BREVO_API_KEY
  }
});

// Or try this configuration if the above doesn't work:
// const transporter = nodemailer.createTransport({
//   service: 'gmail', // Fallback to Gmail if Brevo doesn't work
//   auth: {
//     user: process.env.GMAIL_USER,
//     pass: process.env.GMAIL_APP_PASSWORD
//   }
// });

export const sendContactEmail = async (name, email, message) => {
  try {
    await transporter.verify();
    
    const adminMailOptions = {
      from: process.env.BREVO_EMAIL_USER,
      to: process.env.BREVO_EMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 5px; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
        </div>
      `
    };

    const userMailOptions = {
      from: process.env.BREVO_EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting me!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank you for reaching out!</h2>
          <p>Hi ${name},</p>
          <p>Thank you for contacting me through my portfolio. I have received your message and will get back to you as soon as possible.</p>
          <p>Best regards,<br>Anugrah Singh</p>
        </div>
      `
    };

    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return { success: true, message: 'Emails sent successfully' };
  } catch (error) {
    console.error('Email sending error:', error);
    throw new Error('Failed to send email');
  }
};

export default transporter;
