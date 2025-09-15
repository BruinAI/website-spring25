import react from 'react';
import { Link } from 'react-router-dom';

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
                    <h3 className="text-sm md:text-lg font-bold text-white mb-1">Real-World Experience</h3>
                    <p className="text-white/80 text-xs md:text-sm lg:text-base mb-4">Building AI solutions for clients from emerging startups to Fortune-500 companies.</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-sm md:text-lg font-bold text-white mb-1">Research Collaborations</h3>
                    <p className="text-white/80 text-xs md:text-sm lg:text-base mb-4">Partnering with professors at UCLA to research and explore new advancements.</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-sm md:text-lg font-bold text-white mb-1">Internal Projects</h3>
                    <p className="text-white/80 text-xs md:text-sm lg:text-base mb-4">Developing innovative AI-driven products, from wildfire relief to online news aggregators.</p>
                </div>
                <Link 
                  to="/projects" 
                  className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-[#7069EC]/40 to-[#EE78D0]/40 text-white font-medium rounded-full text-xs sm:text-sm md:text-base hover:from-[#5a54d4]/60 hover:to-[#d665b8]/60 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl my-4"
                >
                  discover projects
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
            </div>
        </div>
        {/* Right Column */}
        <div className="flex-[1] flex flex-col items-center min-w-[180px] max-w-full">
            <img
            src="/website-spring25/assets/beckpanel.jpeg"
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