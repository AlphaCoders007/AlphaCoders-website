"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

interface MenuItem {
  label: string;
  href: string;
  iconSrc?: string;
}
interface ContactItem {
  type: "call" | "email" | "social";
  label: string;
  href: string;
  icon: JSX.Element; // JSX for the icon
}

const FloatingMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const menuItems: MenuItem[] = [
    { label: "Websites", href: "/websites", iconSrc: "cursor-icon.webp" },
    { label: "Mobile App", href: "/apps", iconSrc: "cursor-icon.webp" },
    { label: "UI/UX", href: "/ui-ux", iconSrc: "cursor-icon.webp" },
    { label: "Branding", href: "/branding", iconSrc: "cursor-icon.webp" },
  ];
  const contactItems: ContactItem[] = [
    {
      type: "call",
      label: "Call Now",
      href: "tel:+919400303325",
      icon: (
        <img
        src="call.svg" // Path to the SVG in the public folder
        alt="Phone Icon"
        className="w-6 h-6"
      />
      ),
    },
    {
      type: "email",
      label: "Mail Us",
      href: "mailto:info@alphacoders.co",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          className="w-6 h-6"
        >
          <path
            stroke="#333"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="1.5"
            d="M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5z"
          ></path>
          <path
            stroke="#333"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="1.5"
            d="m17 9-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9z"
          ></path>
        </svg>
      ),
    },
  ];

  const toggleMenu = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent click event from propagating
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className="fixed bottom-7 right-7 z-50">
      <div
        ref={menuRef}
        onClick={(event) => {
          if (!isOpen) {
            toggleMenu(event);
          }
        }}
        className={` overflow-hidden border  border-gray-300 bg-white rounded-2xl transition-all duration-300 ease-in-out ${isOpen ? "w-64 h-96" : "w-32 h-10"} cursor-pointer`}
      >
        <div className="relative flex items-center justify-center w-full h-full">
          {isOpen && (
            <div className="flex flex-col items-center justify-center gap-3 p-4 absolute top-0 left-0 right-0 bottom-0">
              <ul className="flex flex-col gap-1 font-montserrat text-sm w-full mt-4">
                {menuItems.map((item, index) => (
                  <li key={index} className={`${index === 0 ? "mt-2" : ""} cursor-pointer`}>
                    <Link href={item.href}>
                      <div className="group flex items-center justify-center gap-1 h-10 w-3/4 mx-auto overflow-hidden rounded-full hover:bg-gray-100 text-center cursor-pointer">
                        <div className="relative flex items-center text-gray-900">
                          <span
                            className="hidden group-hover:flex items-center justify-center transform transition-all duration-300 hover:ease-out"
                            style={{ transform: "rotate(75deg)" }}
                          >
                            <img
                              src={item.iconSrc}
                              alt="menu-icon"
                              width="24"
                              height="24"
                              className="w-6 h-6"
                            />
                          </span>
                          <span className="ml-1 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-orange-500 text-xl">
                            {item.label}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col items-center justify-center gap-4 rounded-2xl h-2/5 w-56 border border-gray-300 px-6 py-4 font-montserrat text-sm cursor-pointer">
                {contactItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    target={item.type === "social" ? "_blank" : undefined}
                    rel={item.type === "social" ? "noopener noreferrer" : undefined}
                    className="flex items-center justify-center gap-2.5 cursor-pointer"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-center text-gray-900">{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Toggle Button */}
      <div className="absolute top-0 mt-1 z-50 flex justify-center items-center cursor-pointer left-1/2 -translate-x-1/4"> 
        <button
          ref={buttonRef}
          onClick={(event) => {
            event.stopPropagation(); // Prevent propagation to prevent accidental menu closing
            toggleMenu(event);
          }}
          className="bg-transparent border-0 rounded-lg w-12 h-8 transition-all duration-300 cursor-pointer  border-green-700"
        >
          <img
            src="cursor-icon.webp"
            alt="Menu"
            className="w-8 h-8 transition-all duration-300 rounded-full "
            style={{
              opacity: isOpen ? "0" : "1", // Make image fully transparent when menu is open
              pointerEvents: isOpen ? "none" : "auto", // Disable pointer events when hidden
            }}
          />
        </button>
      </div>
    </div>

  );
};

export default FloatingMenu;
