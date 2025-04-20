"use client";

import { useState } from "react";
import { Anton } from "next/font/google";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const anton = Anton({ subsets: ["latin"], weight: ["400"] });

export default function GetInTouch() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Message sent!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus(data.error || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Failed to send message.");
    }
  };

  return (
    <div
      id="contact"
      className="w-screen h-full bg-black flex justify-center items-center"
    >
      <div className="container px-6 py-12 mx-auto">
        <div className="lg:flex lg:items-center lg:-mx-6">
          <div className="lg:w-1/2 lg:mx-6">
            <h1
              className={`${anton.className} text-7xl font-semibold text-red-400 capitalize`}
            >
              Get in touch
              <br /> to see your ideas <br />
              come to life
            </h1>
            <div className="mt-6 md:mt-8 text-[#ffe5d5]">
              If you're looking to collaborate with a passionate and skilled
              team, and would like to hire me and my team for your project or
              idea, please don’t hesitate to get in touch with us right
              here—we’re excited to connect!
            </div>
            <div className="mt-6 w-80 md:mt-8">
              <h3 className={`${anton.className} text-3xl text-[#ffe5d5]`}>
                Connect with me
              </h3>
              <div className="flex mt-4 -mx-1.5">
                <a
                  className="mx-1.5 text-3xl text-red-400 hover:text-red-500"
                  href="https://www.linkedin.com/in/anugrah-singh-7777/"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  className="mx-1.5 text-3xl text-red-400 hover:text-red-500"
                  href="https://github.com/anugrahsingh7"
                >
                  <FaGithub />
                </a>
                <a
                  className="mx-1.5 text-3xl text-red-400 hover:text-red-500"
                  href="mailto:anugrahsingh7777@gmail.com"
                >
                  <MdEmail />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 lg:w-1/2 lg:mx-6">
            <div className="w-full px-8 py-10 bg-[#ffe5d5] rounded-lg shadow-2xl lg:max-w-xl">
              <h1
                className={`${anton.className} text-3xl font-medium text-red-400`}
              >
                What do you want to ask?
              </h1>
              <form className="mt-6" onSubmit={handleSubmit}>
                <label className="block mb-2 text-lg font-bold text-black">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="block w-full px-5 py-3 mt-2 text-black bg-red-400 border border-black/50 rounded-md placeholder-black/30 focus:outline-none"
                  placeholder="Enter your name"
                />

                <label className="block mt-6 mb-2 text-lg font-bold text-black">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="block w-full px-5 py-3 mt-2 text-black bg-red-400 border border-black/50 rounded-md placeholder-black/30 focus:outline-none"
                  placeholder="Enter your email"
                />

                <label className="block mt-6 mb-2 text-lg font-bold text-black">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="block w-full h-32 px-5 py-3 mt-2 text-black bg-red-400 border border-black/50 rounded-md placeholder-black/30 focus:outline-none"
                  placeholder="Type your message here"
                ></textarea>

                <button
                  type="submit"
                  className={`${anton.className} w-full mt-6 px-6 py-3 text-black border border-black rounded-md hover:bg-black hover:text-white`}
                >
                  get in touch
                </button>

                {status && <p className="mt-4 text-black">{status}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
