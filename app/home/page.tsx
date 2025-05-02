import HeroSection from './HeroSection';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';
import MySkills from './Skills';
import Background from '../components/Background';


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