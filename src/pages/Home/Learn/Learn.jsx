import react from 'react';
import { Link } from 'react-router-dom';

function Learn() {
    return (
        <section className="w-[69vw] sm:w-[73vw] lg:w-[77vw] flex justify-center bg-transparent py-16 pb-30">
        <div className="w-[85vw] max-w-7xl flex flex-col md:flex-row items-center gap-20">
        {/* left */}
        <div className="flex-[1.75] text-left relative">
            <span className="absolute -top-8 left-0 text-[7rem] md:text-[10rem] font-black text-white/10 select-none leading-none z-0">03</span>
            <div className="relative z-10 ml-15">
                <span className="inline-block mb-4 text-[#EE78D0] font-bold tracking-widest text-base md:text-lg uppercase border-t-2 border-[#EE78D0] pt-2 pr-6">Learn</span>
                <h2 className="text-xl md:text-4xl font-extrabold mb-6 text-white">Teaching members, building expertise</h2>
                <div className="mb-4">
                    <h3 className="text-sm md:text-lg font-bold text-white mb-1">Artificial Intelligence</h3>
                    <p className="text-white/80 text-xs md:text-sm lg:text-base mb-4">Training backed by AWS, Google, and Meta</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-sm md:text-lg font-bold text-white mb-1">Web Development</h3>
                    <p className="text-white/80 text-xs md:text-sm lg:text-base mb-4">Full-stack web dev</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-sm md:text-lg font-bold text-white mb-1">Business Strategy</h3>
                    <p className="text-white/80 text-xs md:text-sm lg:text-base mb-4">Integrating AI into business product strategy</p>
                </div>
                {/* <Link to="/about" className="text-[#EE78D0] font-semibold my-4 inline-block hover:underline">read more &rarr;</Link> */}
            </div>
        </div>
        {/* right */}
        <div className="flex-[1] flex flex-col items-center min-w-[180px] max-w-full">
            <img
            src="/website-spring25/assets/sataidan.jpeg"
            alt="photo"
            className="rounded-lg w-full object-cover"
            loading="lazy"
            />
        </div>
        </div>
        </section>
    );
}

export default Learn;