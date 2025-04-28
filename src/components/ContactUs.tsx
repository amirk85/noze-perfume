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
    // Display form data in an alert
    alert(
      `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message.replace(/'([a-zA-Z])/g, "&#39;$1")}`,
    );

    // Reset form data and set the submitted state
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact-us" className="py-24 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="mb-16"></div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Content - Contact Details */}

          <div className="w-full md:w-1/2 text-gray-300 space-y-8">
            <BorderedTitle title="Contact Us" />
            <div className="flex items-start gap-4 mt-16">
              <FaPhoneAlt size={28} className="text-white" />
              <div>
                <h3 className="text-xl font-semibold text-white">Phone</h3>
                <p className="text-gray-400">+1 (234) 567-890</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaEnvelope size={28} className="text-white" />
              <div>
                <h3 className="text-xl font-semibold text-white">Email</h3>
                <p className="text-gray-400">contact@nozeexports.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaMapMarkerAlt size={28} className="text-white" />
              <div>
                <h3 className="text-xl font-semibold text-white">Address</h3>
                <p className="text-gray-400">
                  123 Fragrance Blvd, Suite 45, Perfume City, Country
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <div className="w-full md:w-1/2 bg-gray-950 p-6 rounded-lg shadow-lg border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>

            {isSubmitted ? (
              <div className="text-center text-white">
                <p className="mb-4">
                  Thank you for contacting us! We&apos;ll get back to you soon.
                </p>
                <button
                  className="bg-gray-950/50 border border-gray-600 px-8 py-3 hover:bg-gray-900 cursor-pointer transition duration-300 rounded-lg"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-white" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-4 bg-gray-900 text-white rounded-lg border border-gray-800"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-white" htmlFor="email">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 bg-gray-900 text-white rounded-lg border border-gray-800"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-white" htmlFor="message">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-4 bg-gray-900 text-white rounded-lg border border-gray-800"
                    placeholder="Write your message"
                    rows={4}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="bg-gray-950/50 border w-full border-gray-600 px-8 py-3 hover:bg-gray-900 cursor-pointer transition duration-300 rounded-lg"
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
