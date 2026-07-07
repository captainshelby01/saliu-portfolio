import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-container">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Sections */}
      <main>
        {/* Intro Hero Section */}
        <Hero />

        {/* Narrative & Stats About Section */}
        <About />

        {/* Technical Skill Metrics Section */}
        <Skills />

        {/* Dynamic Project Filter Grid Section */}
        <Projects />

        {/* Professional Career Timeline Section */}
        <Experience />

        {/* Form Validation Contact Section */}
        <Contact />
      </main>

      {/* Footer & Back to Top Section */}
      <Footer />
    </div>
  );
}
