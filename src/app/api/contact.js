import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing fields" });
  }

  try {
    const client = await clientPromise;
    const db = client.db("portfolio");
    const collection = db.collection("contacts");

    await collection.insertOne({ name, email, message, createdAt: new Date() });

    return res.status(200).json({ message: "Message received" });
  } catch (error) {
    console.error("MongoDB insert error:", error);
    return res.status(500).json({ message: "Something went wrong" });
  }
}
