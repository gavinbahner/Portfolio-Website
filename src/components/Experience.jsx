
import React from 'react';

function Experience({
  timeline,
  onAddExperience
}) {

  return (
    <section
      id="experience"
      className="section experience-section"
    >

      {/* SECTION HEADING */}

      <div className="section-heading">

        <div>

          <p className="eyebrow">
            THE PATH SO FAR
          </p>

          <h2>
            My experiences
          </h2>

        </div>


        <button
          className="text-button"
          onClick={onAddExperience}
        >
          + Add experience
        </button>

      </div>


      {/* TIMELINE */}

      <div className="timeline">

        {timeline.map((item, index) => (

          <div
            className="timeline-item"
            key={`${item.title}-${index}`}
          >

            {/* TIMELINE MARKER */}

            <div className="timeline-marker">
              <span></span>
            </div>


            {/* CONTENT */}

            <div className="timeline-content">

              <p className="timeline-year">
                {item.year}
              </p>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.text}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Experience;

