
import React from 'react';

function Hero() {

  return (
    <section
      id="home"
      className="hero section"
    >

      {/* LEFT SIDE */}

      <div className="hero-copy">

        <p className="eyebrow" >
          Hello! I am
        </p>

        <h1>
          Gavin Bahner
        </h1>

        <p className="hero-lede">
          I am a first year Master's student at NC State University studying Aerospace Engineering. I am into aerodynamics, motorsports, and mechanical design
        </p>


        {/* CREDENTIALS */}

        <div className="credential-grid">

          <div>
            <span>Undergraduate School</span>
            <strong>Wake Forest University</strong>
          </div>

          <div>
            <span>Degree</span>
            <strong>General Engineering</strong>
          </div>

          <div>
            <span>Graduate School</span>
            <strong>
              North Carolina State University
            </strong>
          </div>

          <div>
            <span>Degree</span>
            <strong>
              Aerospace Engineering
            </strong>
          </div>

        </div>

      </div>


      {/* RIGHT SIDE */}

      <div className="hero-image-wrap">

        <img
          src='./src/Data/Images/port.png'
          alt="Iceland?"
        />

        {/* <div className="image-caption">
          I am from Wilmington. NC
          <span>↗</span>
        </div> */}

      </div>

    </section>
  );
}

export default Hero;

