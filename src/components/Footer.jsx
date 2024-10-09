import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import Fb from '../images/Logos/facebook.svg';
import Ig from '../images/Logos/instagram.svg';
import Ws from '../images/Logos/whatsapp.svg';
import Tk from '../images/Logos/tiktok.svg';
import Dourado from '../images/Brand/logo-aurora-dorado.svg';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container-fluid p-1">
        <div className="row pt-2 py-5 text-center align-items-center">
          {/* Links */}
          <div className="col-md-4">
            <div className="row">
              <div className="d-flex pt-5 justify-content-between">
                <Link to="/" className="link-bar col px-1">Home</Link>
                <Link to="/loja" className="link-bar col px-1">Loja</Link>
                <Link to="/sobre" className="link-bar col px-1">Sobre</Link>
                <Link to="/contato" className="link-bar col px-1">Contato</Link>
              </div>
            </div>
            <div className="row pt-4">
              <a href="/" className="col">
                <img className="icon" style={{ maxWidth: '2.75rem' }} src={Fb} alt="facebook logo" />
              </a>
              <a href="https://www.instagram.com/auroraperfumaria.sp/" className="col">
                <img className="icon" style={{ maxWidth: '2.75rem' }} src={Ig} alt="instagram logo" />
              </a>
              <a href="/" className="col">
                <img className="icon" style={{ maxWidth: '2.75rem' }} src={Tk} alt="tiktok logo" />
              </a>
              <a href="https://wa.link/rotgwh" className="col">
                <img className="icon" style={{ maxWidth: '2.75rem' }} src={Ws} alt="whatsapp logo" />
              </a>
            </div>
            <div className="row pt-3 px-5">
              <p><em>#auroraperfumes</em></p>
            </div>
          </div>

          {/* Logotipo */}
          <div className="col-md-4">
            <div className="d-none d-md-block row pt-5">
              <a href="/">
              <img className="logo-footer img-fluid" src={Dourado} alt="logo" />
              </a>
            </div>
          </div>

          {/* Area de contato */}
          <div className="d-none d-md-block col-md-4">
            <div className="pt-2 px-5">auroraperfumes@gmail.com</div>
            <div className="pt-2 px-5">(+55)11 98765 4321</div>
          </div>
        </div>
      </div>

      <div id="footer-prod" className="container-fluid">
        <div className="row">
          <p>© Este site é um produto de <em>Araguaney Digital.</em> 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
