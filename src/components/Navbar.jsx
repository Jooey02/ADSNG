import React, { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { Button } from './ui/Button';

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="fixed top-6 w-full flex justify-center z-50 px-4 pointer-events-none">
            <div
                className={twMerge(
                    "pointer-events-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 will-change-transform",
                    scrolled
                        ? "bg-background/80 backdrop-blur-xl border border-foreground/10 text-foreground shadow-sm w-full max-w-5xl"
                        : "bg-transparent text-primary w-full max-w-6xl"
                )}
            >
                <div className="text-xl font-sans font-bold tracking-tight">
                    AdsNG
                </div>
                <div className="hidden md:flex items-center space-x-8 text-sm font-sans font-medium">
                    <a href="#platform" className="hover:-translate-y-[1px] transition-transform inline-block">Platform</a>
                    <a href="#philosophy" className="hover:-translate-y-[1px] transition-transform inline-block">Philosophy</a>
                    <a href="#protocol" className="hover:-translate-y-[1px] transition-transform inline-block">Methodology</a>
                </div>
                <div className="flex gap-4">
                    <Button variant="primary" className="text-sm px-5 py-2">
                        Book Placement
                    </Button>
                </div>
            </div>
        </nav>
    );
}
