import react from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

function Events() {
    const events = [
        {
            dayLabel: 'SUN',
            dayNum: '6',
            time: 'June 6 @ 6:00 pm - 9:30 pm',
            title: 'Engineer Best-of-breed Web-readiness',
            venue: 'Farmer\'s Market Pavilion',
            address: '241 Indian Spring St., Pittsburg',
            description: "Farmer's Market Pavilion hosts Engineer Best-of-breed Web-readiness, an event by ABC Cooking School coming to Pittsburg. Alice looked all round her, calling out in a whisper.) 'That would be like, [...]",
            image: '/assets/baidemoday.jpeg'
        },
        {
            dayLabel: 'SUN',
            dayNum: '6',
            time: 'June 6 @ 9:30 pm - 11:00 pm',
            title: 'Repurpose Initiatives',
            venue: 'Race Start Line',
            address: '601 Sherwood Ave., San Bernadino',
            description: "Race Start Line hosts Repurpose Initiatives, an event by Arts Unlimited Foundation coming to San Bernadino! [...]",
            image: '/assets/baidemoday.jpeg'
        },
        {
            dayLabel: 'MON',
            dayNum: '7',
            time: 'June 7 @ 9:30 pm - 11:00 pm',
            title: 'Repurpose Initiatives',
            venue: 'Race Start Line',
            address: '601 Sherwood Ave., San Bernadino',
            description: "Race Start Line hosts Repurpose Initiatives, an event by Arts Unlimited Foundation coming to San Bernadino! [...]",
            image: '/assets/baidemoday.jpeg'
        }
    ];

    return (
        <>
            <Navbar />
            <main className="bg-black min-h-screen pt-24">
                <div className="max-w-6xl mx-auto px-6">
                    <h1 className="text-2xl md:text-3xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#7069EC] via-[#AD70DE] to-[#EE78D0] bg-[length:60%_100%] bg-no-repeat">upcoming events</h1>
                    <div className="space-y-6">
                        {events.map((e, idx) => (
                            <react.Fragment key={idx}>
                            <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr_auto] gap-3 items-start">
                                {/* Date column */}
                                <div className="flex sm:block items-center gap-3 text-gray-300">
                                    <div className="text-xs uppercase text-gray-400 sm:mb-0.5">{e.dayLabel}</div>
                                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-none">{e.dayNum}</div>
                                </div>
                                {/* Details column */}
                                <div className="sm:col-span-1">
                                    <div className="text-gray-300 text-xs sm:text-sm mb-1">{e.time}</div>
                                    <h2 className="text-white text-base sm:text-lg md:text-xl font-semibold mb-1 leading-snug">{e.title}</h2>
                                    <div className="text-gray-300 text-xs sm:text-sm mb-1">
                                        <span className="font-semibold text-white">{e.venue}</span> {e.address}
                                    </div>
                                    <p className="text-gray-400 text-xs sm:text-sm leading-snug max-w-prose" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{e.description}</p>
                                </div>
                                {/* Image column */}
                                <div className="sm:col-span-1 sm:justify-self-end">
                                    <img src={e.image} alt={e.title} className="w-full max-w-[200px] sm:max-w-xs h-20 sm:h-28 md:h-32 rounded-md object-cover object-center" />
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
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Events;

