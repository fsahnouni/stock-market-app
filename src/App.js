import logo from './logo.svg';
import './App.css';


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StockInfo from './Components/StockInfo';

function App() {
  const [stockData, setStockData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://api.marketstack.com/v1/eod?access_key=745e981c5b38d30700cfad03eec01af8&symbols=AAPL');
      console.log(result.data.data);
      setStockData(result.data.data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Stock Market Info</h1>
      {stockData && <StockInfo stockData={stockData} />}
    </div>
  );
}

export default App;

