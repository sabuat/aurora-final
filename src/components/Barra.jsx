import React from 'react'
import logo from '../images/Brand/logo-barra.png'
import cart from '../images/Brand/shopping cart.png'
import menu from '../images/Brand/menu-aurora.png'
import { Link } from 'react-router-dom';

function Barra() {
  return (
    <div>
      <header>
        <nav className="navbar bg-body-tertiary fixed-top">
          <div id="nav-bar" className="d-flex align-items-center justify-content-between">
            <div className="nav-item col-6 col-md-4">
              <a className="navbar-brand" href="/" > 
                <img width="100%" id="logo" src={ logo} alt="Logo Aurora"/>
              </a>
            </div>
            {/* <!-- Links --> */}
            <div className="navbar navbar-expand-lg d-none d-lg-block col-4" id="link-bar">
              <ul className="navbar-nav justify-content-center">
                <li className="nav-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/sobre">Sobre</Link>
                </li>
                <li className="nav-item">
                  <Link to="/loja">Loja</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contato">Contato</Link>
                </li>
              </ul>
            </div>
            {/* <!-- Icone do carrinho --> */}
            <div className="d-flex d-none d-lg-block col-4">
              <a className="d-flex flex-row justify-content-end">
                <img id="cart" src={cart} alt="Carrinho Aurora"/>
              </a>
            </div> 
            {/* <!-- Botao do menu--> */}
            <div>
              <button className="navbar-toggler d-block d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span className="material-symbols-outlined fs-1">
                  <img src={menu} width="50%" alt="Imagem Menu"/>
                </span>
              </button>
              <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                  <a className="navbar-brand " href="/" > 
                    <img src={logo}/>
                  </a>
                  <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body text-center">
                  <ul className="navbar-nav justify-content-center">
                    <li className="nav-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/sobre">Sobre</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/loja">Loja</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/contato">Contato</Link>
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

export default Barra