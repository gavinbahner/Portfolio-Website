
import React from 'react';

import {
  ArrowRight
} from 'lucide-react';

function ProjectCard({
  project,
  onOpen
}) {

  const handleKeyDown = (event) => {

    if (
      event.key === 'Enter' ||
      event.key === ' '
    ) {
      event.preventDefault();
      onOpen();
    }

  };


  return (
    <article
      className="project-card"
      onClick={onOpen}
      onKeyDown={handleKeyDown}
      tabIndex="0"
      aria-label={`Open ${project.title} project`}
    >

      {/* PROJECT IMAGE */}

      <img
        src={project.image}
        alt=""
      />


      {/* PROJECT OVERLAY */}

      <div className="project-overlay">

        <div>

          <span>
            {project.category}
          </span>

          <h3>
            {project.title}
          </h3>

        </div>

        <ArrowRight size={24} />

      </div>

    </article>
  );
}

export default ProjectCard;
