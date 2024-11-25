"use client";
import React from "react";
import Link from "next/link";

function NavBarSection() {
  return (
    <header className="absolute top-10 left-0 right-0 z-30 max-w-7xl mx-auto px-6">
      <div className="flex justify-center items-center py-5">
        {/* Logo - Centered */}
        <Link href="/">
          <div className="flex flex-col items-center space-y-1">
            <div className="flex items-center space-x-3">
             
              <span className="text-3xl sm:text-4xl font-ThicccboiMedium bg-gradient-to-r from-[#bf00ff] to-[#ff5633] text-transparent bg-clip-text">
                AlphaCoders
              </span>
            </div>
            <p className="text-xl text-gray-600 font-ThicccboiRegular">
              Software Innovations
            </p>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default NavBarSection;