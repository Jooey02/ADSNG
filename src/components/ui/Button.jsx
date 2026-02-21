import React from 'react';
import { twMerge } from 'tailwind-merge';

export function Button({ children, className, variant = 'primary', ...props }) {
    const baseStyles = "magnetic-btn relative inline-flex items-center justify-center font-sans font-semibold rounded-full overflow-hidden group";

    const variants = {
        primary: "bg-accent text-primary px-6 py-3",
        secondary: "bg-foreground text-primary px-6 py-3",
        outline: "border border-foreground text-foreground px-6 py-3"
    };

    return (
        <button className={twMerge(baseStyles, variants[variant], className)} {...props}>
            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] rounded-full mr-auto"></span>
            <span className="relative z-10 block transition-transform duration-300 group-hover:-translate-y-[1px]">{children}</span>
        </button>
    );
}
