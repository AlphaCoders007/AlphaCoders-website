"use client";

import React, { useState } from "react";
import { Phone, Mail, Linkedin, Instagram, Facebook, Github } from "lucide-react";

const ConnectSection: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [budget, setBudget] = useState(10);
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    website: "",
    socialLinks: "",
    requirement: "",
  });

  const handlePopupToggle = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleBudgetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(Number(event.target.value));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex h-full w-full flex-col items-end justify-end bg-white">
      <div className="max-container mx-auto px-[1.5rem] md:px-[5rem]">
        <div className="flex w-full items-center justify-between gap-[1rem] md:gap-[4rem] pt-[0rem] md:pt-[12rem]">
          {/* Header Section */}
          <div className="flex flex-col items-start justify-start gap-10">
            <div>
              <h2
                className="font-ThicccboiRegular text-black md:font-ThicccboiMedium"
                style={{
                  fontSize: "clamp(1rem, -.3rem + 5.333vw, 4.5rem)",
                  lineHeight: "clamp(1.1rem, -.2rem + 5.333vw, 4.6rem)",
                }}
              >
                Got an Interesting Project?
              </h2>
              <h2
                id="letsConnectDiv"
                className="text-black font-ThicccboiMedium"
                style={{
                  fontSize: "clamp(1rem, -.3rem + 5.333vw, 4.5rem)",
                  lineHeight: "clamp(1.1rem, -.2rem + 5.333vw, 4.6rem)",
                  backgroundImage: "linear-gradient(90deg, #bf00ff, #ff5633)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  backgroundRepeat: "no-repeat",
                }}
              >
                Let’s Connect.
              </h2>
            </div>
          </div>

          {/* Button */}
          <button
            aria-labelledby="letsConnectDiv"
            className="group relative rounded-full bg-[#F2F2F2] overflow-hidden transition-transform p-8 hover:scale-110"
            onClick={handlePopupToggle}
          >
             <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 36"
        fill="none"
        className="transition-transform duration-300 w-8 h-8 group-hover:translate-x-[250%] group-hover:translate-y-[-250%]"
      >
        <path
          fill="url(#service_arrow_color)"
          fillRule="evenodd"
          d="M35.892.81H2.108v5.631h24.171L.941 31.78l3.982 3.982L30.26 10.423v24.172h5.63V.81Z"
          clipRule="evenodd"
        />
        <defs>
          <linearGradient
            id="service_arrow_color"
            x1="0.086"
            x2="35.104"
            y1="25.3"
            y2="25.3"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#BF00FF" />
            <stop offset="0.06" stopColor="#C306F1" />
            <stop offset="0.53" stopColor="#E3318C" />
            <stop offset="0.85" stopColor="#F74C4C" />
            <stop offset="1" stopColor="#FF5633" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 36"
        fill="none"
        className="absolute translate-x-[-250%] translate-y-[250%] transition-transform duration-300 inset-8 w-8 h-8 group-hover:translate-x-0 group-hover:translate-y-0"
      >
        <path
          fill="url(#service_arrow_color)"
          fillRule="evenodd"
          d="M35.892.81H2.108v5.631h24.171L.941 31.78l3.982 3.982L30.26 10.423v24.172h5.63V.81Z"
          clipRule="evenodd"
        />
        <defs>
          <linearGradient
            id="service_arrow_color"
            x1="0.086"
            x2="35.104"
            y1="25.3"
            y2="25.3"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#BF00FF" />
            <stop offset="0.06" stopColor="#C306F1" />
            <stop offset="0.53" stopColor="#E3318C" />
            <stop offset="0.85" stopColor="#F74C4C" />
            <stop offset="1" stopColor="#FF5633" />
          </linearGradient>
        </defs>
      </svg>
          </button>
        </div>

        {/* Contact Section */}
        <div className="py-8 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl p-6 md:p-8">
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                <a
                  href="tel:+919400303325"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </a>
                <a
                  href="mailto:info@urbanhubinnovations.com"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email Us</span>
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
                {/* Social Links */}
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Form */}
      {isPopupOpen && (
        <div
          className="fixed inset-x-0 bottom-0 z-50 bg-white rounded-t-[30px] shadow-xl p-6"
          style={{ height: "calc(100vh - 70px)", overflowY: "auto" }}
        >
          <button onClick={handlePopupToggle} className="absolute top-2 right-2">
            <svg width="24" height="24">
              <path
                stroke="#333"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M5.001 5 19 19M5 19 18.999 5"
              />
            </svg>
          </button>
          <h2
            className="text-black text-6xl text-center font-ThicccboiMedium text-global-font-sm-h3 md:text-global-font-h1"
            style={{
              fontSize: "clamp(1rem, -.3rem + 5.333vw, 4.5rem)",
              lineHeight: "clamp(1.1rem, -.2rem + 5.333vw, 4.6rem)",
              backgroundImage: "linear-gradient(90deg, #bf00ff, #ff5633)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text", // For webkit browsers (Chrome/Safari)
              color: "transparent", // Make text color transparent so the gradient shows
              backgroundRepeat: "no-repeat",
            }}
          >Let’s Get Into Work!</h2>
          <form className="mt-20 overflow-auto h-[80vh]">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="companyName" className="text-black text-lg">
                  Name / Company
                </label>
                <input
                  placeholder="Your Name / Company"
                  className="mt-1 w-full border-2 border-gray-300 rounded-[1.5rem] p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  type="text"
                  name="companyName"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-black text-lg">
                  Email
                </label>
                <input
                  id="email"
                  placeholder="Your Email"
                  className="mt-1 w-full border-2 border-gray-300 rounded-[1.5rem] p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  type="email"
                  name="email"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="text-black text-lg">Requirement Based On</label>
              <div className="flex flex-wrap gap-6 mt-3">
                {[
                  "Website Development",
                  "Mobile Application",
                  "UI/UX",
                  "Branding",
                  "Web Application",
                  "Other",
                ].map((item) => (
                  <button
                    key={item}
                    type="button"
                    className="border-2 border-gray-300 bg-gray-200 text-gray-700 rounded-full px-8 py-4 text-lg hover:bg-black hover:text-white transition-all"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <label className="text-black text-lg">Budget</label>
              <div className="flex items-center justify-between mt-3">
                <input
                  type="range"
                  min="10"
                  max="1000"
                  className="w-full"
                  value={budget} // Set the range value to state
                  onChange={handleBudgetChange} // Update state on change
                />
                <span>{budget}</span> {/* Display the budget value */}
              </div>
            </div>

            <div className="mt-4">
              <label className="text-black text-lg">Enquiry</label>
              <textarea
                rows={4}
                placeholder="Give a brief about the project"
                className="mt-1 w-full h-200 border-2 border-gray-300 rounded-[1.5rem] p-4 "
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-10 py-5 bg-black text-white rounded-full text-xl mt-6 hover:scale-105 transition-all"
            >
              Submit Your Enquiry
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ConnectSection;
