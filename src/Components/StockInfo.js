import React from 'react';

function StockInfo({ stockData }) {
  return (
    <div>
      <h2>{stockData.symbol}</h2>
      <p>Price: ${stockData.price}</p>
    </div>
  );
}

export default StockInfo;
