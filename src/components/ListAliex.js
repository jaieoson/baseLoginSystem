import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';

const AliexpressProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://api.aliexpress.com/v1/products')
      .then(response => {
        setProducts(response.data.products);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  const handleExport = () => {
    const data = products.map(product => [product.name, product.price, product.rating]);
    const csv = data.join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    saveAs(blob, 'products.csv');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <h1>Aliexpress Products</h1>
      <button onClick={handleExport}>Export Data</button>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>{product.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AliexpressProductList;
