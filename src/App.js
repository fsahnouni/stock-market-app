import logo from './logo.svg';
import './App.css';


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StockInfo from './Components/StockInfo';

function App() {
  const [aaplData, setaaplData] = useState(null);
  const [msftData, setmsftData] = useState(null);
  const [nvdaData, setnvdaData] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      const aapl = await axios.get('http://api.marketstack.com/v1/eod?access_key=745e981c5b38d30700cfad03eec01af8&symbols=AAPL');
      setaaplData(aapl.data.data);
      const msft = await axios.get('http://api.marketstack.com/v1/eod?access_key=745e981c5b38d30700cfad03eec01af8&symbols=MSFT');
      setmsftData(msft.data.data); 
      const nvda = await axios.get('http://api.marketstack.com/v1/eod?access_key=745e981c5b38d30700cfad03eec01af8&symbols=NVDA');
      setnvdaData(nvda.data.data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Stock Market Info</h1>
      {aaplData && <StockInfo stockData={aaplData} />}
      <br />
      {msftData && <StockInfo stockData={msftData} />}
      <br />
      {nvdaData && <StockInfo stockData={nvdaData} />}

    </div>
  );
}

export default App;

