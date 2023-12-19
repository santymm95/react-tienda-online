import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../estilos-css/header.css';
import whatsapp from '../imagenes/imagenes-redes/whatsapp.png';
import facebook from '../imagenes/imagenes-redes/facebook.png';
import instagram from '../imagenes/imagenes-redes/instagram.png';
import tiktok from '../imagenes/imagenes-redes/tik-tok.png';

const Header = () => {
  const [submenuVisible, setSubmenuVisible] = useState(false);

  const handleMouseEnter = () => {
    setSubmenuVisible(true);
  };

  const handleMouseLeave = () => {
    setSubmenuVisible(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (window.scrollY > 0) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuItems = [
    { name: 'OFERTAS', to: '/ofertas' },
    {
      name: 'CONSOLAS',
      to: '/consolas',
      submenu: [
        { name: 'Playstation', to: '/consolas/playstation' },
        { name: 'Xbox', to: '/consolas/xbox' },
        { name: 'Nintendo', to: '/consolas/nintendo' },
      ],
    },
    {
      name: 'JUEGOS',
      to: '/juegos',
      submenu: [
        { name: 'Playstation', to: '/juegos/playstation' },
        { name: 'Xbox', to: '/juegos/xbox' },
        { name: 'Nintendo', to: '/juegos/nintendo' },
      ],
    },
    { name: 'ACCESORIOS', to: '/accesorios' },
    { name: 'REPARACIÓN', to: '/reparacion' },
    { name: 'OPINIONES', to: '/opiniones' },
  ];

  return (
    <>
      <header className="header">
        <nav className="navbar-nav navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                {menuItems.map((item) => (
                  <React.Fragment key={item.name}>
                    {item.submenu ? (
                      <div
                        className="navbar-nav-item dropdown"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <Link
                          className="nav-link active dropdown-toggle"
                          to={item.to}
                          id={`navbarDropdown${item.name}`}
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {item.name}
                        </Link>
                        <ul
                          className={`submenu ${submenuVisible ? 'visible' : ''}`}
                          aria-labelledby={`navbarDropdown${item.name}`}
                        >
                          {item.submenu.map((subitem) => (
                            <li key={subitem.name}>
                              <Link className="submenu-item" to={subitem.to}>
                                {subitem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <Link className="nav-link active" to={item.to}>
                        {item.name}
                      </Link>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </nav>
        <div className="logos-redes">
          <img src={whatsapp} alt="WhatsApp" />
          <img src={facebook} alt="Facebook" />
          <img src={instagram} alt="Instagram" />
          <img src={tiktok} alt="TikTok" />
        </div>
      </header>
    </>
  );
};

export default Header;
