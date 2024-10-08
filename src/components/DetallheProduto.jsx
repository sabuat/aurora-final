import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Iframe2 from './Iframe';

const Detalle = ({ products }) => {
  const { id } = useParams();
  const product = products.find((prod) => prod.codigo === id);

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="container mt-5 pt-5">
      <div className="row mt-5">
        <div className="col-md-2"></div>
        <div className="col-md-4">
          <Iframe2 imagen={product.imagem}/>
        </div>
        <div className="col-md-4 d-flex flex-column justify-content-center">
          <h2 className="mb-4">{product.nome}</h2>
          <h4 className="text-muted mb-5">{product.codigo}</h4>
          <p className="mb-5">{product.descricao}</p>
          <h4 className="text-muted text-center mb-3">{product.preco}</h4>
          <div className="d-flex justify-content-center mb-5">
          <Link id="btn-prod-2" to="https://wa.me/5511993201566">
            Comprar agora
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detalle;
