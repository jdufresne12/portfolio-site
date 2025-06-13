import HeroSection from './sections/HeroSection';
import AboutMe from './sections/AboutMe';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import MySkills from './sections/Skills';
import Background from './components/Background';


export default function HomePage() {
    return (
        <main className="relative min-h-screen">
            <Background />
            <div className="relative" style={{ zIndex: 10 }}>
                <HeroSection />
                <AboutMe />
                <MySkills />
                <Projects />
                <Contact />
            </div>
        </main>
    );
}