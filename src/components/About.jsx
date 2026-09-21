
import React from 'react';

import {
  placeholderImages
} from '/src/Data/portfolioData.js'

function About() {

  const galleryImages =
    placeholderImages.slice(6, 8);


  return (
    <section
      id="about"
      className="section about-section"
    >
        
          {/* SECTION INTRO */}

      <div className='new'>

          <h2>
            A Little Bit More About Me
          </h2>


          {/* ABOUT TEXT */}

          <p className="about-copy">
            I grew up on the beach in Wilmington, NC and have always enjoyed the beach and the outdoors. I love being in the ocean, surfing and playing almost every sport.
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

                
              </div>

            ))}

          </div>
        </div>
        
    </section>
  );
}

export default About;

