import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Generador = () => {
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

        const headers = rows[0]; // Assuming the first row contains the headers
        const products = rows.slice(1).map((row) => {
          return {
            codigo: parseInt(row[0]),
            imagem: row[1],
            nome: row[2],
            descricao: parseFloat(row[3]),
            preco: row[4],
            genero: row[5],
            tipo: row[6],
          };
        });

        console.log('Products Data:', products);

        // Create and download the JavaScript file
        writeDataToFile(products);
      } catch (error) {
        console.error('Error fetching data from Google Sheets:', error);
      }
    };

    fetchData();
  }, []);

  const writeDataToFile = (products) => {
    const fileContent = `const products = ${JSON.stringify(products, null, 2)};\n\nexport default products;`;
    const blob = new Blob([fileContent], { type: 'text/javascript' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'dados.js'; // Name of the file to download
    link.click();
  };

  return (
    <div>
      <h1>Generating Products File</h1>
      <p>Check your downloads for the products.js file!</p>
    </div>
  );
};

export default Generador;
