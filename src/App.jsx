
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
} from './data/portfolioData';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null);

  const [projects, setProjects] = useState(initialProjects);

  const [timeline, setTimeline] = useState(initialTimeline);

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

    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: 'smooth'
      });
  };

  /*
    Update an existing project.
  */
  const updateProject = (updatedProject) => {
    setProjects((currentProjects) =>
      currentProjects.map((project) =>
        project.id === updatedProject.id
          ? updatedProject
          : project
      )
    );

    setSelectedProject(updatedProject);
  };

  /*
    Add a new experience to the timeline.
  */
  const addTimelineItem = () => {
    setTimeline((currentTimeline) => [
      ...currentTimeline,

      {
        year: '2026 — Future',
        title: 'New Experience',
        text: 'Add a concise description of this role, project, accomplishment, or milestone here.'
      }
    ]);
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
          timeline={timeline}
          onAddExperience={addTimelineItem}
        />

        <About />

      </main>

      <Footer
        scrollTo={scrollTo}
      />

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onSave={updateProject}
        />
      )}

    </div>
  );
}

export default App;

