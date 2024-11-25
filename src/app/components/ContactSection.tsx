"use client";
import React, { useState } from "react";

const ContactSection: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePopupToggle = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="flex flex-col items-end justify-end h-full w-full bg-white">
      <div className="container mx-auto px-6 md:px-20">
        <div className="flex flex-wrap justify-between items-center gap-6 pt-6 md:pt-24">
          {/* Header Section */}
          <div className="flex flex-col gap-6 md:gap-10">
            <h2
              className="font-medium text-black"
              style={{
                fontSize: "clamp(1.5rem, 1rem + 4vw, 4rem)",
                lineHeight: "clamp(1.8rem, 1.2rem + 4vw, 4.5rem)",
              }}
            >
              Got an Interesting Project?
            </h2>
            <h2
              id="letsConnectDiv"
              className="font-medium bg-clip-text text-transparent"
              style={{
                fontSize: "clamp(1.5rem, 1rem + 4vw, 4rem)",
                lineHeight: "clamp(1.8rem, 1.2rem + 4vw, 4.5rem)",
                backgroundImage: "linear-gradient(90deg, #bf00ff, #ff5633)",
              }}
            >
              Let’s Connect.
            </h2>
          </div>

          {/* Button */}
          <button
            aria-labelledby="letsConnectDiv"
            onClick={handlePopupToggle}
            className="group relative rounded-full p-4 bg-gray-200 transition-transform hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 36 36"
              fill="none"
              className="w-6 h-6 md:w-9 md:h-9 group-hover:translate-x-8 group-hover:translate-y-[-8px]"
            >
              <path
                fill="url(#service_arrow_color)"
                fillRule="evenodd"
                d="M35.892.81H2.108v5.631h24.171L.941 31.78l3.982 3.982L30.26 10.423v24.172h5.63V.81Z"
                clipRule="evenodd"
              ></path>
              <defs>
                <linearGradient
                  id="service_arrow_color"
                  x1="0.086"
                  x2="35.104"
                  y1="25.3"
                  y2="25.3"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="black"></stop>
                  <stop offset="0.06" stopColor="#C306F1"></stop>
                  <stop offset="0.53" stopColor="#E3318C"></stop>
                  <stop offset="0.85" stopColor="#F74C4C"></stop>
                  <stop offset="1" stopColor="#FF5633"></stop>
                </linearGradient>
              </defs>
            </svg>
          </button>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-4 md:pb-24">
        <div className="flex flex-row justify-center items-center gap-4">
          <a
            className="flex items-center gap-2 px-4 py-2 rounded-lg border hover:bg-black hover:text-white transition"
            href="tel:+919400303325"
          >
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.3545 22.2323C15.3344 21.7262 11.1989 20.2993 7.44976 16.5502C3.70065 12.8011 2.2738 8.66559 1.76767 6.6455C1.47681 5.48459 2.00058 4.36434 2.88869 3.72997L5.21694 2.06693C6.57922 1.09388 8.47432 1.42407 9.42724 2.80051L10.893 4.91776C11.5152 5.8165 11.3006 7.0483 10.4111 7.68365L9.24234 8.51849C9.41923 9.1951 9.96939 10.5846 11.6924 12.3076C13.4154 14.0306 14.8049 14.5807 15.4815 14.7576L16.3163 13.5888C16.9517 12.6994 18.1835 12.4847 19.0822 13.1069L21.1995 14.5727C22.5759 15.5257 22.9061 17.4207 21.933 18.783L20.27 21.1113C19.6356 21.9994 18.5154 22.5232 17.3545 22.2323ZM8.86397 15.136C12.2734 18.5454 16.0358 19.8401 17.8405 20.2923C18.1043 20.3583 18.4232 20.2558 18.6425 19.9488L20.3056 17.6205C20.6299 17.1665 20.5199 16.5348 20.061 16.2171L17.9438 14.7513L17.0479 16.0056C16.6818 16.5182 16.0047 16.9202 15.2163 16.7501C14.2323 16.5378 12.4133 15.8569 10.2782 13.7218C8.1431 11.5867 7.46219 9.7677 7.24987 8.7837C7.07977 7.9953 7.48181 7.31821 7.99439 6.95208L9.24864 6.05618L7.78285 3.93893C7.46521 3.48011 6.83351 3.37005 6.37942 3.6944L4.05117 5.35744C3.74413 5.57675 3.64162 5.89565 3.70771 6.15943C4.15989 7.96418 5.45459 11.7266 8.86397 15.136Z"
                fill="#0F0F0F"
              />
            </svg>
            <h6 className="text-black">Call Now</h6>
          </a>
          <a
            className="flex items-center gap-2 px-4 py-2 rounded-lg border hover:bg-black hover:text-white transition"
            href="mailto:info@urbanhubinnovations.com"
          >
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 7L10.94 11.3375C11.5885 11.7428 12.4115 11.7428 13.06 11.3375L20 7M5 18H19C20.1046 18 21 17.1046 21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18Z"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h6 className="text-black">Email Us</h6>
          </a>

          <a
            className="flex items-center gap-2 px-4 py-2 rounded-lg border hover:bg-black hover:text-white transition"
            href="tel:+919400303325"
          >
            <svg
              fill="#000000"
              width="20px"
              height="20px"
              viewBox="-5.5 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>linkedin</title>
              <path d="M0 8.219v15.563c0 1.469 1.156 2.625 2.625 2.625h15.563c0.719 0 1.406-0.344 1.844-0.781 0.469-0.469 0.781-1.063 0.781-1.844v-15.563c0-1.469-1.156-2.625-2.625-2.625h-15.563c-0.781 0-1.375 0.313-1.844 0.781-0.438 0.438-0.781 1.125-0.781 1.844zM2.813 10.281c0-1 0.813-1.875 1.813-1.875 1.031 0 1.875 0.875 1.875 1.875 0 1.031-0.844 1.844-1.875 1.844-1 0-1.813-0.813-1.813-1.844zM7.844 23.125v-9.531c0-0.219 0.219-0.406 0.375-0.406h2.656c0.375 0 0.375 0.438 0.375 0.719 0.75-0.75 1.719-0.938 2.719-0.938 2.438 0 4 1.156 4 3.719v6.438c0 0.219-0.188 0.406-0.375 0.406h-2.75c-0.219 0-0.375-0.219-0.375-0.406v-5.813c0-0.969-0.281-1.5-1.375-1.5-1.375 0-1.719 0.906-1.719 2.125v5.188c0 0.219-0.219 0.406-0.438 0.406h-2.719c-0.156 0-0.375-0.219-0.375-0.406zM2.875 23.125v-9.531c0-0.219 0.219-0.406 0.375-0.406h2.719c0.25 0 0.406 0.156 0.406 0.406v9.531c0 0.219-0.188 0.406-0.406 0.406h-2.719c-0.188 0-0.375-0.219-0.375-0.406z"></path>
            </svg>
            <h6 className="text-black">Linkedin</h6>
          </a>
        </div>
      </div>

      {/* Sliding Contact Form */}
      <div
        className={`fixed inset-x-0 bottom-0 z-50 transform transition-transform ${
          isPopupOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div
          className="bg-white rounded-t-2xl shadow-lg p-6"
          style={{ maxHeight: "90vh", overflowY: "auto" }}
        >
          {/* Close Button */}
          <button
            onClick={handlePopupToggle}
            className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 hover:bg-black hover:text-white"
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
          <h2 className="text-center text-black font-medium text-xl md:text-3xl">
            Let’s Get Into Work!
          </h2>
          <form className="mt-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="text-black">Name / Company</label>
                <input
                  className="mt-1 w-full border rounded-lg p-2 focus:ring"
                  placeholder="Your Name / Company"
                />
              </div>
              <div>
                <label className="text-black">Email</label>
                <input
                  className="mt-1 w-full border rounded-lg p-2 focus:ring"
                  placeholder="Your Email"
                  type="email"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-black">Requirement Based On</label>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Website Development", "Mobile Application", "Other"].map(
                  (item) => (
                    <button
                      key={item}
                      type="button"
                      className="px-4 py-2 rounded-lg border hover:bg-black hover:text-white"
                    >
                      {item}
                    </button>
                  )
                )}
              </div>
            </div>
            <button className="mt-6 w-full bg-black text-white py-2 rounded-lg hover:scale-105">
              Submit Your Enquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
