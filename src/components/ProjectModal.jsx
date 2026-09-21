
import React, { useState } from 'react';

import {
  ArrowRight,
  X
} from 'lucide-react';


function ProjectModal({
  project,
  onClose
}) {

  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onMouseDown={(event) => {

        if (
          event.target === event.currentTarget
        ) {
          onClose();
        }

      }}
    >

      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >

        {/* HEADER */}

        <div className="modal-head">

          <div>

            <p className="modal-eyebrow">
              {project.category}
            </p>

            <h2 id="modal-title">
              {project.title}
            </h2>

          </div>
          <button
            className="close-button" 
            onClick={onClose} 
            aria-label="Close">
            <X />
          </button>
        </div>


        {/* Body */}

        <div className="modal-body">
            <div className='rep'>
              <p>
                {project.description}
              </p>
                <img className='image1'
                    src={project.featureImage}    
                />
            </div>
        
            <div className="rep">
              <img className='image1'
                  src={project.featureImage2}    
              />
                <p>
                {project.description2}
                </p>
              </div>
              <div className="pdf-container">
                <embed src={project.pdf}  data-alt="PDF" type="application/pdf" className="pdf-viewer" />
               
              </div>
          </div>
      </div>
    </div>
  );
}

export default ProjectModal;

