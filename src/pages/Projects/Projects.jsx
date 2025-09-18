import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

function Projects() {
  const projects = [
    {
      title: "Titans wth Prof. Nader",
      date: "W25 - pres",
      img: '/website-spring25/assets/projects/titans.jpeg',
      description: "Reproducing and building upon the Google Research TITANS paper with a neural-memory-enabled model."
    },
    {
      title: "News Aggregator",
      date: "W25 - pres",
      img: '/website-spring25/assets/projects/newsagg.PNG',
      description: "Cut through the flood of daily headlines and focus on the stories that matter most."
    },
    {
      title: "AI Tutoring for Healthcare",
      date: "SM25",
      img: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRkZEMDAwIi8+PC9zdmc+',
      description: "Partnership with Anand Patel's healthcare innovation teams focused on applying AI in clinical and administrative settings."
    },
    {
      title: "CRCL",
      date: "SP25",
      img: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRkZEMDAwIi8+PC9zdmc+',
      description: "Autonomous check-in mobile app that enables event hosts to manage gatherings and verify guest attendance."
    },
    {
      title: "BCG",
      date: "W25 - SP25", 
      img: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRkZEMDAwIi8+PC9zdmc+',
      description: "End-to-end development of an AI-powered digital marketing tool."
    },
    {
      title: "Gumgum",
      date: "W25 - SP25",
      img: '/website-spring25/assets/projects/gumgum.jpg',
      description: "Creating an internal tool to automate and optimize prompt engineering for Jira Ticket Capitalization."
    },
    {
      title: "Cymetrx",
      date: "W25 - SP25",
      img: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRkZEMDAwIi8+PC9zdmc+',
      description: "Generative AI system to automate cybersecurity reporting from Common Vulnerabilities and Exposures built on an agentic framework."
    },
    {
      title: "Nortera",
      date: "F24 - SP25",
      img: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRkZEMDAwIi8+PC9zdmc+', 
      description: "MVP for companies to track HR compliance metrics and assess risk for DEI-related litigation."
    },
    {
      title: "Fire Relief",
      date: "W25",
      img: '/website-spring25/assets/projects/janus.png',
      description: "An insurance support tool to assist households affected by the 2025 LA Wildfires in managing claims."
    },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-black min-h-screen py-24">
        <div className="max-w-[97vw] sm:max-w-[85vw] mx-auto px-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#7069EC] via-[#AD70DE] to-[#EE78D0] bg-[length:70%_100%] md:bg-[length:60%_100%]">project highlights</h1>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group rounded-xl p-4 hover:bg-zinc-900/60 transition-all duration-300 hover:scale-[1.02]"
              >
                {/* text on top or bottom */}
                {(idx % 3 === 1) ? (
                  <>
                    <div className="mb-4">
                      <h3 className="text-white text-lg font-semibold leading-tight mb-2">{project.title}</h3>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="h-px w-10 bg-gradient-to-r from-[#7069EC] to-[#EE78D0]" />
                        <span className="text-gray-400 text-sm">{project.date}</span>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
                    </div>
                    <div className="w-full aspect-[4/3] overflow-hidden rounded-lg">
                      <img 
                        src={project.img} 
                        alt={project.title} 
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" 
                        loading="lazy"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-full aspect-[4/3] overflow-hidden rounded-lg mb-4">
                      <img 
                        src={project.img} 
                        alt={project.title} 
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" 
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h3 className="text-white text-lg font-semibold leading-tight mb-2">{project.title}</h3>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="h-px w-10 bg-gradient-to-r from-[#7069EC] to-[#EE78D0]" />
                        <span className="text-gray-400 text-sm">{project.date}</span>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Projects;
