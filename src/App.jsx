
import React, { useEffect, useState } from 'react';

import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import About from './components/About.jsx';
import Footer from './components/Footer.jsx';
import ProjectModal from './components/ProjectModal.jsx';

import {
  initialProjects,
  initialTimeline
} from './/Data/portfolioData.js'

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null);

  const [projects, setProjects] = useState(initialProjects);

  const timeline = initialTimeline
  /*
    Prevent the page from scrolling while
    the menu or project modal is open.
  */
  useEffect(() => {
    document.body.style.overflow =
      selectedProject || menuOpen
        ? 'hidden'
        : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject, menuOpen]);

  /*
    Smooth scrolling between sections.
  */
  const scrollTo = (id) => {
    setMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({behavior: 'smooth'
      });
  };

 

  return (
    <div className="site-shell">

      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        scrollTo={scrollTo}
      />

      <main>

        <Hero />

        <Projects
          projects={projects}
          onOpenProject={setSelectedProject}
        />

        <Experience
          timeline={timeline}/>

        <About />

      </main>

      <Footer
        scrollTo={scrollTo}/>
      
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)} 
        />
      )}

    </div>
  );
}

export default App;

