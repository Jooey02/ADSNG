import React from 'react';
import { Button } from './ui/Button';
import { Check } from 'lucide-react';

export function Pricing() {
    const plans = [
        {
            name: "Local Tester",
            price: "10k",
            desc: "Perfect for single-city radio or tv slots.",
            features: ["1 City Targeted", "Radio & TV Access", "Standard Support", "Basic Analytics"],
            pop: false
        },
        {
            name: "Regional Scale",
            price: "50k",
            desc: "Multi-state campaigns with billboard access.",
            features: ["Up to 5 States", "All Media Types", "Priority Support", "Real-Time Tracking"],
            pop: true
        },
        {
            name: "National Enterprise",
            price: "Custom",
            desc: "Full Nigeria coverage for massive brands.",
            features: ["36 States + FCT", "Dedicated Account Mgr", "Custom SLA", "API Integration"],
            pop: false
        }
    ];

    return (
        <section className="py-24 sm:py-32 px-6 md:px-16 bg-background">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-sans font-bold text-4xl md:text-6xl text-foreground mb-4">Transparent Deployment.</h2>
                    <p className="font-mono text-foreground/60 text-base sm:text-lg max-w-2xl mx-auto">Platform access tiers. Media placement costs are calculated separately per station/board.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {plans.map((p, i) => (
                        <div
                            key={i}
                            className={`rounded-[2rem] p-8 transition-transform duration-300 hover:-translate-y-2 ${p.pop ? 'bg-primary ring-2 ring-accent shadow-2xl md:scale-105' : 'bg-transparent border-2 border-foreground/10'}`}
                        >
                            <h3 className="font-sans font-bold text-2xl text-foreground mb-1">{p.name}</h3>
                            <p className="font-mono text-sm text-foreground/60 mb-6">{p.desc}</p>

                            <div className="font-sans font-bold text-5xl text-foreground mb-8">
                                {p.price !== 'Custom' && <span className="text-2xl opacity-50">₦</span>}
                                {p.price}
                                {p.price !== 'Custom' && <span className="text-lg text-foreground/50 font-normal">/mo</span>}
                            </div>

                            <ul className="mb-8 space-y-4">
                                {p.features.map((f, j) => (
                                    <li key={j} className="flex items-center gap-3 font-mono text-sm text-foreground/80">
                                        <Check size={16} className={p.pop ? "text-accent" : "text-foreground/40"} />
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <Button variant={p.pop ? 'primary' : 'outline'} className="w-full">
                                {p.price === 'Custom' ? 'Contact Sales' : 'Initialize Plan'}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
