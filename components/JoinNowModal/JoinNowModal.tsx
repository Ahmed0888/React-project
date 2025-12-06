"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

const JoinNowModal = ({ isOpen, onClose }: any ) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
  from_name: e.target.name.value,
  from_email: e.target.email.value,
  message: e.target.message.value,
  time: new Date().toLocaleString(),
};


    try {
      await emailjs.send(
        "service_y0gggj9",
        "template_fe4lkzw",
        formData,
        "Yy4c_0C_xXppnn_QD"
      );

      alert("Message Sent Successfully!");
      e.target.reset();
      onClose();
    } catch (err) {
      alert("Error sending message");
      console.log(err);
    }

    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[20000] bg-black/60 backdrop-blur-sm flex justify-center items-center px-4">
      <div className="bg-white w-full max-w-lg rounded-2xl p-6 shadow-lg animate-scaleIn relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-xl font-bold text-gray-600"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">Join Now</h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name="name"
            type="text"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 border rounded-md"
          />

          <input
            name="email"
            type="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 border rounded-md"
          />
          <input type="hidden" name="time" value={new Date().toLocaleString()} />


          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            required
            className="w-full px-4 py-2 border rounded-md"
          ></textarea>

          <button
            type="submit"
            className="w-full py-2 bg-blue-700 hover:bg-blue-900 text-white rounded-md transition-all"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>

      {/* Animation */}
      <style jsx>{`
        .animate-scaleIn {
          animation: scaleIn 0.3s ease;
        }
        @keyframes scaleIn {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default JoinNowModal;
