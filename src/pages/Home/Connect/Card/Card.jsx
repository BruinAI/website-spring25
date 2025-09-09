import React from 'react';

/**
 * Props:
 * - image: string (image URL)
 * - title: string (optional, for accessibility)
 * - description: string
 */
function Card({ image, title = '', description }) {
  return (
    <div
      className=" h-[100%] rounded-lg overflow-hidden shadow-lg relative flex items-center justify-center cursor-pointer"
      style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/65" />
      {/* Text content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-6">
        {title && <div className="text-white text-center text-xl font-bold mb-2 drop-shadow-lg">{title}</div>}
        <p className="text-white text-center text-xs md:text-sm drop-shadow-lg">{description}</p>
      </div>
    </div>
  );
}

export default Card;