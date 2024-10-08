import React from 'react';
import { Link } from 'react-router-dom';
import Iframe from '../components/Iframe';

const Loja = ({ products }) => {
  const truncateDescription = (desc) => {
    return desc.length > 250 ? `${desc.slice(0, 250)}...` : desc;
  };

  return (
    <div className="container-fluid text-center mt-5 pt-5">
      <h1 className="h1 h3-sm tit-box-2 mt-5 mb-5 text-center">Nossos Produtos</h1>
      {products.length > 0 ? (
        <div className="row d-flex justify-content-center">
          {products.map((product, index) => (
            <div
              key={index}
              className="card my-3 mx-3 col-12 col-sm-12 col-md-4 col-xl-3"
            >
              <div className="col-3 my-2 w-75" style={{ maxHeight: '20rem' }}>
                <Iframe imagen={product.imagem} />
              </div>
              <div id="card-text" className="card-body-loja p-3 mb-3">
                <h3 className="col mb-2 prod-text-loja">{product.nome}</h3>
                <h6 className="col mb-2">{product.codigo}</h6>
                {/* <p className="card-text-loja col pt-2">
                  {truncateDescription(product.descricao)}
                </p> */}
                <h3 className="col pb-3">{product.preco}</h3>
                <Link id="btn-prod" to={`/product/${product.codigo}`}>
                  Saiba mais
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Carregando Produtos...</p>
      )}
    </div>
  );
};

export default Loja;
