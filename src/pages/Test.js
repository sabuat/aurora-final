import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SPREADSHEET_ID = '1Wk_gn4xTbjZkP9Hy0KQ6jRgtpfqna7n9Yt6FwEkWwdc';
const API_KEY = 'AIzaSyBHJLVC1Bkf1_DGwqkV0uRncaiP6k6bRfU'; // Replace with your API key
const RANGE = 'Sheet1!A1:G4'; // Replace with the range you want to read

const ReadGoogleSheet = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`
        );
        console.log('API Response:', response.data); // Log the response for debugging
        setData(response.data.values); // Assuming data.values contains the rows
      } catch (error) {
        console.error('Error fetching data from Google Sheets:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Google Sheets Data</h1>
      <table>
        <thead>
          <tr>
            {data[0]?.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.slice(1).map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Generador/>
    </div>
  );
};

export default ReadGoogleSheet;

