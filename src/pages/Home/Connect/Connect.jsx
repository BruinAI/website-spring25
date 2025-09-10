import React from 'react';
import Card from './Card/Card.jsx';

const cardData = [
  {
    image: '/website-spring25/assets/sairs2025group.jpeg',
    title: 'SAIRS 2025',
    description: "Southern California's largest AI conference"
  },
  {
    image: '/website-spring25/assets/baidemoday.jpeg',
    title: 'Demo Days',
    description: 'Presenting to VCs and investors'
  },
  {
    image: '/website-spring25/assets/yacht.jpeg',
    title: 'Year-End Celebrations',
    description: 'yacht party?'
  },
  {
    image: '/website-spring25/assets/insight.jpeg',
    title: 'Career Talks',
    description: 'with top companies'
  },
];

function Connect() {
    return (
        <div className="relative w-[88vw] lg:w-[77vw] py-8">
            {/* Right Side - Sticky positioning */}
            <div className="sticky top-8 right-8 sm:right-16 max-w-[30vw] pr-2 sm:pr-8 z-10 flex items-start mt-16 float-right">
                <div className="text-left">
                    <span className="absolute left-0 text-[7rem] md:text-[10rem] font-black text-white/10 select-none leading-none -z-10">02</span>
                    <div className="relative ml-0 mt-10 md:ml-5">
                        <span className="inline-block mb-4 text-[#EE78D0] font-bold tracking-widest text-lg uppercase border-t-2 border-[#EE78D0] pt-2 pr-6">Connect</span>
                        <h2 className="text-xl md:text-4xl font-extrabold mb-6 text-white">Bringing opportunity, building community</h2>
                        <a href="#" className="text-[#EE78D0] font-semibold hover:underline">see more &rarr;</a>
                    </div>
                </div>
            </div>

            {/* Left Side with Cards */}
            <div className="ml-0 sm:ml-8">
                <div className="py-16 px-8 pb-16">
                    <div className="flex flex-col gap-4 md:gap-8">
                        {cardData.map((card, idx) => (
                            <div key={idx} className="flex justify-left md:justify-center">
                                <div className="w-[275px] sm:w-[350px] md:w-[400px] lg:w-[450px] xl:w-[500px] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px]">
                                    <Card 
                                        image={card.image} 
                                        title={card.title} 
                                        description={card.description} 
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Connect;