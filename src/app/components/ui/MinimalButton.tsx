"use client";

import React from "react";

const MinimalButton: React.FC = () => {
  return (
    <button className="relative inline-flex items-center px-8 py-3 text-sm font-thicccboi text-white transition-all duration-300 ease-in-out bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl shadow-md hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600">
      {/* Underline Effect */}
      <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-gray-200 transition-all duration-300 transform -translate-x-1/2 hover:w-full"></span>
      View More
    </button>
  );
};

export default MinimalButton;