import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Philosophy() {
    const container = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.phil-line', {
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 60%',
                },
                y: 40,
                opacity: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: 'power3.out'
            });

            gsap.to('.parallax-bg', {
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                },
                y: 100
            });
        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} id="philosophy" className="relative py-32 md:py-40 px-6 md:px-16 overflow-hidden bg-foreground">
            {/* Parallax Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1518341101673-45cd5361099f?q=80&w=2600&auto=format&fit=crop"
                    alt="Brutalist concrete texture"
                    className="parallax-bg w-[110%] h-[120%] -top-[10%] -left-[5%] object-cover opacity-20 mix-blend-luminosity grayscale"
                />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto text-primary">
                <div className="phil-line mb-10 md:mb-16 pl-4 md:pl-6 border-l w-max border-primary/20">
                    <p className="font-mono text-sm md:text-lg text-primary/70 uppercase tracking-widest leading-relaxed">
                        Most ad placement focuses on:
                        <br /><span className="text-primary font-bold">fragmented manual negotiations.</span>
                    </p>
                </div>

                <div className="phil-line">
                    <h2 className="font-sans font-bold text-3xl md:text-6xl lg:text-[80px] leading-[1.1] md:leading-[1.1] tracking-tight">
                        We focus on: <br />
                        <span className="font-drama text-accent text-4xl md:text-7xl lg:text-[100px] leading-[0.9]">
                            precision programmatic deployment.
                        </span>
                    </h2>
                </div>
            </div>
        </section>
    );
}
