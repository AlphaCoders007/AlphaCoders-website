"use client";

import React from "react";
import Link from "next/link";

function NavBarSection() {
  return (
    <header className="sticky top-2 left-0 z-30 ">
      <div className="flex flex-col justify-center items-center py-5 px-6">
        {/* Logo - Centered */}
        <Link href="/">
          <div className="flex flex-col items-center space-y-1">
            <div className="flex items-center space-x-3">
              <span className="text-3xl lg:text-3xl font-wide font-thin bg-gradient-to-r from-[#bf00ff] to-[#ff5633] text-transparent bg-clip-text text-center">
                alphacoders
              </span>
            </div>
            <p className="text-xl text-gray-600 font-ThicccboiRegular  text-center">
              Software Innovations
            </p>
          </div>
        </Link>
      </div>
      
    </header>
  );
}

export default NavBarSection;