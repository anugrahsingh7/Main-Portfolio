import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongodb";
import Message from "@/models/Message";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    await connectToDB();
    await Message.create({ name, email, message });

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
