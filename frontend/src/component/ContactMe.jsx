import React, { useState } from "react";
import {
  FaPaperPlane,
  FaRegCopy,
  FaEnvelope,
} from "react-icons/fa";

const ContactMe = () => {
  const EMAIL = "adityagoel.dev@gmail.com";

  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    const mailtoLink = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;

    window.location.href = mailtoLink;
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(EMAIL);

    alert("Email copied!");
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
    >
      {/* Heading */}

      <h1 className="text-6xl md:text-8xl font-black mb-5 animate-fadeTop">
        Contact Me
      </h1>

      <p className="text-gray-500 tracking-widest uppercase mb-12 animate-fadeBottom">
        Let's build something amazing together
      </p>

      {/* Card */}

      <div
        className="
        w-full
        max-w-3xl
        bg-white/70
        backdrop-blur-xl
        border border-black/10
        rounded-[32px]
        p-8
        shadow-[0_20px_60px_rgba(0,0,0,0.08)]
        animate-fadeBottom
      "
      >
        {/* Email */}

        <label className="block mb-2 font-semibold">
          My Email
        </label>

        <div className="relative mb-6">
          <FaEnvelope className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            value={EMAIL}
            disabled
            className="
            w-full
            pl-14
            pr-4
            py-4
            rounded-2xl
            bg-gray-100
            border
            border-gray-200
            outline-none
          "
          />
        </div>

        {/* Subject */}

        <label className="block mb-2 font-semibold">
          Subject
        </label>

        <input
          type="text"
          placeholder="Enter subject..."
          value={subject}
          onChange={(e) =>
            setSubject(e.target.value)
          }
          className="
          w-full
          px-5
          py-4
          rounded-2xl
          border
          border-gray-200
          focus:border-black
          outline-none
          transition
          mb-6
        "
        />

        {/* Message */}

        <label className="block mb-2 font-semibold">
          Message
        </label>

        <textarea
          rows={6}
          placeholder="Write your message..."
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
          className="
          w-full
          px-5
          py-4
          rounded-2xl
          border
          border-gray-200
          focus:border-black
          outline-none
          transition
          resize-none
        "
        />

        {/* Buttons */}

        <div className="flex gap-5 mt-8 flex-wrap">

          <button
            onClick={handleSend}
            className="
            flex
            items-center
            gap-3

            bg-black
            text-white

            px-7
            py-4

            rounded-full

            hover:-translate-y-1

            transition-all

            duration-300

            hover:shadow-xl
          "
          >
            <FaPaperPlane />

            Send Email
          </button>

          <button
            onClick={handleCopy}
            className="
            flex
            items-center
            gap-3

            px-7
            py-4

            rounded-full

            border

            border-black

            hover:bg-black

            hover:text-white

            transition-all

            duration-300
          "
          >
            <FaRegCopy />

            Copy Email
          </button>

        </div>
      </div>
    </section>
  );
};

export default ContactMe;