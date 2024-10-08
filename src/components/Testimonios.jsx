import React from 'react';
import Michi from '../images/Profile/michi.png';
import Astrid from '../images/Profile/astrid.png';
import Ada from '../images/Profile/ada.png'


const Testimonials = () => {
  return (
    <div id="container-float">
      <div className="container-fluid">
        <h1 className="tit-box my-2 text-center">Testemunhas</h1>
        <br />
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
          <div className="carousel-inner">
            {/* Carousel Item 1 */}
            <div className="carousel-item active" data-bs-interval="5000">
              <div id="card-test" className="d-flex position-relative flex-column flex-lg-row">
                <div className="box-test conteudo row">
                  {/* Profile Image */}
                  <div className="img-tit col-12 col-lg-4 pt-3 text-center">
                    <img
                      src={Michi}
                      className="prof-img img-thumbnail w-75"
                      alt="..."
                    />
                  </div>
                  {/* Testimonial Text */}
                  <div className="col-12 col-lg-6 mt-3 mt-lg-0">
                    <p className="m-2 tit-ban-2">Excelente serviço</p>
                    <p className="p-ban-2">
                      "Comprar na Aurora Perfumaria foi uma experiência maravilhosa! A seleção de perfumes é incrível e as descrições dos produtos me ajudaram a escolher exatamente o que eu queria..."
                    </p>
                    <a href="#" className="link-test">@susej.urbina</a>
                  </div>
                </div>
              </div>
            </div>
            {/* Carousel Item 2 */}
            <div className="carousel-item" data-bs-interval="5000">
              <div id="card-test" className="d-flex position-relative flex-column flex-lg-row">
                <div className="box-test conteudo row">
                  {/* Profile Image */}
                  <div className="img-tit col-12 col-lg-4 pt-3 text-center">
                    <img
                      src={Ada}
                      className="prof-img img-thumbnail w-75"
                      alt="..."
                    />
                  </div>
                  {/* Testimonial Text */}
                  <div className="col-12 col-lg-6 mt-3 mt-lg-0">
                    <p className="m-2 tit-ban-2">Experiencia maravilhosa</p>
                    <p className="p-ban-2">
                      "Eu amo perfumes e sempre estou à procura de novas fragrâncias. Na Aurora, encontrei marcas exclusivas..."
                    </p>
                    <a href="#" className="link-test">@adaluz.lara</a>
                  </div>
                </div>
              </div>
            </div>
            {/* Carousel Item 3 */}
            <div className="carousel-item" data-bs-interval="5000">
              <div id="card-test" className="d-flex position-relative flex-column flex-lg-row">
                <div className="box-test conteudo row">
                  {/* Profile Image */}
                  <div className="img-tit col-12 col-lg-4 pt-3 text-center">
                    <img
                      src={Astrid}
                      className="prof-img img-thumbnail w-75"
                      alt="..."
                    />
                  </div>
                  {/* Testimonial Text */}
                  <div className="col-12 col-lg-6 mt-3 mt-lg-0">
                    <p className="m-2 tit-ban-2">Vale a pena voltar</p>
                    <p className="p-ban-2">
                      "Fiquei muito satisfeita com a minha experiência de compra na Aurora. O site oferece uma variedade enorme de perfumes e as informações detalhadas..."
                    </p>
                    <a href="#" className="link-test">@astrid_urbina_villarroel</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Carousel Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
