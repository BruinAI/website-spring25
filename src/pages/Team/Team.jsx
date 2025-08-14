import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const placeholderImg = "https://ui-avatars.com/api/?name=Bruin+AI&background=7069EC&color=fff&size=128";

const leadership = [
  { name: "Satyajit Kumar", role: "President", link: "", image: "/assets/headshots/baisatyajitkumar.jpg" },
  { name: "Claire Li", role: "Internal VP", link: "", image: "/assets/headshots/baiclaireli.jpeg" },
  { name: "Venkat Chitturi", role: "External VP", link: "", image: "/assets/headshots/baivenkatchitturi.jpeg" },
  { name: "Riya Gupta", role: "VP of Operations", link: "", image: "/assets/headshots/bairiyagupta.jpg" },
  { name: "Shreyas Sambara", role: "VP of Technology", link: "", image: "/assets/headshots/baishreyassambara.jpg" },
  { name: "Sophie Zhu", role: "Webmaster x Finance Director", link: "", image: "/assets/headshots/baisophiezhu.jpg" },
  { name: "Parkirat Sandhu", role: "Tech Director", link: "", image: "/assets/headshots/baiparkiratsandhu.jpg" },
  { name: "Karen Mosoyan", role: "Research Director", link: "", image: "/assets/headshots/baikarenmosoyan.jpg" },
  { name: "Sneha Agarwal", role: "External Events Director", link: "", image: "/assets/headshots/baisnehaagarwal.jpeg" },
  { name: "Beck Peterson", role: "Recruitment Director", link: "", image: "/assets/headshots/baibeckpeterson.jpeg" },
  { name: "Shivang Kulkarni", role: "Partnerships Director", link: "", image: "/assets/headshots/baishivangkulkarni.jpeg" },
  { name: "Karen Harrison", role: "Newsletter Director", link: "", image: "/assets/headshots/baikarenharrison.jpg" },
  { name: "Julia Zhu", role: "Internal Events Director", link: "", image: "/assets/headshots/baijuliazhu.jpg" },
  { name: "Melody Myae", role: "Marketing Director", link: "", image: "/assets/headshots/baimelodymyae.jpg" },
  { name: "Jonathan Chen", role: "Director of Innovation", link: "", image: "/assets/headshots/baijonathanchen.jpeg" },
  { name: "Neha Humbe", role: "Design Director", link: "", image: "/assets/headshots/bainehahumbe.jpg" },
  { name: "Ishani V Saran", role: "Consulting Director", link: "", image: "/assets/headshots/baiishanisaran.jpeg" },
];

const team2023_2024 = [
  { name: "Aashman Rastogi" }, { name: "Aidan Luu" }, { name: "Andrew Suh" }, { name: "Howard Huang" }, { name: "Ishan Juneja" }, { name: "Jorden Pork" }, { name: "Karen Harrison" }, { name: "Khush Parikh" }, { name: "Morgan Taylor-Cohen" }, { name: "Pranav Subbaraman" }, { name: "Vivika Martini" }, { name: "Yash Goyal" }, { name: "Zihan Xue" }
];

const team2024_2025 = [
  { name: "Avi Verma" }, { name: "Beck Peterson" }, { name: "Justin Lee" }, { name: "Karen Mosoyan" }, { name: "Mason Choey" }, { name: "Melody Myae" }, { name: "Neha Humbe" }, { name: "Parkirat Sandhu" }, { name: "Pranav Basnet" }, { name: "Riya Gupta" }, { name: "Shivang Kulkarni" }, { name: "Shreyas Sambara" }, { name: "Sneha Agarwal" }, { name: "Soham Patil" }, { name: "Sophie Zhu" }, { name: "Taiyu Chen" }, { name: "Venkat Chitturi" }, { name: "Yash Agarwal" }, { name: "Yifan Zhou" }, { name: "Yu Xi (Hope) Ong" }, { name: "Zach Berman" }
];

export default function Team() {
  return (
    <>
    <Navbar />
    <div className="min-h-screen w-[95vw] lg:w-[80vw] mx-auto bg-[#040505] text-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#7069EC] via-[#AD70DE] to-[#EE78D0]">Meet the Team</h1>
        {/* Executive Board */}
        <h2 className="text-2xl font-bold text-pink-400 mb-6 mt-10 text-center">Leadership</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-12">
          {leadership.map((member) => (
            member.link ? (
              <a
                key={member.name}
                href={member.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-4 shadow-md transition-all duration-200 rounded-lg focus:ring-2 focus:ring-pink-400 cursor-pointer"
              >
                <img src={member.image || placeholderImg} alt={member.name} className="rounded-full sm:w-[20vw] sm:h-[20vw] md:w-[15vw] md:h-[15vw] mb-3 object-cover" />
                <div className="font-no text-white text-center">{member.name.toUpperCase()}</div>
                <div className="text-xs text-gray-400 text-center mt-1">{member.role}</div>
              </a>
            ) : (
              <div
                key={member.name}
                className="flex flex-col items-center p-4"
              >
                <img src={member.image || placeholderImg} alt={member.name} className="rounded-full sm:w-[20vw] sm:h-[20vw] md:w-[15vw] md:h-[15vw] mb-3 object-cover" />
                <div className="font-no text-white text-center">{member.name.toUpperCase()}</div>
                <div className="text-xs text-gray-400 text-center mt-1">{member.role}</div>
              </div>
            )
          ))}
        </div>
        {/* Team Members 2023-2024 */}
        <h2 className="text-xl font-bold text-blue-400 mb-4 mt-8 text-center">2023-2024</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {team2023_2024.map((member) => (
            member.link ? (
              <a
                key={member.name}
                href={member.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-3 shadow-md transition-all duration-200 cursor-pointer w-32"
              >
                <img src={member.image || placeholderImg} alt={member.name} className="rounded-full sm:w-[17vw] sm:h-[17vw] md:w-[12vw] md:h-[12vw] mb-2 object-cover" />
                <div className="text-sm text-white text-center">{member.name}</div>
              </a>
            ) : (
              <div
                key={member.name}
                className="flex flex-col items-center p-3 shadow-md w-32"
              >
                <img src={member.image || placeholderImg} alt={member.name} className="rounded-full sm:w-[17vw] sm:h-[17vw] md:w-[12vw] md:h-[12vw] mb-2 object-cover" />
                <div className="text-sm text-white text-center">{member.name}</div>
              </div>
            )
          ))}
        </div>
        {/* Team Members 2024-2025 */}
        <h2 className="text-xl font-bold text-blue-400 mb-4 mt-8 text-center">2024-2025</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {team2024_2025.map((member) => (
            member.link ? (
              <a
                key={member.name}
                href={member.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-3 shadow-md transition-all duration-200 cursor-pointer w-32"
              >
                <img src={member.image || placeholderImg} alt={member.name} className="rounded-full sm:w-[17vw] sm:h-[17vw] md:w-[12vw] md:h-[12vw] mb-2 object-cover" />
                <div className="text-sm text-white text-center">{member.name}</div>
              </a>
            ) : (
              <div
                key={member.name}
                className="flex flex-col items-center p-3 shadow-md w-32"
              >
                <img src={member.image || placeholderImg} alt={member.name} className="rounded-full sm:w-[17vw] sm:h-[17vw] md:w-[12vw] md:h-[12vw] mb-2 object-cover" />
                <div className="text-sm text-white text-center">{member.name}</div>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
