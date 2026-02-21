import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Philosophy } from './components/Philosophy';
import { Protocol } from './components/Protocol';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

function App() {
    return (
        <div className="bg-background text-foreground min-h-screen selection:bg-accent selection:text-primary relative scroll-smooth">
            <Navbar />
            <main>
                <Hero />
                <Features />
                <Philosophy />
                <Protocol />
                <Pricing />
            </main>
            <Footer />
        </div>
    );
}

export default App;
