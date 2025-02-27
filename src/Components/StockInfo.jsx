import React from 'react';

function StockInfo({ stockData }) {
  return (
  
      
<div>
{/*stockData.map((stock, index) => (
  <div key={index}>
    <h2>{stock.symbol}</h2>
    <p>{stock.adj_close}</p>
  </div>
))*/}
<h2>{stockData[0].symbol}</h2>
<p>Open: {stockData[0].adj_open}</p>
<p>Close: {stockData[0].adj_close}</p>
<p>High: {stockData[0].adj_high}</p>
</div>

  
  );
}

export default StockInfo;
