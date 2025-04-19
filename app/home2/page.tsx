import HeroSection from './HeroSection';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';

export default function HomePage() {
    return (
        <main className="h-screen overflow-y-scroll">
            <div className="snap-y snap-mandatory h-[200vh]">
                <HeroSection />
                <AboutMe />
            </div>
            <Projects />
            <Contact />
        </main>
    );
}