
import React, { useMemo, useState } from 'react';

import {
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

import ProjectCard from './ProjectCard';

function Projects({
  projects,
  onOpenProject
}) {
  const projectsPerPage = 4; 
  const projectsPerMove = 2;
  const [projectOffset, setProjectOffset] =
    useState(0);

  const totalPositions = Math.ceil(
    (projects.length - projectsPerPage) / projectsPerMove
  ) + 1;
  const currentPosition = Math.floor(
    projectOffset / projectsPerMove
  ) + 1;
  /*
    Get the four projects currently visible.
  */

  const visibleProjects = useMemo(() => 
    { return projects.slice( 
      projectOffset, projectOffset + projectsPerPage ); }, 
      [ projectOffset, projects ]);


  /*
    Move the project carousel.
  */

  const shiftProjects = (direction) => 
    { setProjectOffset((currentOffset) => 
      { const nextOffset = currentOffset + direction; 
        /* Prevent moving LEFT past the initial position. */ 
        if (nextOffset < 0) { return currentOffset; } 
        /* Prevent moving RIGHT past the final position. */ 
        const maxOffset = projects.length - projectsPerPage; 
        if (nextOffset > maxOffset) { return currentOffset; } 
        return nextOffset; }); };
        
    const canMoveLeft = projectOffset > 0; 
    const canMoveRight = projectOffset < projects.length - projectsPerPage;


  return (
    <section
      id="work"
      className="section work-section"
    >

      {/* SECTION HEADING */}

      <div className="section-heading work-heading">

        <div>

          

          <h2>
            Project work
          </h2>

        </div>


        {/* CONTROLS */}

        <div
          className="project-controls"
          aria-label="Project carousel controls"
        >

          <span className="project-counter"> 
            {String(projectOffset)} 
            {' / '} {String((projects.length)/2)} 
          </span>
          <button
            onClick={() => shiftProjects(-2)}
            aria-label="Show previous projects"
            className='left'
          >
            <ChevronLeft className="l" size={20} />
          </button>

          <button
            onClick={() => shiftProjects(2)}
            aria-label="Show next projects"
          >
            <ChevronRight size={20} />
          </button>

        </div>

      </div>


      {/* PROJECT GRID */}

      <div
        className="project-grid"
        key={projectOffset}
      >

        {visibleProjects.map((project) => (

          <ProjectCard
            key={project.id}
            project={project}
            onOpen={() => onOpenProject(project)}
          />

        ))}

      </div>

    </section>
  );
}

export default Projects;

