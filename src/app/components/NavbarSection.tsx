"use client";

import React from "react";
import Link from "next/link";

function NavBarSection() {
  return (
    <header className="relative">
      <div className="fixed  w-full z-40 backdrop-blur-2xl">
        <div className="flex flex-col justify-center items-center py-5 px-6">
          <Link href="/">
            <div className="flex flex-col items-center">
              <div className="flex flex-col items-center">
              <span className="text-3xl lg:text-3xl font-wide font-thin  text-black dark:text-white    text-center">
                   alphacoders
                </span>
                <p className="text-xs dark:text-white text-black font-Orbitron text-center ">
                  SOFTWARE INNOVATIONS
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 640px) {
          .fixed {
            justify-content: center;
            align-items: center;
            display: flex;
            width: 100%;
          }
        }
      `}</style>
    </header>
  );
}

export default NavBarSection;
