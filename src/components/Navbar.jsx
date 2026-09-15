
import React from 'react';

import {
  Menu,
  X
} from 'lucide-react';

function Navbar({
  menuOpen,
  setMenuOpen,
  scrollTo
}) {

  const menuItems = [
    'home',
    'work',
    'experience',
    'about',
    'contact'
  ];

  return (
    <header className="navbar">

      {/* BRAND */}

      <button
        className="brand"
        onClick={() => scrollTo('home')}
        aria-label="Go to home"
      >
        Gavin Bahner<span>.</span>
      </button>


      {/* MENU BUTTON */}

      <button
        className="menu-trigger"
        onClick={() => setMenuOpen((value) => !value)}
        aria-expanded={menuOpen}
        aria-controls="site-menu"
      >

        {menuOpen ? (
          <X size={23} />
        ) : (
          <Menu size={23} />
        )}

        <span>Menu</span>

      </button>


      {/* MENU */}

      <nav
        id="site-menu"
        className={`menu-panel ${menuOpen ? 'open' : ''}`}
        aria-label="Primary navigation"
      >

        {menuItems.map((item) => (

          <button
            key={item}
            onClick={() => scrollTo(item)}
          >
            {item[0].toUpperCase() + item.slice(1)}
          </button>

        ))}

      </nav>

    </header>
  );
}

export default Navbar;

