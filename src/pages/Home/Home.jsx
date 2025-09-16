import react from 'react';
import Navbar from '../Navbar/Navbar';
import Create from './Create/Create';
import Connect from './Connect/Connect';
import Learn from './Learn/Learn';
import { FaInstagram, FaLinkedin, FaSlack, FaEnvelope } from 'react-icons/fa';
import { MdNewspaper } from "react-icons/md";
import { FiChevronDown } from 'react-icons/fi';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

function Home() {
  const scrollToNextSection = () => {
    window.scrollBy({
      top: window.innerHeight-50,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <Navbar />
      <main className="relative items-center">
        {/* Social sidebar */}
          <div className="fixed left-[3vw] top-1/2 -translate-y-1/2 z-[999]">
            <div className="flex flex-col items-center bg-black/2 backdrop-blur-sm rounded-md py-3 px-1">
              <span className=" text-white font-semibold text-xs sm:text-sm mb-5" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
                stay connected
              </span>
              <a href="mailto:bruinaiucla@gmail.com" className="mb-3 text-white text-xs sm:text-base md:text-lg hover:text-[#EE78D0]">
                <FaEnvelope />
              </a>
              <a href="https://www.instagram.com/bruin_ai/" target="_blank" rel="noopener noreferrer" className="mb-3 text-white text-sm sm:text-lg md:text-xl hover:text-[#EE78D0]">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/company/bruin-ai" target="_blank" rel="noopener noreferrer" className="mb-3 text-white text-sm sm:text-lg md:text-xl hover:text-[#EE78D0]">
                <FaLinkedin />
              </a>
              <a href="https://join.slack.com/t/bruinai/shared_invite/zt-3c9jtckbr-ZqT1Bq0FVe1msf_cXZ1wYQ" target="_blank" rel="noopener noreferrer" className="mb-3 text-white text-sm sm:text-lg md:text-xl hover:text-[#EE78D0]">
                <FaSlack />
              </a>
              <a href="https://bruinai.substack.com/" target="_blank" rel="noopener noreferrer" className="mb-3 text-white text-sm sm:text-lg md:text-xl hover:text-[#EE78D0]">
                <MdNewspaper />
              </a>
            </div>
          </div>
        {/* hero base */}
        <section
          className="z-[5] relative w-full h-screen flex justify-center items-center bg-center bg-scroll sm:bg-fixed"
          style={{
            backgroundImage: `url('/website-spring25/assets/events/sairs2025group.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            maxHeight: '100vh',
            position: 'relative'
          }}
        >
          {/* banner */}
          <div className="text-center z-10 max-w-[75vw]">
            <div className="flex items-center justify-center mb-6">
              <span className="text-[#EE78D0] font-bold tracking-widest md:text-lg text-sm uppercase">
                CREATE <span className="mx-2 font-thin">|</span> CONNECT <span className="mx-2 font-thin">|</span> LEARN
              </span>
            </div>
            {/* <h1 className="text-[5.5rem] font-[1000] tracking-wider bg-gradient-to-r from-[#7069EC] via-[#A96BDC] to-[#EE78D0] text-transparent bg-clip-text relative [text-shadow:_-2px_0px_0_rgb(255_255_255_/_100%)]">BRUIN AI</h1> */}
              <h1 className="relative md:text-8xl text-6xl font-[1000] tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#7069EC] via-[#AD70DE] to-[#EE78D0]">
                <span className="absolute md:text-8xl text-6xl font-[1000] translate-x-[2.5px] tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#7069EC] via-[#AD70DE] to-[#EE78D0]">
                  BRUIN AI
                </span>
                BRUIN AI
              </h1>
              <p className="text-xs md:text-base lg:text-lg text-white mt-6 mb-4 max-w-[70vw] lg:max-w-[55vw] mx-auto leading-relaxed">
                <span className="font-semibold">UCLA's AI Everything Organization:</span><br /><span className="text-gray-300">Creating the opportunity to learn and apply AI through <span className="font-semibold text-white">real-world projects, events, and workshops</span>.</span>
              </p>
              <div className="flex justify-center mt-10">
                <button 
                  onClick={scrollToNextSection}
                  className="text-white/55 hover:text-white/80 transition-colors duration-200 cursor-pointer"
                  aria-label="Scroll to next section"
                >
                  <FiChevronDown className="animate-bounce drop-shadow-xl" size={21} />
                </button>
              </div>
            </div>
          {/* dark overlay */}
          <div className="absolute inset-0 bg-black opacity-[77%] z-0" />
          {/* gradient overlay */}
          <div 
            className="absolute inset-0 z-[1] opacity-30"
            style={{
              background: 'linear-gradient(160deg, #5030AB 0%, transparent 67%)'
            }}
          />
        </section>

        <div className="relative z-[20] bg-black flex justify-center items-center">
          <Create />
        </div>

        <div className="connect-section relative z-[20] bg-black flex justify-center items-center">
          <Connect />
        </div>

        <div className="relative z-[30] bg-black flex justify-center items-center py-16">
          <div className="max-w-6xl mx-auto px-8 min-w-[100vw]">
            <div className="text-center mb-8">
              <p className="text-gray-400 text-xs">Companies we've worked with</p>
            </div>
            <div className="overflow-hidden">
              <div className="flex items-center gap-4 sm:gap-8 md:gap-12 logos-marquee">
                <div className="flex items-center gap-4 sm:gap-8 md:gap-12 shrink-0">
                  <img src="/website-spring25/assets/logos/Boston_Consulting_Group_2020_logo.svg.png" alt="Boston Consulting Group" className="h-4 sm:h-6 md:h-8 object-contain filter" loading="lazy" />
                  <img src="/website-spring25/assets/logos/GumGum_Logo.png" alt="GumGum" className="h-4 sm:h-6 md:h-8 object-contain filter" loading="lazy" />
                  <img src="/website-spring25/assets/logos/Amazon_Web_Services_Logo.png" alt="Amazon Web Services" className="h-4 sm:h-6 md:h-8 object-contain filter" loading="lazy" />
                  <img src="/website-spring25/assets/logos/Jane_Street_Capital_Logo.png" alt="Jane Street" className="h-4 sm:h-6 md:h-8 object-contain filter opacity-75" loading="lazy" />
                  <img src="/website-spring25/assets/logos/Insight_Partners_logo.png" alt="Insight Partners" className="h-4 sm:h-6 md:h-8 object-contain filter opacity-75" loading="lazy" />
                  <img src="/website-spring25/assets/logos/cisco_logo.png" alt="Cisco" className="h-4 sm:h-6 md:h-8 object-contain filter" loading="lazy" />
                  <img src="/website-spring25/assets/logos/windsurf_logo.svg" alt="Codeium (Windsurf)" className="h-4 sm:h-6 md:h-8 object-contain filter" loading="lazy" />
                  <img src="/website-spring25/assets/logos/deeplearningai_logo.png" alt="Deeplearning.ai" className="h-4 sm:h-6 md:h-8 object-contain filter" loading="lazy" />
                  <img src="/website-spring25/assets/logos/kindo_logo.png" alt="Kindo" className="h-4 sm:h-6 md:h-8 object-contain filter" loading="lazy" />
                </div>
                <div className="flex items-center gap-4 sm:gap-8 md:gap-12 shrink-0">
                  <img src="/website-spring25/assets/logos/Boston_Consulting_Group_2020_logo.svg.png" alt="Boston Consulting Group" className="h-4 sm:h-6 md:h-8 object-contain filter" loading="lazy" />
                  <img src="/website-spring25/assets/logos/GumGum_Logo.png" alt="GumGum" className="h-4 sm:h-6 md:h-8 object-contain filter" loading="lazy" />
                  <img src="/website-spring25/assets/logos/Amazon_Web_Services_Logo.png" alt="Amazon Web Services" className="h-4 sm:h-6 md:h-8 object-contain filter" loading="lazy" />
                  <img src="/website-spring25/assets/logos/Jane_Street_Capital_Logo.png" alt="Jane Street" className="h-4 sm:h-6 md:h-8 object-contain filter opacity-75" loading="lazy" />
                  <img src="/website-spring25/assets/logos/Insight_Partners_logo.png" alt="Insight Partners" className="h-4 sm:h-6 md:h-8 object-contain filter opacity-75" loading="lazy" />
                  <img src="/website-spring25/assets/logos/cisco_logo.png" alt="Cisco" className="h-4 sm:h-6 md:h-8 object-contain filter" loading="lazy" />
                  <img src="/website-spring25/assets/logos/windsurf_logo.svg" alt="Codeium (Windsurf)" className="h-4 sm:h-6 md:h-8 object-contain filter" loading="lazy" />
                  <img src="/website-spring25/assets/logos/deeplearningai_logo.png" alt="Deeplearning.ai" className="h-4 sm:h-6 md:h-8 object-contain filter" loading="lazy" />
                  <img src="/website-spring25/assets/logos/kindo_logo.png" alt="Kindo" className="h-4 sm:h-6 md:h-8 object-contain filter" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Learn section - Layer 3 */}
        <div className="learn-section relative z-[40] bg-black flex justify-center items-center">
          <Learn />
        </div>

        {/* Team Section - Layer 4 */}
        <section className="relative z-40 w-full min-h-[25vh] md:min-h-[35vh] lg:min-h-[45vh] bg-black relative overflow-hidden">
          {/* Background team photo */}
          <div 
            className="absolute inset-0 opacity-[21%] max-w-[95vw] lg:max-w-[90vw] center mx-auto bg-[size:cover] md:bg-[size:contain]
                       bg-[position:center_bottom_20%] sm:bg-[position:center_bottom_50%] md:bg-[position:center_bottom]
                       bg-scroll md:bg-fixed" 
            style={{
              backgroundImage: `url('/website-spring25/assets/teamaicropped.JPG')`,
              backgroundRepeat: 'no-repeat',
              height: '100%'
            }}
          />
          
          {/* Background pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #7069EC 0%, transparent 50%),
                                radial-gradient(circle at 75% 75%, #EE78D0 0%, transparent 50%)`,
            }} />
          </div>
          
          <div className="relative z-10 container mx-auto px-4 py-4 sm:py-8 md:py-16">
            <div className="text-center mb-6 max-w-[60vw] mx-auto">
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
                Passionate students working together with researchers and innovators to advance AI at UCLA.
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="text-center">
              <Link 
                to="/about" 
                className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-[#7069EC] to-[#EE78D0] text-white font-medium rounded-full text-xs sm:text-sm hover:from-[#5a54d4] hover:to-[#d665b8] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Meet Our Team
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer - Top Layer */}
        <div className="relative z-50">
          <Footer />
        </div>
      </main>
    </>
  );
}

export default Home;