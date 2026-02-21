import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { Button } from './ui/Button';

export function Hero() {
    const container = useRef();

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.hero-elem', {
                y: 40,
                opacity: 0,
                duration: 1.2,
                stagger: 0.1,
                ease: 'power3.out',
                delay: 0.2
            });
        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={container}
            className="relative h-[100dvh] w-full flex items-end pb-24 px-6 md:px-16 overflow-hidden bg-foreground"
        >
            {/* Background Image / Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1541888086055-6e4cd6fbdb85?q=80&w=2600&auto=format&fit=crop"
                    alt="Brutalist concrete architecture"
                    className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/80 to-transparent"></div>
            </div>

            {/* Content pushes to bottom-left third */}
            <div className="relative z-10 max-w-4xl text-primary">
                <h1 className="flex flex-col gap-2">
                    <span className="hero-elem font-sans font-bold text-2xl md:text-4xl tracking-tight uppercase">
                        Book placements across the
                    </span>
                    <span className="hero-elem font-drama text-6xl md:text-8xl lg:text-[140px] leading-[0.85] text-accent tracking-tighter">
                        System.
                    </span>
                </h1>
                <p className="hero-elem mt-8 md:mt-12 text-lg md:text-xl max-w-xl font-mono opacity-80 mb-10 border-l-2 border-accent pl-4">
                    AdsNG — The unified advertising marketplace. Book and pay for Radio, TV, and Electronic Billboards across any state and city in Nigeria.
                </p>
                <div className="hero-elem">
                    <Button variant="primary" className="text-lg px-8 py-4">
                        Initialize Campaign
                    </Button>
                </div>
            </div>
        </section>
    );
}
