"use client"

import { useEffect, useState } from 'react';
import Image from 'next/image';
const ThemeToggle = () => {
  const [theme, setTheme] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false); 

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme); 
    } else {
      setTheme('light');
      document.documentElement.classList.add('light');
    }
    setMounted(true); 
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); 
    document.documentElement.classList.remove('light', 'dark'); 
    document.documentElement.classList.add(newTheme); 
  };

  if (!mounted) {
    <Image
        src="/sunmoonimg.png"       // Source of the image
        alt="A description of the image"  
        width={36}                    
        height={36}                 
        quality={90}                  
      />
  }

  return (
       <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-3 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-xl shadow-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-all z-50"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>

  );
};

export default ThemeToggle;
