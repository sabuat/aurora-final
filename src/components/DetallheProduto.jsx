import React from 'react';
import { useParams } from 'react-router-dom';

const Detalle = ({ products }) => {
  const { id } = useParams();
  const product = products.find((prod) => prod.codigo === id);

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="container mt-5">
      <h1>{product.nome}</h1>
      <img src={product.imagem} alt={product.nome} className="img-fluid" />
      <p>{product.descricao}</p>
      <h2>Price: {product.preco}</h2>
    </div>
  );
};

export default Detalle;
