import react from 'react';

function Create() {
    return (
        <section className="w-[88vw] lg:w-[77vw] flex justify-center bg-transparent py-16 pr-7">
        <div className="w-[85vw] max-w-7xl flex flex-col md:flex-row items-center gap-22">
        {/* Left Column */}
        <div className="flex-[1.75] text-left relative">
            <span className="absolute -top-8 left-0 text-[10rem] font-black text-white/10 select-none leading-none z-0">01</span>
            <div className="relative z-10 ml-15">
                <span className="inline-block mb-4 text-[#EE78D0] font-bold tracking-widest text-lg uppercase border-t-2 border-[#EE78D0] pt-2 pr-6">Create</span>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white">Innovating solutions, driving impact</h2>
                <div className="mb-4">
                    <h3 className="text-md md:text-lg font-bold text-white mb-1">Internal Projects</h3>
                    <p className="text-white/80 text-sm lg:text-base mb-4">Developing innovative AI-driven products, from wildfire relief receipt itemization to online news aggregators.</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-md md:text-lg font-bold text-white mb-1">Client Services</h3>
                    <p className="text-white/80 text-sm lg:text-base mb-4">Building AI solutions for clients from emerging startups to Fortune-500 companies.</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-md md:text-lg font-bold text-white mb-1">Research Collaborations</h3>
                    <p className="text-white/80 text-sm lg:text-base mb-4">Partnering with professors at UCLA to research and explore new advancements.</p>
                </div>
                <a href="#" className="text-[#EE78D0] font-semibold mt-4 inline-block hover:underline">read more &rarr;</a>
            </div>
        </div>
        {/* Right Column */}
        <div className="flex-[1] flex flex-col items-center min-w-[180px] max-w-[300px]">
            <img
            src="/assets/baidemoday.jpeg"
            alt="photo"
            className="rounded-xl w-full object-cover"
            />
        </div>
        </div>
        </section>
    );
}

export default Create;