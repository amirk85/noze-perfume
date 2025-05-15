"use client";
import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import BorderedTitle from "@/shared/BorderedTitle";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message.replace(
        /'([a-zA-Z])/g,
        "&#39;$1",
      )}`,
    );

    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact-us" className="bg-gray-950 py-8 md:py-12 lg:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        {/* Centered Heading */}
        <div className="md:mb-12 text-center">
          {/* Using BorderedTitle here but centered */}
          <BorderedTitle title="Contact Us" className="grid place-items-center" />
        </div>

        <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-16">
          {/* Left: Contact Details */}
          <div className="w-full md:w-1/2 text-gray-300 space-y-6 md:space-y-8 text-sm md:text-base">
            <div className="flex items-start gap-4">
              <FaPhoneAlt size={24} className="text-white mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white">Phone</h3>
                <p className="text-gray-400">+1 (234) 567-890</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaEnvelope size={24} className="text-white mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white">Email</h3>
                <p className="text-gray-400">contact@nozeexports.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaMapMarkerAlt size={24} className="text-white mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white">Address</h3>
                <p className="text-gray-400">
                  123 Fragrance Blvd, Suite 45, Perfume City, Country
                </p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="w-full md:w-1/2 bg-gray-950 p-5 md:p-8 rounded-lg shadow-lg border border-gray-800">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-5 md:mb-6 text-center md:text-left">
              Get in Touch
            </h3>

            {isSubmitted ? (
              <div className="text-center text-white text-sm md:text-base">
                <p className="mb-4">
                  Thank you for contacting us! We&apos;ll get back to you soon.
                </p>
                <button
                  className="bg-gray-950/50 border border-gray-600 px-6 py-2 md:px-8 md:py-3 hover:bg-gray-900 cursor-pointer transition duration-300 rounded-lg"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label
                    className="block text-white text-sm md:text-base mb-1"
                    htmlFor="name"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 md:p-4 bg-gray-900 text-white rounded-lg border border-gray-800 text-sm md:text-base"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label
                    className="block text-white text-sm md:text-base mb-1"
                    htmlFor="email"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 md:p-4 bg-gray-900 text-white rounded-lg border border-gray-800 text-sm md:text-base"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <label
                    className="block text-white text-sm md:text-base mb-1"
                    htmlFor="message"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 md:p-4 bg-gray-900 text-white rounded-lg border border-gray-800 text-sm md:text-base"
                    placeholder="Write your message"
                    rows={4}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="bg-gray-950/50 border w-full border-gray-600 px-6 py-3 md:px-8 md:py-3 hover:bg-gray-900 cursor-pointer transition duration-300 rounded-lg text-sm md:text-base"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
