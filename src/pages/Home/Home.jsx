import react from 'react';
import Navbar from '../Navbar/Navbar';
import Create from './Create/Create';
import Connect from './Connect/Connect';
import Learn from './Learn/Learn';
import { FaInstagram, FaLinkedin, FaSlack } from 'react-icons/fa';
import { MdNewspaper } from "react-icons/md";
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center">
        <section
          className="w-[100vw] min-h-[80vh] flex justify-center items-center bg-cover bg-center relative"
          style={{ backgroundImage: `url('/assets/sairs2025group.jpeg')` }}
        >
          {/* Social sidebar */}
          <div className="fixed left-[3vw] top-1/2 -translate-y-1/2 z-20">
            <div className="flex flex-col items-center bg-black/2 backdrop-blur-xs rounded-md py-3 px-1">
              <span className=" text-white font-semibold text-sm mb-5" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
                stay connected
              </span>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mb-3 text-white text-xl hover:text-[#EE78D0]">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="mb-3 text-white text-xl hover:text-[#EE78D0]">
                <FaLinkedin />
              </a>
              <a href="https://slack.com" target="_blank" rel="noopener noreferrer" className="mb-3 text-white text-xl hover:text-[#EE78D0]">
                <FaSlack />
              </a>
              <a href="https://custom.link" target="_blank" rel="noopener noreferrer" className="mb-3 text-white text-xl hover:text-[#EE78D0]">
                <MdNewspaper />
              </a>
            </div>
          </div>
          {/* banner */}
          <div className="text-center z-10 w-[75vw] min-w-[500px] pt-40">
            <div className="flex items-center justify-center mb-6">
              {/* <div className="block flex-1 border-t-2 border-white mx-[5vw] max-w-[15vh]" /> */}
              <span className="text-[#EE78D0] font-bold tracking-widest text-lg uppercase">
                CREATE <span className="mx-2 font-thin">|</span> CONNECT <span className="mx-2 font-thin">|</span> LEARN
              </span>
              {/* <div className="block flex-1 border-t-2 border-white mx-[5vw] max-w-[15vh]" /> */}
            </div>
            {/* <h1 className="text-[5.5rem] font-[1000] tracking-wider bg-gradient-to-r from-[#7069EC] via-[#A96BDC] to-[#EE78D0] text-transparent bg-clip-text relative [text-shadow:_-2px_0px_0_rgb(255_255_255_/_100%)]">BRUIN AI</h1> */}
              <h1 className="relative text-8xl font-[1000] tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#7069EC] via-[#AD70DE] to-[#EE78D0]">
                <span className="absolute text-8xl font-[1000] translate-x-[2.5px] tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#7069EC] via-[#AD70DE] to-[#EE78D0]">
                  BRUIN AI
                </span>
                BRUIN AI
              </h1>
              {/* We'll add more hero content here step by step */}
            </div>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black opacity-88 z-0" />
          {/* Diagonal gradient overlay */}
          <div 
            className="absolute inset-0 z-[1] opacity-30"
            style={{
              background: 'linear-gradient(160deg, #5030AB 0%, transparent 67%)'
            }}
          />
        </section>
        {/* Create section */}
        <Create />
        <Connect />
        <Learn />
        {/* Team Section */}
        <section className="w-full min-h-[60vh] bg-gradient-to-br from-[#040505] via-[#0a0a0a] to-[#040505] relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #7069EC 0%, transparent 50%),
                                radial-gradient(circle at 75% 75%, #EE78D0 0%, transparent 50%)`,
            }} />
          </div>
          
          <div className="relative z-10 container mx-auto px-4 py-10">
            <div className="text-center mb-4">
              <p className="text-md text-gray-300 max-w-3xl mx-auto leading-relaxed">
                * insert temporary blurb * Passionate students, researchers, and innovators working together to advance AI at UCLA. 
                From machine learning enthusiasts to industry professionals, our diverse team brings 
                unique perspectives to every project.
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="text-center">
              <Link 
                to="/team" 
                className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-[#7069EC] to-[#EE78D0] text-white font-medium rounded-full text-md hover:from-[#5a54d4] hover:to-[#d665b8] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Meet Our Team
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
        {/* Other content can go here below the hero */}
      </main>
      <Footer />
    </>
  );
}

export default Home;