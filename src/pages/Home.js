import React from 'react';
import { Link } from 'react-router-dom';
import Testimonials from '../components/Testimonios'
import '../styles/Parrafos.css'


const Home = ({ products }) => {
  // Log products to ensure it is being passed properly
  console.log('Products in Home.js:', products);

  // Use a fallback if products is undefined or empty
  const carouselProducts = products && products.length > 0 ? products.slice(0, 10) : [];

  return (
    <div>

      {/* Banner 1 */}
      <div id="banner-1" class="d-block d-lg-flex align-items-center justify-content-center">
        <div class="col-12 col-md-8 col-lg-4">
          <h1 class="tit-ban-1 animate__animated animate__fadeInLeft">Fragrâncias para momentos especiais</h1>
        </div>
        <div id="container-imagen" class="d-flex col-12 col-md-12 col-lg-5 animate__animated animate__fadeInRight">
          <div class="d-flex col-lg-8 d-none d-sm-block">
            <img id="im-about-3" class="img-1 img-fluid invert" src="https://p0.pikist.com/photos/834/937/bottle-colors-flowers-glass-items-indoors-perfume-petals-roses-communication-text.jpg" alt=""/>
          </div>  
        </div>
        <div id="container-imagen-2" class="d-flex flex-column col-12 col-sm-6 col-lg-6 animate__animated animate__fadeInRight">
          <div class="col">
            <img id="im-about-4" class="img-2 img-fluid" src="https://p0.pikist.com/photos/96/901/still-life-roses-perfume-perfume-bottles-fragrance-rose-petals.jpg" alt=""/>
          </div>
          <div class="col">
            <p class="pt-4 p-ban-1">Algumas pessoas compram uma fragrância pela propaganda que foi feita dela, outras pelo belo frasco do produto e ainda outras escolhem a fragrância.</p>
          </div>
          <div class="col-10 col-sm-11 col-lg-12">
            <Link to='/loja' class="btn" id="bt-gr">
            CONSULTE MAIS INFORMAÇÕES
            </Link>
          </div>
        </div>
      </div>

      <Testimonials/>

      {/* Contato */}
      <div id="contact2" class="container-fluid d-none d-md-block  text-center">
        <div class="container">
          <div class="cont-box col-md-8 col-lg-6">
            <div class="row">
              <h2 class="card-title mb-2">Receba Ofertas Personalizadas</h2>
            </div>
            <div class="row">
              <p>Fique por dentro das novedades do nosso <a>Blog</a>, assim como outras trantas ofertas e novidades</p>
            </div>
            <div class="row">
              <input type="email" class="col-8 my-4" id="email" name="email" placeholder="usuario@contato.im"/>
                <button type="submit" class="btn col-3 my-4">Suscribir</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;