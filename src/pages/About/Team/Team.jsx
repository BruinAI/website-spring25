import React, { useEffect, useRef } from "react";

const placeholderImg = "https://ui-avatars.com/api/?name=Bruin+AI&background=7069EC&color=fff&size=128";

const leadership = [
  { name: "Satyajit Kumar", role: "President", link: "https://www.linkedin.com/in/satyajit-kumar-3a1433170/", image: "/website-spring25/assets/headshots/baisatyajitkumar.png" },
  { name: "Claire Li", role: "Internal VP", link: "https://www.linkedin.com/in/claire-m-li/", image: "/website-spring25/assets/headshots/baiclaireli.png" },
  { name: "Venkat Chitturi", role: "External VP", link: "https://www.linkedin.com/in/venkat-chitturi12/", image: "/website-spring25/assets/headshots/baivenkatchitturi.png" },
  { name: "Riya Gupta", role: "VP of Operations", link: "https://www.linkedin.com/in/riya-gupta-00b0301ba", image: "/website-spring25/assets/headshots/bairiyagupta.png" },
  { name: "Shreyas Sambara", role: "VP of Technology", link: "https://www.linkedin.com/in/shreyas-sambara-332737302", image: "/website-spring25/assets/headshots/baishreyassambara.png" },
  { name: "Sophie Zhu", role: "Webmaster x Finance Director", link: "https://linkedin.com/in/sophie-zhuyy/", image: "/website-spring25/assets/headshots/baisophiezhu.png" },
  { name: "Parkirat Sandhu", role: "Tech Director", link: "https://www.linkedin.com/in/parkirat-sandhu-b77010266/", image: "/website-spring25/assets/headshots/baiparkiratsandhu.png" },
  { name: "Karen Mosoyan", role: "Research Director", link: "https://linkedin.com/in/kar-m", image: "/website-spring25/assets/headshots/baikarenmosoyan.png" },
  { name: "Sneha Agarwal", role: "External Events Director", link: "https://www.linkedin.com/in/snehaagar/", image: "/website-spring25/assets/headshots/baisnehaagarwal.png" },
  { name: "Beck Peterson", role: "Recruitment Director", link: "https://www.linkedin.com/in/beckjpeterson", image: "/website-spring25/assets/headshots/baibeckpeterson.png" },
  { name: "Shivang Kulkarni", role: "Partnerships Director", link: "https://www.linkedin.com/in/shivang-kulkarni", image: "/website-spring25/assets/headshots/baishivangkulkarni.png" },
  { name: "Karen Harrison", role: "Newsletter Director", link: "https://www.linkedin.com/in/karen-harrison-31316b260/", image: "/website-spring25/assets/headshots/baikarenharrison.png" },
  { name: "Julia Zhu", role: "Internal Events Director", link: "https://www.linkedin.com/in/julia-zhu-61a4a8352/", image: "/website-spring25/assets/headshots/baijuliazhu.png" },
  { name: "Melody Myae", role: "Marketing Director", link: "https://www.linkedin.com/in/melody-myae/", image: "/website-spring25/assets/headshots/baimelodymyae.png" },
  { name: "Jonathan Chen", role: "Director of Innovation", link: "https://www.linkedin.com/in/jchen5/", image: "/website-spring25/assets/headshots/baijonathanchen.png" },
  { name: "Neha Humbe", role: "Design Director", link: "https://www.linkedin.com/in/nehahumbe", image: "/website-spring25/assets/headshots/bainehahumbe.png" },
];

const teamMembers = [
  { name: "Aidan Robinson", image: "/website-spring25/assets/headshots/team/baiaidanrobinson.png", link: "https://linkedin.com/in/aidan-robinson-51137b253" },
  { name: "Ashita Singh", image: "/website-spring25/assets/headshots/team/baiashitasingh.png", link: "https://www.linkedin.com/in/ashita-singh-728aba1a0/" },
  { name: "Jakob Bodker Jensen", image: "/website-spring25/assets/headshots/team/baijakobjensen.png", link: "https://www.linkedin.com/in/jakob-jensen-jb12/" },
  { name: "Kevin Lu", image: "/website-spring25/assets/headshots/team/baikevinlu.png", link: "https://www.linkedin.com/in/kevin-lu-60a738216/" },
  { name: "Yulia Anashkina", image: "/website-spring25/assets/headshots/team/baiyuliaanashkina.png", link: "https://linkedin.com/in/yuliaanashkina" },
  { name: "Howard Huang", image: "/website-spring25/assets/headshots/team/baihowardhuang.png", link: "https://www.linkedin.com/in/howard-huang-b24465183/" },
  { name: "Noah Cylich", image: "/website-spring25/assets/headshots/team/bainoahcylich.png", link: "https://www.linkedin.com/in/noahcylich/" },
  { name: "Jane Li", image: "/website-spring25/assets/headshots/team/baijaneli.png", link: "https://www.linkedin.com/in/jane-li-3b9719293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
  { name: "Anahita Vaidhya", image: "/website-spring25/assets/headshots/team/baianahitavaidhya.png", link: "https://www.linkedin.com/in/anahita-vaidhya/" },
  { name: "Ishani V Saran", image: "/website-spring25/assets/headshots/baiishanisaran.png", link: "https://www.linkedin.com/in/ishani-saran" },
  { name: "Aidan Luu", image: "/website-spring25/assets/headshots/team/baiaidanluu.png", link: "https://linkedin.com/in/aidan-luu-018797279" },
  { name: "Suhani Shukla", image: "/website-spring25/assets/headshots/team/baisuhanishukla.png", link: "https://www.linkedin.com/in/suhani-s/" },
  { name: "Khush Parikh", image: "/website-spring25/assets/headshots/team/baikhushparikh.png", link: "https://www.linkedin.com/in/khushparikh12z?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
  { name: "Pravir Chugh", image: "/website-spring25/assets/headshots/team/baipravirchugh.png", link: "https://www.linkedin.com/in/pravir-chugh-a8b8661b9/" },
  { name: "Radhika Kakkar", image: "/website-spring25/assets/headshots/team/bairadhikakakkar.png", link: "https://www.linkedin.com/in/radhikakakkar1/" },
  { name: "Ryan Yang", image: "/website-spring25/assets/headshots/team/bairyanyang.png", link: "https://www.linkedin.com/in/ryanmyang" },
  { name: "Yash Goyal", image: "/website-spring25/assets/headshots/team/baiyashgoyal.png", link: "https://www.linkedin.com/in/yashgoyal01" },
  { name: "Andrew Suh", image: "/website-spring25/assets/headshots/team/baiandrewsuh.png", link: "https://www.linkedin.com/in/andrew-suh-bb9bb5241" },
  { name: "Ishan Juneja", image: "/website-spring25/assets/headshots/team/baiishanjuneja.png", link: "https://www.linkedin.com/in/ishanjuneja/" },
  { name: "Pranav Subbaraman", image: "/website-spring25/assets/headshots/team/baipranavsubbaraman.png", link: "https://www.linkedin.com/in/pranav-subbaraman/" },
  { name: "Yu Xi Ong", image: "/website-spring25/assets/headshots/team/baihopeong.png", link: "https://www.linkedin.com/in/yu-xi-ong-8872b8230/" },
  { name: "Zach Berman", image: "/website-spring25/assets/headshots/team/baizachberman.png", link: "https://www.linkedin.com/in/zach--berman/" },
  { name: "Avi Verma", image: "/website-spring25/assets/headshots/team/baiaviverma.png", link: "https://www.linkedin.com/in/verma-avi/" },
  { name: "Justin H Lee", image: "/website-spring25/assets/headshots/team/baijustinlee.png", link: "https://linkedin.com/in/justinhlee6" },
  { name: "Mason Choey", image: "/website-spring25/assets/headshots/team/baimasonchoey.png", link: "https://www.linkedin.com/in/masonchoey/" },
  { name: "Pranav Basnet", image: "/website-spring25/assets/headshots/team/baipranavbasnet.png", link: "https://www.linkedin.com/in/pranav-basnet-3a0392249/" },
  { name: "Soham Patil", image: "/website-spring25/assets/headshots/team/baisohampatil.png", link: "https://linkedin.com/in/soham-r-patil" },
  { name: "Tai-yu Chen", image: "/website-spring25/assets/headshots/team/baitaiyuchen.png", link: "https://www.linkedin.com/in/taiyuchen33/" },
  { name: "Yash Agarwal", image: "/website-spring25/assets/headshots/team/baiyashagarwal.png", link: "https://www.linkedin.com/in/yashagarwal49" },
  { name: "Yifan Zhou", image: "/website-spring25/assets/headshots/team/baiyifanzhou.png", link: "https://www.linkedin.com/in/yifan-zhou127" },
];

export default function Team() {
  return (
    <div className="w-[95vw] lg:w-[80vw] mx-auto bg-[#040505] text-white py-12 px-4">
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
                className="flex flex-col items-center p-4 shadow-md transition-all duration-200 rounded-lg hover:bg-zinc-800/20 focus:bg-zinc-800/50 cursor-pointer"
              >
                <img src={member.image || placeholderImg} alt={member.name} className="team-circle sm:w-[20vw] sm:h-[20vw] md:w-[15vw] md:h-[15vw] mb-3" loading="lazy" />
                <div className="font-no text-white text-center">{member.name.toUpperCase()}</div>
                <div className="text-xs text-gray-400 text-center mt-1">{member.role}</div>
              </a>
            ) : (
              <div
                key={member.name}
                className="flex flex-col items-center p-4"
              >
                <img src={member.image || placeholderImg} alt={member.name} className="team-circle sm:w-[20vw] sm:h-[20vw] md:w-[15vw] md:h-[15vw] mb-3" loading="lazy" />
                <div className="font-no text-white text-center">{member.name.toUpperCase()}</div>
                <div className="text-xs text-gray-400 text-center mt-1">{member.role}</div>
              </div>
            )
          ))}
        </div>

        {/* Team Members Grid */}
        <h2 className="text-xl font-bold text-blue-400 mb-4 mt-8 text-center">Team Members</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 mb-10">
          {teamMembers.map((member) => (
            member.link ? (
              <a
                key={member.name}
                href={member.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-3 shadow-md transition-all duration-200 rounded-lg hover:bg-zinc-800/20 focus:bg-zinc-800/50 cursor-pointer"
              >
                <img src={member.image || placeholderImg} alt={member.name} className="rounded-full sm:w-[17vw] sm:h-[17vw] md:w-[12vw] md:h-[12vw] mb-2 object-cover" loading="lazy" />
                <div className="text-sm text-white text-center">{member.name}</div>
              </a>
            ) : (
              <div
                key={member.name}
                className="flex flex-col items-center p-3 shadow-md"
              >
                <img src={member.image || placeholderImg} alt={member.name} className="rounded-full sm:w-[17vw] sm:h-[17vw] md:w-[12vw] md:h-[12vw] mb-2 object-cover" loading="lazy" />
                <div className="text-sm text-white text-center">{member.name}</div>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
}
