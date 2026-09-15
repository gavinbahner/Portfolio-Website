import React from 'react';

import {
  ArrowUpRight
} from 'lucide-react';

function Footer({
  scrollTo
}) {

  const footerLinks = [
    'home',
    'work',
    'experience',
    'about'
  ];


  return (
    <footer
      id="contact"
      className="footer section"
    >

      {/* FOOTER INTRO */}

      <div>

        <p className="eyebrow">
          LET'S CONNECT
        </p>

        <h2>
          Have a project in mind?
        </h2>

        <p>
          Use the details below as a simple
          contact template. Replace them with
          your preferred information.
        </p>

      </div>


      {/* CONTACT INFORMATION */}

      <div className="contact-box">

        <div>

          <span>
            Email
          </span>

          <a href="mailto:hello@example.com">
            hello@example.com
          </a>

        </div>


        <div>

          <span>
            Phone
          </span>

          <a href="tel:+15550102345">
            +1 (555) 010-2345
          </a>

        </div>


        <a
          className="linkedin"
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
          <ArrowUpRight size={18} />
        </a>

      </div>


      {/* FOOTER BOTTOM */}

      <div className="footer-bottom">

        <span>
          © 2026 Alex Morgan
        </span>


        <div>

          {footerLinks.map((item) => (

            <button
              key={item}
              onClick={() => scrollTo(item)}
            >
              {item}
            </button>

          ))}

        </div>

      </div>

    </footer>
  );
}

export default Footer;
