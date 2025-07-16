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
      className="w-screen h-screen bg-black flex justify-center items-center"
    >
      <div className="container px-6 py-12 mx-auto">
        <div className="lg:flex lg:items-center lg:-mx-3">
          <div className="lg:w-1/2 lg:mx-3">
            <h1
              className={`${anton.className}  font-semibold text-red-400 capitalize`}
              style={{ fontSize: "clamp(1rem, 4vw, 6rem)" }}
            >
              Get in touch
              <br /> to see your ideas <br />
              come to life
            </h1>
            <div className="mt-6 md:mt-8 text-[#ffe5d5]"
          style={{ fontSize: "clamp(0.375rem, 1.5vw, 2.25rem)" }}>
              If you're looking to collaborate with a passionate and skilled
              team, and would like to hire me and my team for your project or
              idea, please don’t hesitate to get in touch with us right
              here—we’re excited to connect!
            </div>
            <div className="mt-6 w-80 md:mt-8">
              <h3 className={`${anton.className}  text-[#ffe5d5]`}
               style={{ fontSize: "clamp(0.75rem, 3vw, 4.5rem)" }}>
                Connect with me
              </h3>
              <div className="flex mt-4 -mx-1.5">
                <a
                  className="mx-1.5  text-red-400 hover:text-red-500"
                  href="https://www.linkedin.com/in/anugrah-singh-7777/"
                  style={{ fontSize: "clamp(0.5rem, 2vw, 3rem)" }}
                >
                  <FaLinkedinIn />
                </a>
                <a
                  className="mx-1.5  text-red-400 hover:text-red-500"
                  href="https://github.com/anugrahsingh7"
                  style={{ fontSize: "clamp(0.5rem, 2vw, 3rem)" }}
                >
                  <FaGithub />
                </a>
                <a
                  className="mx-1.5 text-red-400 hover:text-red-500"
                  href="mailto:anugrahsingh7777@gmail.com"
                  style={{ fontSize: "clamp(0.5rem, 2vw, 3rem)" }}
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
                <label className="block mb-2 font-bold text-black"
                  style={{ fontSize: 'clamp(0.422rem, 1.125vw, 0.844rem)' }}>
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="block w-full px-5 py-3 mt-2 text-black bg-red-400 border border-black/50 rounded-md placeholder-black/30 focus:outline-none"
                  style={{ fontSize: 'clamp(0.478rem, 1.125vw, 0.844rem)', padding: 'clamp(0.422rem, 1.125vw, 0.703rem) clamp(0.563rem, 1.688vw, 1.125rem)' }}
                  placeholder="Enter your name"
                />

                <label className="block mt-6 mb-2 font-bold text-black"
                  style={{ fontSize: 'clamp(0.422rem, 1.125vw, 0.844rem)' }}>
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="block w-full px-5 py-3 mt-2 text-black bg-red-400 border border-black/50 rounded-md placeholder-black/30 focus:outline-none"
                  style={{ fontSize: 'clamp(0.478rem, 1.125vw, 0.844rem)', padding: 'clamp(0.422rem, 1.125vw, 0.703rem) clamp(0.563rem, 1.688vw, 1.125rem)' }}
                  placeholder="Enter your email"
                />

                <label className="block mt-6 mb-2 font-bold text-black"
                  style={{ fontSize: 'clamp(0.422rem, 1.125vw, 0.844rem)' }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="block w-full h-32 px-5 py-3 mt-2 text-black bg-red-400 border border-black/50 rounded-md placeholder-black/30 focus:outline-none"
                  style={{ fontSize: 'clamp(0.478rem, 1.125vw, 0.844rem)', padding: 'clamp(0.422rem, 1.125vw, 0.703rem) clamp(0.563rem, 1.688vw, 1.125rem)' }}
                  placeholder="Type your message here"
                ></textarea>

                <button
                  type="submit"
                  className={`${anton.className} cursor-pointer w-full mt-6 border border-black rounded-md hover:bg-black hover:text-white transition-all duration-300 ease-in-out`}
                  style={{ fontSize: 'clamp(0.563rem, 1.406vw, 1.125rem)', padding: 'clamp(0.422rem, 1.125vw, 0.703rem) clamp(0.563rem, 1.688vw, 1.125rem)' }}
                >
                  Send Message
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
