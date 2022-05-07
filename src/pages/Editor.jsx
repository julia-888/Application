import React from 'react';
import Header from '../components/Header';
import Product from '../components/Product';
import '../styles/App.css';

function Editor() {
  return (
    <div className="Editor">
      <Header />
      <Product />
      <Product />
      <Product />
      <Product />

    </div>
  );
}

export default Editor;