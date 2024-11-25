"use client";
import React, { useState } from "react";

const ContactSection: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Toggle the popup form visibility
  const handlePopupToggle = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <section className="text-gray-600 body-font relative font-ThicccboiRegular">
      {/* Background Map */}
      <div className="absolute inset-0 bg-gray-300">
        <iframe
          width="100%"
          height="100%"
          style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
          title="map"
          src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
        />
      </div>

      {/* Content Section */}
      <div className="container px-5 py-24 mx-auto flex items-center justify-center relative z-10">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-xl hover:shadow-2xl transition-all duration-500">
          <h2 className="text-black text-lg mb-4 font-semibold tracking-wider uppercase">
            Feedback
          </h2>
          <p className="leading-relaxed mb-6 text-gray-600 text-sm font-light">
            We value your feedback! Let us know how we can improve or what you love about us.
          </p>
          <div className="relative mb-6">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded-lg border border-gray-300 from-[#bf00ff] to-[#ff5633] text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-all duration-300 ease-in-out"
            />
          </div>
          <div className="relative mb-6">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded-lg border border-gray-300 focus:border-[#ff5633] focus:ring-2 focus:ring-[#ff5633] h-32 text-base outline-none text-gray-700 py-2 px-4 resize-none leading-6 transition-all duration-300 ease-in-out"
            />
          </div>
          <button
            className="text-white bg-[#9f0eff] border-0 py-2 px-6 focus:outline-none hover:bg-[#1b22ff] rounded-lg text-lg w-full transform transition-all duration-300 hover:scale-105"
            onClick={handlePopupToggle}
          >
            Open Form
          </button>
          <p className="text-xs text-gray-500 mt-4 text-center">
            Chicharrones blog helvetica normcore iceland tousled brook viral artisan.
          </p>
        </div>
      </div>

      {/* Sliding Contact Form */}
      <div
        className={`fixed inset-x-0 bottom-0 z-50 transform transition-transform ${
          isPopupOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div
          className="bg-white rounded-t-2xl shadow-lg p-8"
          style={{ maxHeight: "90vh", overflowY: "auto" }}
        >
          {/* Close Button */}
          <button
            onClick={handlePopupToggle}
            className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 hover:bg-[#0244c7] hover:text-white transition-all duration-300"
            aria-label="Close Form"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <h2 className="text-center text-[#000000] font-medium text-2xl md:text-3xl">
            Let’s Get Into Work!
          </h2>
          <form className="mt-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="text-[#000000]">Name / Company</label>
                <input
                  className="mt-2 w-full border rounded-lg p-3 focus:ring-[#ff5633] transition-all duration-300"
                  placeholder="Your Name / Company"
                />
              </div>
              <div>
                <label className="text-[#000000]">Email</label>
                <input
                  className="mt-2 w-full border rounded-lg p-3 focus:ring-[#000000] transition-all duration-300"
                  placeholder="Your Email"
                  type="email"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="text-[#000000]">Requirement Based On</label>
              <div className="flex flex-wrap gap-4 mt-2">
                {["Website Development", "Mobile Application", "Other"].map(
                  (item) => (
                    <button
                      key={item}
                      type="button"
                      className="px-6 py-3 rounded-lg border border-[rgb(31,24,248)] text-[#cf20e2] hover:bg-[#690ff1] hover:text-white transition-all duration-300"
                    >
                      {item}
                    </button>
                  )
                )}
              </div>
            </div>

            <button className="mt-6 w-full bg-[#000000] text-white py-3 rounded-lg hover:bg-[#041b8d] transform transition-all duration-300 hover:scale-105">
              Submit Your Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
