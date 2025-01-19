"use client";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";


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
    <motion.div
      id="contact"
      className="max-w-[1440px] mx-auto py-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: false }}
    >
      <h1 className="text-white text-2xl lg:text-4xl text-center font-bold mb-8">
        Reach me out
      </h1>

      <div className="container mx-auto px-4">
        <div
          className="flex flex-col md:flex-row justify-center
        gap-10 items-center md:space-y-0 md:space-x-5"
        >
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="backdrop-filter backdrop-blur-lg bg-white/10 p-6 rounded-2xl shadow-md w-full md:w-1/2 border border-white/20"
          >
            <div className="mb-4">
              <label className="block text-white font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="w-full px-3 py-2 text-gray-900 rounded-xl"
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
                className="w-full px-3 py-2 text-gray-900 rounded-xl"
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
                className="w-full px-3 py-2 text-gray-900 rounded-xl"
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
              className="w-1/2  bg-purple-900 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-2xl"
            >
              Send Message
            </button>
          </form>

          <div className="flex justify-center items-center mt-4">
        <a
          href="https://wa.me/+8801882833403"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-green-500 hover:text-green-700 transition duration-300"
        >
          <FaWhatsapp size={60} />
          <span>Chat with me on WhatsApp</span>
        </a>
      </div>

          {/* Image beside the form */}

          {/* <Image
            src={"/msg.gif"}
            alt="email"
            width={300}
            height={300}
            className="rounded-3xl w-ull"
          /> */}
        </div>
      </div>
    </motion.div>
    
  );
};

export default Contact;
