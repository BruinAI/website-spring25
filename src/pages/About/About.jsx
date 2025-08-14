import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function About() {
  return (
    <>
    <Navbar />
    <div className="w-full bg-[#040505] text-white">
      {/* Hero Section */}
      <section className="relative w-full h-[30vh] flex items-center justify-center bg-cover bg-center pt-40">
        <div className="absolute inset-0 bg-black/77" />
        <span className="flex items-center justify-center gap-2 sm:gap-3">
          <h1 className="relative text-3xl sm:text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#7069EC] via-[#AD70DE] to-[#EE78D0]">
            hi!
          </h1>
          <h1 className="relative z-10 text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-center text-white drop-shadow-xl">
            we are BruinAI
          </h1>
        </span>
      </section>
      <section className="max-w-2xl mx-auto px-6 pt-8 pb-12 text-center">
        <p className="text-lg md:text-xl text-gray-200">
          BruinAI is a student-led organization at UCLA dedicated to advancing artificial intelligence through education, research, and real-world projects. We empower students to learn, build, and innovate with AI, fostering a collaborative and inclusive community.
        </p>
      </section>
    </div>
    {/* Stats Box */}
    <div className="max-w-[80vw] mx-auto mb-12 rounded-lg bg-zinc-900/90 p-8 shadow-lg">
      <div className="align-top mb-6">
        <p className="text-xs text-gray-400 text-start">Within the past year, we had</p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center md:items-start gap-8">
        <div className="flex-1 flex flex-col items-center">
          <span className="text-4xl font-extrabold text-white">#</span>
          <span className="text-gray-300 text-sm mt-2 text-center">External events</span>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <span className="text-4xl font-extrabold text-white">idk?</span>
          <span className="text-gray-300 text-sm mt-2 text-center">Company collaborations</span>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <span className="text-4xl font-extrabold text-white">7</span>
          <span className="text-gray-300 text-sm mt-2 text-center">Client projects</span>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <span className="text-4xl font-extrabold text-white">400+</span>
          <span className="text-gray-300 text-sm mt-2 text-center">Conference Attendees</span>
        </div>
      </div>
    </div>
    {/* Co-founders Section */}
    <section className="max-w-6xl mx-auto mb-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-pink-400">A Word from Our Co-founders</h2>
      <div className="flex flex-col md:flex-row gap-12 md:gap-8 items-center justify-center">
        {/* Jacob Ramos Card */}
        <div className="flex flex-col md:flex-row items-center gap-6 bg-zinc-900/80 rounded-lg p-6 shadow-lg max-w-2xl w-full">
          <img src="/assets/jacob.jpg" alt="Jacob Ramos" className="w-48 h-56 object-cover rounded-lg shadow-md" />
          <div>
            <p className="text-gray-100 text-base mb-4">
              When we first started Bruin AI in the spring of 2023, I was incredibly fortunate to have worked with some of the most talented, passionate individuals at UCLA. We set out to build something UCLA had never seen before—something that would challenge perceptions of what a student club could be, while showcasing the incredible potential of the next generation of engineers and business leaders.
            </p>
            <p className="text-gray-100 text-base mb-4">
              As our team grew, getting to see the brilliance of each new member was almost intimidating. Their genius motivated me every day, making me feel both privileged and deeply grateful to serve alongside them. Over time, Bruin AI transformed into more than just a club; it became a testament to what can be achieved when passion meets purpose.
            </p>
            <p className="text-gray-100 text-base mb-4">
              To all current and future members of Bruin AI, I want to express my deepest gratitude. Take full advantage of this opportunity to learn, grow, and push boundaries. Know that you are part of something truly special, and that your journey within Bruin AI is not just a chapter at UCLA but one that will stay with you for a lifetime. Thank you all for being part of this incredible experience. It’s been an honor.
            </p>
            <div className="mt-4">
              <span className="font-bold text-white text-lg">Jacob Ramos</span>
              <div className="text-gray-400 text-sm">Co-Founder</div>
            </div>
          </div>
        </div>
        {/* Akshyae Singh Card */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-6 bg-zinc-900/80 rounded-lg p-6 shadow-lg max-w-2xl w-full">
          <img src="/assets/akshyae.jpg" alt="Akshyae Singh" className="w-48 h-56 object-cover rounded-lg shadow-md" />
          <div>
            <p className="text-gray-100 text-base mb-4">
              What inspired Bruin AI? Simple—curiosity. We were eager to learn about AI, and building something impactful felt like the fastest way to dive in. That mindset has shaped everything we do and become our core pillars: Curiosity, Community, and a Commitment to Exceeding Expectations as a team.
            </p>
            <p className="text-gray-100 text-base mb-4">
              Back in 2023, my vision was simple: bring together a group of friends who were just as curious and ambitious, who wanted to push boundaries and tackle challenges that felt out of reach. Fast forward to today—Bruin AI is one of the fastest-growing clubs on campus, with a presence at multiple universities. But at our core, we’re still the same: a community of friends who can brainstorm groundbreaking ideas during the day and celebrate with a game of pong at night.
            </p>
            <p className="text-gray-100 text-base mb-4">
              If there’s one thing I want you to take away from this message, it’s this: Dream Big, Execute Together, and trust that Bruin AI is the team that turns those dreams into reality.
            </p>
            <div className="mt-4">
              <span className="font-bold text-white text-lg">Akshyae Singh</span>
              <div className="text-gray-400 text-sm">Co-Founder</div>
              <img src="/assets/akshyae-signature.png" alt="Akshyae Singh Signature" className="mt-2 h-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}