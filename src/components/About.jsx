
import React from 'react';

import {
  placeholderImages
} from '../data/portfolioData';

function About() {

  const galleryImages =
    placeholderImages.slice(2, 6);


  return (
    <section
      id="about"
      className="section about-section"
    >

      {/* SECTION INTRO */}

      <p className="eyebrow">
        A LITTLE MORE
      </p>

      <h2>
        Designing with clarity,
        curiosity, and intent.
      </h2>


      {/* ABOUT TEXT */}

      <p className="about-copy">
        My work starts with understanding people
        and ends with making complex ideas feel
        simple. I enjoy moving between research,
        systems thinking, visual craft, and
        front-end implementation to create work
        that is both useful and memorable.
      </p>


      {/* IMAGE GALLERY */}

      <div className="gallery">

        {galleryImages.map((image, index) => (

          <div
            className="gallery-item"
            key={image}
          >

            <img
              src={image}
              alt={`Gallery placeholder ${index + 1}`}
            />

            <span>
              0{index + 1}
            </span>

          </div>

        ))}

      </div>

    </section>
  );
}

export default About;

