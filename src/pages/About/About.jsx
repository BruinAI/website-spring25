import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Team from "./Team/Team";
import { FiChevronDown } from 'react-icons/fi';

export default function About() {
  const [animatedNumbers, setAnimatedNumbers] = useState({
    events: 0,
    collaborations: 0,
    projects: 0,
    attendees: 0
  });

  const targetNumbers = {
    events: 17,
    collaborations: 12,
    projects: 10,
    attendees: 400
  };

  const scrollToNextSection = () => {
    window.scrollBy({
      top: window.innerHeight-50,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const animateNumbers = () => {
      const duration = 1500;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setAnimatedNumbers({
          events: Math.floor(targetNumbers.events * progress),
          collaborations: Math.floor(targetNumbers.collaborations * progress),
          projects: Math.floor(targetNumbers.projects * progress),
          attendees: Math.floor(targetNumbers.attendees * progress)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setAnimatedNumbers(targetNumbers);
        }
      }, stepDuration);
    };

    const timer = setTimeout(animateNumbers, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <Navbar />
    <section 
      className="relative w-full min-h-[100vh] bg-center bg-scroll sm:bg-fixed"
      style={{
        backgroundImage: `url('/website-spring25/assets/teamprof.JPG')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        maxHeight: '100vh',
        position: 'relative'
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/[77%] z-0" />
      <div 
        className="absolute inset-0 z-[1] opacity-30"
        style={{
          background: 'linear-gradient(250deg, #5030AB 0%, transparent 33%)'
        }}
      />

      <div className="relative z-10 w-full text-white">
        {/* hero */}
        <section className="w-full h-[25vh] sm:h-[30vh] flex items-center justify-center pt-24 sm:pt-40">
          <span className="flex items-center justify-center gap-2 sm:gap-3">
            <h1 className="relative text-3xl sm:text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#7069EC] via-[#AD70DE] to-[#EE78D0]">
              hi!
            </h1>
            <h1 className="relative z-10 text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-center text-white drop-shadow-xl">
              we are BruinAI
            </h1>
          </span>
        </section>

        {/* introblurb */}
        <section className="max-w-2xl mx-auto px-6 pt-8 py-12 text-center">
          <p className="text-lg md:text-xl text-gray-200">
            BruinAI is a student-led organization at UCLA dedicated to advancing artificial intelligence through education, research, and real-world projects. We empower students to learn, build, and innovate with AI, fostering a collaborative and inclusive community.
          </p>
        </section>

        {/* stats */}
        <div className="max-w-[80vw] mx-auto mb-12 rounded-lg bg-zinc-900/[77%] p-6 shadow-lg">
          <div className="align-top mb-3">
            <p className="text-xs text-gray-400 text-start">Within the <span className="text-white font-semibold">past year</span>, we had</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <span className="text-xl sm:text-4xl font-extrabold text-white">{animatedNumbers.events}</span>
              <span className="text-gray-300 text-xs sm:text-sm mt-2 text-center">External events</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl sm:text-4xl font-extrabold text-white">{animatedNumbers.collaborations}</span>
              <span className="text-gray-300 text-xs sm:text-sm mt-2 text-center">Company collaborations</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl sm:text-4xl font-extrabold text-white">{animatedNumbers.projects}</span>
              <span className="text-gray-300 text-xs sm:text-sm mt-2 text-center">Completed projects</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl sm:text-4xl font-extrabold text-white">{animatedNumbers.attendees}+</span>
              <span className="text-gray-300 text-xs sm:text-sm mt-2 text-center">Conference Attendees</span>
            </div>
          </div>
        </div>
        {/* arrow */}
        <div className="flex justify-center mt-6">
          <button 
            onClick={scrollToNextSection}
            className="text-white/55 hover:text-white/80 transition-colors duration-200 cursor-pointer"
            aria-label="Scroll to team section"
          >
            <FiChevronDown className="animate-bounce drop-shadow-xl" size={21} />
          </button>
        </div>
      </div>
    </section>

    <Team />
    <Footer />
    </>
  );
}