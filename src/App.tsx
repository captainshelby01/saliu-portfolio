import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
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

        {/* Dynamic Project Filter Grid Section & Deep Dive Modal - Proof First */}
        <Projects />

        {/* Narrative & Stats About Section */}
        <About />

        {/* Professional Career Timeline Section */}
        <Experience />

        {/* Technical Stack & Capabilities Section */}
        <Skills />

        {/* Client Recommendations & Social Proof Section */}
        <Testimonials />

        {/* Form Validation Contact Section */}
        <Contact />
      </main>

      {/* Footer & Back to Top Section */}
      <Footer />
    </div>
  );
}
