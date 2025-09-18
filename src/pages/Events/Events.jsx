import react, { useRef, useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

function Events() {
    const pastScrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const scrollPastEventsByOne = (direction = 1) => {
        const container = pastScrollRef.current;
        if (!container) return;
        const firstCard = container.querySelector('.past-card');
        const gapPx = 16;
        const step = firstCard ? firstCard.getBoundingClientRect().width + gapPx : container.clientWidth * 0.8;
        container.scrollBy({ left: step * Math.sign(direction), behavior: 'smooth' });
    };
    const updateArrowState = () => {
        const el = pastScrollRef.current;
        if (!el) return;
        const maxScroll = el.scrollWidth - el.clientWidth;
        const left = el.scrollLeft;
        setCanScrollLeft(left > 2);
        setCanScrollRight(left < maxScroll - 2);
    };

    useEffect(() => {
        updateArrowState();
        const el = pastScrollRef.current;
        if (!el) return;
        el.addEventListener('scroll', updateArrowState, { passive: true });
        window.addEventListener('resize', updateArrowState);
        return () => {
            el.removeEventListener('scroll', updateArrowState);
            window.removeEventListener('resize', updateArrowState);
        };
    }, []);

    const events = [
        {
            dayLabel: 'fri-sat',
            month: 'Oct',
            dayNum: '3-4',
            title: 'AWS Summit',
            venue: 'Mong Auditorum / Covel Commons Grand Horizon',
            description: "learn about the future of Generative AI and Agentic AI while connecting with industry experts, professors, and fellow students",
            formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfD_GGNIoCCPaHuAZkmTztHRKmrhEkxKibOYgM72dFezkEgVQ/viewform?usp=sharing&ouid=110266998254173407620',
            image: '/website-spring25/assets/events/Bruin AI x AWS Summit Infogrpahic.png'
        },
        // {
        //     dayLabel: 'SUN',
        //     dayNum: '6',
        //     time: 'June 6 @ 9:30 pm - 11:00 pm',
        //     title: 'BBBBBBBB',
        //     venue: 'ucla',
        //     description: "---",
        //     image: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
        // },
        // {
        //     dayLabel: 'MON',
        //     dayNum: '7',
        //     time: 'June 7 @ 9:30 pm - 11:00 pm',
        //     title: 'CCCCCCCC',
        //     venue: 'ucla',
        //     description: "--- ",
        //     image: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
        // }
    ];

    const pastEvents = [
        // { title: '1K Pitches x Bruin Entrepreneurs', date: 'May 2025', img: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRkZEMDAwIi8+PC9zdmc+', blurb: '---' },
        // { title: 'Innovation in Entrepreneurship x BE x Singapore Global Network', date: 'May 2025', img: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRkZEMDAwIi8+PC9zdmc+', blurb: 'The future of entrepreneurship and building with AI as a student founder' },
        { title: 'SAIRS 2025', date: 'April 2025', img: '/website-spring25/assets/events/sairs2025group.jpeg', blurb: "Southern California's biggest AI conference" },
        { title: 'Responsible AI Hackathon', date: 'April 2025', img: '/website-spring25/assets/events/responsibleaihackathon.png', blurb: 'AI in productivity, infrastructure, and healthcare' },
        { title: 'Quarterly Project Showcase', date: '--', img: '/website-spring25/assets/projshowcase.jpeg', blurb: 'Quarterly project showcases with ' },
        { title: 'Intro to Venture Capital and Private Equity x Insight Partners', date: 'Nov 2024', img: '/website-spring25/assets/events/insightpartners.jpg', blurb: '---' },
        // { title: 'Codium Tech Talk', date: 'Oct 2025', img: '/website-spring25/assets/bailogosquare.svg', blurb: '---' },
        { title: 'Cisco Workshop', date: 'June 2024', img: '/website-spring25/assets/events/cisco.png', blurb: '---' },
        { title: 'Humane + Upskill', date: 'May 2024', img: '/website-spring25/assets/events/humane.jpeg', blurb: '---' },
        { title: 'Internal Hackathons', date: 'March/June 2024', img: '/website-spring25/assets/events/internalhackathon.png', blurb: '---' }
    ];

    return (
        <>
            <Navbar />
            <main className="bg-black min-h-screen pt-24">
                <div className="max-w-[97vw] sm:max-w-[85vw] mx-auto px-6">
                    <h1 className="text-2xl md:text-3xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#7069EC] via-[#AD70DE] to-[#EE78D0] bg-[length:70%_100%] md:bg-[length:60%_100%]">upcoming events</h1>
                    <div className="space-y-6">
                        {events.map((e, idx) => (
                            <react.Fragment key={idx}>
                            <div className="grid grid-cols-[auto_1fr_auto] gap-4 items-start">
                                {/* date */}
                                <div className="flex flex-col items-start text-gray-300 leading-none pt-1 md:pt-0.5">
                                    <div className="text-sm md:text-base uppercase text-gray-300 font-semibold leading-none">{e.month}</div>
                                    <div className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-semibold leading-none mt-0.5">{e.dayNum}</div>
                                    <div className="text-xs uppercase text-gray-500 leading-none mt-2">{e.dayLabel}</div>
                                </div>
                                {/* details */}
                                <div className="sm:col-span-1">
                                    <h2 className="text-white text-base sm:text-lg md:text-xl font-semibold mb-1 leading-snug">{e.title}</h2>
                                    <div className="text-gray-300 text-xs sm:text-sm mb-1">
                                        <span className="font-semibold text-white">{e.venue}</span>
                                    </div>
                                    <p className="text-gray-400 text-xs sm:text-sm leading-snug mb-2" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{e.description}</p>
                                    {e.formLink && (
                                        <a 
                                            href={e.formLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 text-[#EE78D0] text-xs font-semibold hover:underline"
                                        >
                                            Register Here
                                            <FiChevronRight size={12}/>
                                        </a>
                                    )}
                                </div>
                                {/* img */}
                                <div className="sm:col-span-1 sm:justify-self-end">
                                    <img src={e.image} alt={e.title} className="max-w-[30vw] w-full h-20 sm:h-28 md:h-32 rounded-md object-cover object-center" loading="lazy" />
                                </div>
                            </div>
                            {idx < events.length - 1 && (
                              <div
                                className="h-px w-11/12 md:w-[94%] mx-auto my-3"
                                style={{
                                  background: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(112,105,236,0.4) 25%, rgba(238,120,208,0.4) 75%, rgba(0,0,0,0) 100%)'
                                }}
                              />
                            )}
                            </react.Fragment>
                        ))}
                    </div>

                    {/* past events */}
                    <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#7069EC] via-[#60A5FA] to-[#34D399] bg-[length:50%_100%] md:bg-[length:40%_100%]">past events</h2>
                    <div className="relative mb-5">
                        <div ref={pastScrollRef} className="overflow-x-auto overflow-y-hidden snap-x snap-mandatory past-events-scroll">
                            <div className="flex gap-4 w-max pr-6">
                                {pastEvents.map((p, i) => (
                                    <div key={i} className="past-card snap-start flex-none w-[72vw] sm:w-[52vw] md:w-[38vw] lg:w-[30vw] bg-zinc-900/40 rounded-xl p-3 md:p-4 group hover:bg-zinc-900/60 transition-colors">
                                        <div className="w-full aspect-[4/3] overflow-hidden rounded-lg mb-3">
                                            <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" loading="lazy" />
                                        </div>
                                        <div className="">
                                            <h3 className="text-white text-base md:text-lg font-semibold leading-tight">{p.title}</h3>
                                            <div className="text-gray-400 text-xs md:text-sm mb-2">{p.date}</div>
                                            <p className="text-gray-300 text-xs md:text-sm leading-snug">{p.blurb}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button
                            onClick={() => scrollPastEventsByOne(-1)}
                            disabled={!canScrollLeft}
                            className={`absolute -left-8 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full transition-colors ${canScrollLeft ? 'bg-black/40 hover:bg-black/60' : 'bg-black/20 cursor-not-allowed'}`}
                            aria-label="Scroll left"
                        >
                            <FiChevronLeft className={`${canScrollLeft ? 'text-white/70' : 'text-white/30'}`} size={16} aria-hidden="true" />
                        </button>
                        <button
                            onClick={() => scrollPastEventsByOne(1)}
                            disabled={!canScrollRight}
                            className={`absolute -right-8 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full transition-colors ${canScrollRight ? 'bg-black/40 hover:bg-black/60' : 'bg-black/20 cursor-not-allowed'}`}
                            aria-label="Scroll right"
                        >
                            <FiChevronRight className={`${canScrollRight ? 'text-white/70' : 'text-white/30'}`} size={16} aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Events;

