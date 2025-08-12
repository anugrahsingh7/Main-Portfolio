import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongodb";
import Message from "@/models/Message";
import { sendContactEmail } from "@/lib/MailSender";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Connect to database and save message
    await connectToDB();
    await Message.create({ name, email, message });

    // Send email notifications
    try {
      await sendContactEmail(name, email, message);
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
      // Continue with the response even if email fails
      // The message is already saved to database
    }

    return NextResponse.json({ 
      message: "Message sent successfully! Check your email for confirmation." 
    }, { status: 200 });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
