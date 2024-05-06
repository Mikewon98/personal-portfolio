import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Project from "./components/project";
import Skills from "./components/skills";

export default function Home() {
  return (
    <div className='min-h-screen bg-black overflow-hidden'>
      <div className='bg-grid-white/[0.05] relative'>
        <div className='max-w-7xl mx-auto p-5'>
          <Navbar />
          <HeroSection />
        </div>
        <div className='h-5 xl:h-24 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full '></div>
      </div>
      <div className='max-w-7xl mx-auto p-5 mt-20'>
        <Skills />
        <Project />
        <Footer />
      </div>
    </div>
  );
}
