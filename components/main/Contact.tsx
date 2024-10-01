"use client";
import Image from "next/image";
import React, { useState } from "react";
import FloatingDocs from "./FloatingDocs";
import Swal from "sweetalert2"; // Import SweetAlert

const Contact: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });

    // Show SweetAlert on successful form submission
    Swal.fire({
      title: "Message Sent!",
      text: "Thank you for reaching out, I will get back to you soon.",
      icon: "success",
      confirmButtonText: "OK",
    });

    // Clear form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div id="contact" className="py-10">
      <h1 className="text-white text-2xl lg:text-5xl text-center font-bold mb-8">
        Reach me out
      </h1>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-5">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="backdrop-filter backdrop-blur-lg bg-white/10 p-6 rounded-lg shadow-md w-full md:w-1/2 border border-white/20"
          >
            <div className="mb-4">
              <label className="block text-white font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="w-full px-3 py-2 text-gray-900 rounded-lg"
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full px-3 py-2 text-gray-900 rounded-lg"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="w-full px-3 py-2 text-gray-900 rounded-lg"
                id="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
            >
              Send Message
            </button>
          </form>

          <div className="flex flex-col items-center">
            <div>
              <FloatingDocs />
            </div>

            {/* Image beside the form */}
            <div className="w-full md:w-2/3">
              <Image
                src={"/Email2.gif"}
                alt="email"
                width={700}
                height={900}
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
