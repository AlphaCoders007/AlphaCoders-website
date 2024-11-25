// /src/components/Carousel/BlurImage.tsx
import React, { useState, useEffect } from 'react';

interface BlurImageProps {
  src: string; // The high-quality image source
  alt: string; // Image alt text for accessibility
  fill?: boolean; // To make the image fill its container
  className?: string; // Additional CSS classes
}

const BlurImage: React.FC<BlurImageProps> = ({ src, alt, fill = false, className = '' }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => setLoading(false);
  }, [src]);

  return (
    <div
      className={`relative ${fill ? 'w-full h-full' : 'w-auto h-auto'} ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className={`object-cover transition-all duration-500 ${loading ? 'blur-3xl' : 'blur-0'}`}
        style={{
          filter: loading ? 'blur(20px)' : 'none',
          transition: 'filter 0.5s ease',
        }}
      />
      {loading && (
        <div className="absolute inset-0 bg-gray-300 animate-pulse" />
      )}
    </div>
  );
};

export default BlurImage;
