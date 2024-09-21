import React from 'react';
import logo from '../images/Brand/logo-barra.png';
import cart from '../images/Brand/shopping cart.png';
import menu from '../images/Brand/menu-aurora.png';
import { Link } from 'react-router-dom';
import '../styles/Barra.css';

function Barra() {
  const closeNavbar = () => {
    const navbar = document.getElementById('offcanvasNavbar');
    if (navbar) {
      navbar.classList.remove('show');
    }
  };

  return (
    <div>
      <header>
        <nav id="barra" className="navbar justify-content-center fixed-top">
          <div id="barra-box" className="d-flex">
            <div id="logo" className="nav-item col-6 col-md-4">
              <Link className="navbar-brand" to="/"> 
                <img width="80%" id="logo" src={logo} alt="Logo Aurora"/>
              </Link>
            </div>
            {/* Links for larger screens */}
            <div id="barra-link" className="navbar navbar-expand-lg d-none d-lg-block col-4">
              <ul className="navbar-nav justify-content-center">
                <li>
                  <Link to="/" onClick={closeNavbar}>Home</Link>
                </li>
                <li>
                  <Link to="/sobre" onClick={closeNavbar}>Sobre</Link>
                </li>
                <li>
                  <Link to="/loja" onClick={closeNavbar}>Loja</Link>
                </li>
                <li>
                  <Link to="/contato" onClick={closeNavbar}>Contato</Link>
                </li>
              </ul>
            </div>
            {/* Shopping cart icon */}
            <div id="cart" className="d-flex d-none d-lg-block col-4">
              <Link className="justify-content-end">
                <img width="15%" id="cart" src={cart} alt="Carrinho Aurora"/>
              </Link>
            </div>
            {/* Menu button for small screens */}
            <div>
              <button 
                className="navbar-toggler d-block d-lg-none justify-content-end" 
                type="button" 
                data-bs-toggle="offcanvas" 
                data-bs-target="#offcanvasNavbar" 
                aria-controls="offcanvasNavbar" 
                aria-label="Toggle navigation"
              >
                <span className="material-symbols-outlined fs-1">
                  <img src={menu} width="50%" alt="Imagem Menu"/>
                </span>
              </button>
              <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                  <Link className="navbar-brand" to="/"> 
                    <img src={logo} alt="Logo"/>
                  </Link>
                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onClick={closeNavbar}></button>
                </div>
                <div className="offcanvas-body text-center">
                  <ul className="navbar-nav justify-content-center">
                    <li>
                      <Link to="/" onClick={closeNavbar}>Home</Link>
                    </li>
                    <li>
                      <Link to="/sobre" onClick={closeNavbar}>Sobre</Link>
                    </li>
                    <li>
                      <Link to="/loja" onClick={closeNavbar}>Loja</Link>
                    </li>
                    <li>
                      <Link to="/contato" onClick={closeNavbar}>Contato</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Barra;
