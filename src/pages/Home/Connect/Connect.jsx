import React from 'react';
import SimpleSlider from './SimpleSlider/SimpleSlider.jsx';

function Connect() {
    return (
        <div>
        <section className="w-[88vw] lg:w-[77vw] flex justify-center bg-transparent py-16 md:pl-15">
            <div className="w-[72vw] sm:w-[75vw] lg:w-[65vw] flex flex-row items-top gap-2 sm:gap-7 lg:gap-10 md:justify-center">
            {/* Left Column */}
                <div className="flex-[1.5] flex flex-col items-left">
                    <SimpleSlider />
                </div>
            {/* Right Column */}
                <div className="flex-[0.5] text-left relative">
                    <span className="absolute -top-4 left-0 text-[10rem] font-black text-white/10 select-none leading-none z-0">02</span>
                    <div className="relative z-10 ml-5">
                        <span className="inline-block mt-4 mb-4 text-[#EE78D0] font-bold tracking-widest text-lg uppercase border-t-2 border-[#EE78D0] pt-2 pr-6">Connect</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white">Bringing opportunity, building community</h2>
                    </div>
                </div>
            </div>
        </section>
        <section className="w-full flex justify-center bg-transparent">
                <div className="w-[80vw] flex flex-nowrap justify-center items-center gap-8 py-8">
                  {/* Placeholder logos */}
                  <div className="w-32 h-16 bg-[#22223b] rounded-lg flex items-center justify-center text-white text-md font-bold opacity-80">lwk</div>
                  <div className="w-32 h-16 bg-[#22223b] rounded-lg flex items-center justify-center text-white text-md font-bold opacity-80">i don't</div>
                  <div className="w-32 h-16 bg-[#22223b] rounded-lg flex items-center justify-center text-white text-md font-bold opacity-80">want</div>
                  <div className="w-32 h-16 bg-[#22223b] rounded-lg flex items-center justify-center text-white text-md font-bold opacity-80">logos</div>
                  <div className="w-32 h-16 bg-[#22223b] rounded-lg flex items-center justify-center text-white text-md font-bold opacity-80">here</div>
                </div>
        </section>
        </div>
    );
}

export default Connect;