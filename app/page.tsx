import Nav from "./components/Nav";
import Hero from "./components/hero/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDialog from "./components/ProjectDialog";
import { getProjects } from "@/content/lib";

export default function HomePage() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] btn btn-gold">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Stack />
        <Contact />
      </main>
      <Footer />
      <ProjectDialog projects={getProjects()} />
    </>
  );
}
