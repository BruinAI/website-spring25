import react from 'react';

function Create() {
    return (
        <section className="w-[69vw] sm:w-[73vw] lg:w-[77vw] flex justify-center items-center bg-transparent py-16">
        <div className="w-[85vw] max-w-7xl flex flex-col md:flex-row items-center gap-20">
        {/* Left Column */}
        <div className="flex-[1.75] text-left relative">
            <span className="absolute -top-8 left-0 text-[7rem] md:text-[10rem] font-black text-white/10 select-none leading-none z-0">01</span>
            <div className="relative z-10 ml-15">
                <span className="inline-block mb-4 text-[#EE78D0] font-bold tracking-widest text-lg uppercase border-t-2 border-[#EE78D0] pt-2 pr-6">Create</span>
                <h2 className="text-xl md:text-4xl font-extrabold mb-6 text-white">Innovating solutions, driving impact</h2>
                <div className="mb-4">
                    <h3 className="text-sm md:text-lg font-bold text-white mb-1">Internal Projects</h3>
                    <p className="text-white/80 text-xs md:text-sm lg:text-base mb-4">Developing innovative AI-driven products, from wildfire relief to online news aggregators.</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-sm md:text-lg font-bold text-white mb-1">Client Services</h3>
                    <p className="text-white/80 text-xs md:text-sm lg:text-base mb-4">Building AI solutions for clients from emerging startups to Fortune-500 companies.</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-sm md:text-lg font-bold text-white mb-1">Research Collaborations</h3>
                    <p className="text-white/80 text-xs md:text-sm lg:text-base mb-4">Partnering with professors at UCLA to research and explore new advancements.</p>
                </div>
                <a href="#" className="text-[#EE78D0] font-semibold my-4 inline-block hover:underline">discover more &rarr;</a>
            </div>
        </div>
        {/* Right Column */}
        <div className="flex-[1] flex flex-col items-center min-w-[180px] max-w-[300px]">
            <img
            src="/website-spring25/assets/beckpanel.jpg"
            alt="photo"
            className="rounded-lg w-full object-cover"
            loading="lazy"
            />
        </div>
        </div>
        </section>
    );
}

export default Create;