import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Loja from './pages/Loja';
import Contato from './pages/Contato';
import Detalle from './components/DetallheProduto';
import Barra from './components/Barra';
import axios from 'axios';
import './App.css';

const SPREADSHEET_ID = '1Wk_gn4xTbjZkP9Hy0KQ6jRgtpfqna7n9Yt6FwEkWwdc'; // Your spreadsheet ID
const API_KEY = 'AIzaSyDQXf-qdhP5EG8kFLdZdLAUE4NE8zkQUnk'; // Your API key
const RANGE = 'Sheet1!A1:G50'; // Your range

function App() {
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

        setProducts(formattedProducts);
      } catch (error) {
        console.error('Error fetching data from Google Sheets:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <Barra />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/loja" element={<Loja products={products} />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/product/:id" element={<Detalle products={products} />} />
      </Routes>
    </Router>
  );
}

export default App;
