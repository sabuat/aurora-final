import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SPREADSHEET_ID = '1Wk_gn4xTbjZkP9Hy0KQ6jRgtpfqna7n9Yt6FwEkWwdc';
const API_KEY = 'AIzaSyBHJLVC1Bkf1_DGwqkV0uRncaiP6k6bRfU'; // Replace with your API key
const RANGE = 'Sheet1!A1:G20'; // Replace with the range you want to read

const Loja = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`
        );

        const rows = response.data.values;
        if (!rows || rows.length < 2) {
          console.error('No data found in the specified range.');
          return;
        }

        const formattedProducts = rows.slice(1).map((row) => ({
          codigo: row[0],
          imagem: row[1],
          nome: row[2],
          descricao: row[3],
          preco: row[4],
          genero: row[5],
          tipo: row[6],
        }));

        setProducts(formattedProducts); // Save the products in state
      } catch (error) {
        console.error('Error fetching data from Google Sheets:', error);
      }
    };

    fetchData();
  }, []);

  const truncateDescription = (desc) => {
    return desc.length > 250 ? `${desc.slice(0, 250)}...` : desc;
  };

  return (
    <div className="container-fluid text-center mt-5 pt-5">
      <h1 className="tit-box-2 mt-5 mb-5 text-center">Nossos Produtos</h1>
      {products.length > 0 ? (
        <div className="row d-flex justify-content-center">
          {products.map((product, index) => (
            <div key={index} className="card my-3 mx-3 col-12 col-sm-6 col-md-4">
              <div>
                <img
                  src={product.imagem}
                  alt={product.nome}
                  className="col-3 my-2 w-75"
                  style={{ maxHeight: '20rem' }}
                />
              </div>
              <div id="card-text" className="card-body-loja p-3">
                <h4 className="col mb-2">{product.nome}</h4>
                <h2 className="col mb-2">{product.codigo}</h2>
                <p className="card-text-loja col pt-2">{truncateDescription(product.descricao)}</p>
                <h2 className="col pb-3">{product.preco}</h2>
                <a id="bt-gr" href="#" className="col btn">Saiba mais</a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
};

export default Loja;