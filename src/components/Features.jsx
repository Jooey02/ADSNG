import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Card 1 Shuffler
function DiagnosticShuffler() {
    const [items, setItems] = useState([
        { id: 1, title: 'State & City Resolution', desc: 'Precise geographic targeting' },
        { id: 2, title: 'Inventory Mapping', desc: 'Real-time billboard availability' },
        { id: 3, title: 'Media Availability Checks', desc: 'Station slot confirmations' },
    ]);

    useEffect(() => {
        const int = setInterval(() => {
            setItems(prev => {
                const newArr = [...prev];
                newArr.unshift(newArr.pop());
                return newArr;
            });
        }, 3000);
        return () => clearInterval(int);
    }, []);

    return (
        <div className="relative h-64 w-full flex items-center justify-center [perspective:1000px]">
            {items.map((item, i) => (
                <div
                    key={item.id}
                    className="absolute w-full max-w-[16rem] sm:max-w-xs rounded-[2rem] bg-primary p-6 shadow-xl border border-foreground/10 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex flex-col justify-center h-32"
                    style={{
                        zIndex: 3 - i,
                        transform: `translateY(${i * 20}px) scale(${1 - i * 0.05})`,
                        opacity: 1 - i * 0.2
                    }}
                >
                    <div className="font-mono text-xs text-accent mb-2">SYS.OP.{item.id}</div>
                    <h3 className="font-sans font-bold text-foreground text-base sm:text-lg">{item.title}</h3>
                    <p className="font-mono text-xs sm:text-sm text-foreground/60">{item.desc}</p>
                </div>
            ))}
        </div>
    );
}

// Card 2 Typewriter
function TelemetryTypewriter() {
    const [text, setText] = useState('');
    const fullText = "AUTHENTICATING MEDIA PAYLOAD... \nAUDIO FILE: ACCEPTED. \nVIDEO FILE: ACCEPTED. \nARTWORK: 1920x1080 VERIFIED. \nTRANSMITTING SECURELY...";

    useEffect(() => {
        let i = 0;
        const int = setInterval(() => {
            setText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) {
                clearInterval(int);
                setTimeout(() => { i = 0; }, 2000);
            }
        }, 50);
        return () => clearInterval(int);
    }, []);

    return (
        <div className="h-64 rounded-[2rem] bg-foreground p-6 shadow-xl border border-foreground/10 flex flex-col relative overflow-hidden">
            <div className="flex items-center gap-2 mb-4 shrink-0">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                <span className="font-mono text-xs text-primary/60 tracking-widest uppercase">Live Payload Feed</span>
            </div>
            <div className="font-mono text-xs sm:text-sm text-primary whitespace-pre-line leading-relaxed flex-1">
                {text}<span className="inline-block w-2 h-4 bg-accent animate-pulse ml-1 align-middle"></span>
            </div>
        </div>
    );
}

// Card 3 Scheduler
function ProtocolScheduler() {
    const container = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

            tl.fromTo('.anim-cursor', { x: 0, y: 150, opacity: 0 }, { x: 140, y: 80, opacity: 1, duration: 1, ease: 'power2.out' })
                .to('.anim-cursor', { scale: 0.9, duration: 0.1 })
                .to('.anim-day-wed', { backgroundColor: '#E63B2E', color: '#E8E4DD', duration: 0.1 }, "<")
                .to('.anim-cursor', { scale: 1, duration: 0.1 })
                .to('.anim-cursor', { x: 250, y: 200, duration: 0.8, ease: 'power2.inOut' })
                .to('.anim-cursor', { scale: 0.9, duration: 0.1 })
                .to('.anim-btn-save', { scale: 0.95, duration: 0.1 }, "<")
                .to('.anim-cursor', { scale: 1, duration: 0.1 })
                .to('.anim-btn-save', { scale: 1, duration: 0.1 }, "<")
                .to('.anim-cursor', { opacity: 0, duration: 0.3 });
        }, container);

        return () => ctx.revert();
    }, []);

    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    return (
        <div ref={container} className="relative h-64 rounded-[2rem] bg-primary p-6 shadow-xl border border-foreground/10 flex flex-col overflow-hidden">
            <div className="font-mono text-xs text-foreground/60 tracking-widest uppercase mb-6">Campaign Tracking</div>

            <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-8">
                {days.map((d, i) => (
                    <div key={i} className={`h-8 sm:h-10 rounded-lg border border-foreground/10 flex items-center justify-center font-sans font-bold text-xs sm:text-sm ${i === 3 ? 'anim-day-wed' : 'text-foreground/40'}`}>
                        {d}
                    </div>
                ))}
            </div>

            <div className="mt-auto flex justify-end relative z-0">
                <div className="anim-btn-save px-4 py-2 rounded-full bg-foreground text-primary font-sans text-xs font-bold">Deploy</div>
            </div>

            <svg className="anim-cursor absolute left-0 top-0 w-6 h-6 z-10 drop-shadow-md" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 2L20.44 11.2C21.46 11.75 21.32 13.25 20.21 13.58L13.88 15.48L11.78 21.78C11.45 22.89 9.95 23.03 9.4 22.01L4 2Z" fill="#111111" stroke="#E8E4DD" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
        </div>
    );
}

export function Features() {
    const container = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.feature-card', {
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 75%',
                },
                y: 60,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out'
            });
        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <section id="platform" ref={container} className="py-24 sm:py-32 px-6 md:px-16 bg-background relative z-10 rounded-[2rem] sm:rounded-t-[3rem] -mt-10 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <h2 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
                    Interactive Functional Artifacts.
                </h2>
                <p className="font-mono text-foreground/60 max-w-2xl mb-12 sm:mb-20 text-base sm:text-lg">
                    Hyper-Local Targeting. Seamless Media Uploads. Real-Time Tracking.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="feature-card flex flex-col gap-6">
                        <DiagnosticShuffler />
                        <div>
                            <h3 className="font-sans font-bold text-xl sm:text-2xl text-foreground mb-2">Geographic Targeting</h3>
                            <p className="font-mono text-sm text-foreground/70">Select exact State and City to view targeted media outlets instantly.</p>
                        </div>
                    </div>

                    <div className="feature-card flex flex-col gap-6">
                        <TelemetryTypewriter />
                        <div>
                            <h3 className="font-sans font-bold text-xl sm:text-2xl text-foreground mb-2">Media Transcode & Upload</h3>
                            <p className="font-mono text-sm text-foreground/70">Directly upload audio, video, or artwork. System validates specs automatically.</p>
                        </div>
                    </div>

                    <div className="feature-card flex flex-col gap-6">
                        <ProtocolScheduler />
                        <div>
                            <h3 className="font-sans font-bold text-xl sm:text-2xl text-foreground mb-2">Deployment Schedule</h3>
                            <p className="font-mono text-sm text-foreground/70">Book specific slots (e.g. 2 weeks) and track broadcast delivery.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
