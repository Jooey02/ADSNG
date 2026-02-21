import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Protocol() {
    const container = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const cards = gsap.utils.toArray('.stack-card');

            cards.forEach((card, i) => {
                if (i === cards.length - 1) return; // skip last card

                ScrollTrigger.create({
                    trigger: card,
                    start: 'top top',
                    endTrigger: cards[i + 1],
                    end: 'top top',
                    pin: true,
                    pinSpacing: false,
                });

                gsap.to(card, {
                    scale: 0.9,
                    filter: 'blur(20px)',
                    opacity: 0.5,
                    scrollTrigger: {
                        trigger: cards[i + 1],
                        start: 'top bottom',
                        end: 'top top',
                        scrub: true,
                    }
                });
            });

            // Card specific inside animations
            gsap.to('.anim-rotate', { rotation: 360, duration: 20, repeat: -1, ease: 'linear', transformOrigin: "center center" });
            gsap.to('.anim-scan', { y: '100%', duration: 2, repeat: -1, yoyo: true, ease: 'power1.inOut' });
            gsap.to('.anim-pulse', { strokeDashoffset: 0, duration: 2, repeat: -1, ease: 'linear' });

        }, container);

        return () => ctx.revert();
    }, []);

    const steps = [
        {
            id: '01',
            title: 'LOCATE',
            desc: 'Isolate target demographics by State and City. Instantly retrieve available Radio, TV, and Billboard inventory.',
            visual: (
                <svg className="w-full h-full text-foreground opacity-10 anim-rotate" viewBox="0 0 200 200" fill="none">
                    <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="2" strokeDasharray="10 5" />
                    <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="2" strokeDasharray="5 15" />
                    <rect x="70" y="70" width="60" height="60" stroke="currentColor" strokeWidth="2" />
                </svg>
            )
        },
        {
            id: '02',
            title: 'UPLOAD',
            desc: 'Transmit high-fidelity media assets directly. System verifies audio specs, video codecs, and artwork dimensions automatically.',
            visual: (
                <div className="w-full h-full relative overflow-hidden">
                    <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 gap-1 opacity-10">
                        {Array.from({ length: 100 }).map((_, i) => (
                            <div key={i} className="bg-foreground rounded-full w-1 h-1 sm:w-2 sm:h-2 place-self-center"></div>
                        ))}
                    </div>
                    <div className="anim-scan absolute top-0 w-full h-[2px] bg-accent shadow-[0_0_15px_#E63B2E]"></div>
                </div>
            )
        },
        {
            id: '03',
            title: 'DEPLOY',
            desc: 'Execute secure payment via Flutterwave or Paystack infrastructure. Track booking status and delivery reports in real-time.',
            visual: (
                <svg className="w-full h-full text-accent opacity-30" viewBox="0 0 200 100" fill="none" preserveAspectRatio="none">
                    <path className="anim-pulse" strokeDasharray="400" strokeDashoffset="400" d="M0 50 L40 50 L50 20 L60 80 L70 50 L200 50" stroke="currentColor" strokeWidth="2" />
                </svg>
            )
        }
    ];

    return (
        <section id="protocol" ref={container} className="bg-background relative w-full overflow-hidden">
            {steps.map((step, i) => (
                <div key={step.id} className="stack-card h-[100dvh] w-full flex items-center justify-center relative p-6 sm:p-12 bg-primary border-b border-foreground/10 last:border-b-0 origin-top will-change-transform">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full md:w-1/2 h-1/2 md:h-2/3 pointer-events-none opacity-20 md:opacity-100 flex items-center justify-center">
                        {step.visual}
                    </div>
                    <div className="max-w-6xl w-full z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="font-mono text-accent text-2xl md:text-3xl mb-2 md:mb-4 font-bold">{step.id}.</div>
                            <h2 className="font-sans font-bold text-5xl md:text-7xl lg:text-[100px] text-foreground uppercase tracking-tighter mb-4 md:mb-6">{step.title}</h2>
                            <p className="font-mono text-base md:text-lg text-foreground/70 max-w-md leading-relaxed">{step.desc}</p>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}
