import React from 'react';

export function Footer() {
    return (
        <footer className="bg-foreground text-primary pt-24 pb-12 px-6 md:px-16 rounded-[2rem] sm:rounded-t-[4rem] -mt-10 relative z-20">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                <div className="md:col-span-2">
                    <h2 className="font-sans font-bold text-4xl md:text-5xl mb-4 text-primary tracking-tight">AdsNG</h2>
                    <p className="font-mono text-primary/60 max-w-sm text-sm leading-relaxed mb-8">
                        The programmatic advertising marketplace for Nigeria. Book Radio, TV, and Electronic Billboards directly from your dashboard.
                    </p>
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-primary/20 bg-primary/5">
                        <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse shadow-[0_0_8px_#10B981]"></div>
                        <span className="font-mono text-xs tracking-widest text-primary/80">SYSTEM OPERATIONAL</span>
                    </div>
                </div>

                <div>
                    <h4 className="font-sans font-bold text-lg mb-6 text-primary tracking-tight">Platform</h4>
                    <ul className="space-y-4 font-mono text-sm text-primary/60">
                        <li><a href="#" className="hover:text-accent transition-colors">Radio Stations</a></li>
                        <li><a href="#" className="hover:text-accent transition-colors">TV Networks</a></li>
                        <li><a href="#" className="hover:text-accent transition-colors">Billboards</a></li>
                        <li><a href="#" className="hover:text-accent transition-colors">Pricing</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-sans font-bold text-lg mb-6 text-primary tracking-tight">Company</h4>
                    <ul className="space-y-4 font-mono text-sm text-primary/60">
                        <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
                        <li><a href="#" className="hover:text-accent transition-colors">Methodology</a></li>
                        <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-6xl mx-auto pt-8 border-t border-primary/10 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="font-mono text-xs text-primary/40">
                    © {new Date().getFullYear()} AdsNG Placement Platform. All rights reserved.
                </div>
                <div className="font-mono text-xs text-primary/40 tracking-widest">
                    SECURE ENCRYPTED NETWORK.
                </div>
            </div>
        </footer>
    );
}
