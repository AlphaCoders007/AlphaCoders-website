"use client";
import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  Linkedin,
  Instagram,
  Facebook,
  Github,
} from "lucide-react";
import ContactForm from "./ContactForm";

const ConnectSection: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [budgetRange, setBudgetRange] = useState<number[]>([10, 100]);
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);

  const handleBudgetRangeChange = (
    event: Event,
    newValue: number | number[]
  ) => {
    setBudgetRange(newValue as number[]);
  };

  const handlePopupToggle = () => {
    console.log("pop up done");

    setIsPopupOpen(!isPopupOpen);
  };

  // Scroll detection function
  const handleScroll = () => {
    const scrollPosition = window.innerHeight + window.scrollY;
    const documentHeight = document.documentElement.offsetHeight;

    // Check if the user has scrolled to the bottom
    if (scrollPosition >= documentHeight) {
      setIsScrolledToBottom(true);
    } else {
      setIsScrolledToBottom(false);
    }
  };

  // Add scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className="relative">
      <div>
        <div className="fixed bottom-0   w-full h-full">
          <div className="flex h-full  w-full flex-col items-end justify-end">
            <div className="max-container mx-auto px-[1.5rem] md:px-[5rem]">
              <div className="flex w-full items-center justify-between gap-[1rem] md:gap-[4rem] pt-[0rem] md:pt-[12rem] bg-background-light transition-colors">
                {/* Header Section */}
                <div className="flex flex-col items-start justify-start gap-10">
                  <div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-ThicccboiRegular leading-tight md:leading-snug">
                      Got an Interesting Project?
                    </h2>
                    <h2
                      id="letsConnectDiv"
                      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-ThicccboiMedium leading-tight md:leading-snug bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-orange-500"
                    >
                      Let’s Connect.
                    </h2>
                  </div>
                </div>

                {/* Button */}
                <button
                  aria-labelledby="letsConnectDiv"
                  onClick={handlePopupToggle}
                  className="group relative rounded-full bg-background-light overflow-hidden transition-transform p-8 hover:scale-110"
                >
                  {/* First Arrow */}
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
              <div className="py-8 md:py-16 text-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className=" rounded-3xl  p-6 md:p-8">
                    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                      <a
                        href="tel:+919419196416"
                        className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                      >
                        <Phone className="w-5 h-5" />
                        <span className="text-sm font-medium">Call Now</span>
                      </a>

                      <a
                        href="mailto:info@alphacoders.co.in"
                        className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                      >
                        <Mail className="w-5 h-5" />
                        <span className="text-sm font-medium">Email Us</span>
                      </a>

                      <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                      >
                        <Linkedin className="w-5 h-5" />
                        <span className="text-sm font-medium">LinkedIn</span>
                      </a>

                      <div className="flex items-center justify-center gap-4 md:gap-6">
                        <a
                          href="https://www.instagram.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                        >
                          <Instagram className="w-5 h-5" />
                          <span className="sr-only">Instagram</span>
                        </a>

                        <a
                          href="https://github.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                        >
                          <Github className="w-5 h-5" />
                          <span className="sr-only">GitHub</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sliding Contact Form */}

            <div
              className={`fixed inset-x-0 bottom-0 z-40 transition-all duration-500 ease-in-out ${
                isScrolledToBottom
                  ? "transform translate-y-0"
                  : "transform translate-y-full"
              }`}
              style={{
                pointerEvents: isScrolledToBottom ? "auto" : "none",
              }}
            >
              {/* Footer Content */}

              <div className="w-full bg-gradient-to-r from-purple-500 to-orange-500">
                <div className="text-center font-Montserrat leading-loose tracking-wide text-white text-sm p-2">
                  © 2024 AlphaCoder Software Innovations
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`fixed z-100 !important inset-x-0  bottom-0  transition-all duration-700 ease-out ${
            isPopupOpen
              ? "transform translate-y-0"
              : "transform translate-y-full"
          }`}
          style={{
            pointerEvents: isPopupOpen ? "auto" : "none",
            zIndex: 1050,
            position: "fixed",
          }}
        >
          <div
            className="bg-background-light transition-colors rounded-t-[30px] shadow-xl p-6 relative"
            style={{
              height: "calc(100vh - 90px)",
              overflowY: "auto",
            }}
          >
            <div className="absolute top-8 right-2 ">
              <button
                onClick={handlePopupToggle}
                className="hover:scale-110 transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                >
                  <path
                    className="stroke-gray-800 dark:stroke-white"
                    stroke="#333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M5.001 5 19 19M5 19 18.999 5"
                  ></path>
                </svg>
              </button>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-ThicccboiMedium leading-none bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              Let’s Get Into Work!
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ConnectSection;
