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
      className="w-[150px] sm:w-[300px] h-[290px] md:w-[350px] lg:w-[450px] rounded-xl overflow-hidden shadow-lg relative flex items-center justify-center cursor-pointer"
      style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* White overlay */}
      <div className="absolute inset-0 bg-white/50" />
      {/* Text content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-6">
        {title && <div className="text-black text-center text-xl font-bold mb-2 drop-shadow-lg">{title}</div>}
        <p className="text-black text-center text-base drop-shadow-lg">{description}</p>
      </div>
    </div>
  );
}

export default Card;