import './App.css';

import React, { useState } from 'react';

import Header from './components/Header';
import ProductList from './components/ProductList';

function App() {

  //Products initial array
  const [products, setProducts] = useState([
    {
      code: 10,
      name: "Smart TV Led 50 Semp",
      description:
        "SK8300 4K HDR Android Wi-Fi 3 HDMI 2 USB Controle Remoto com atalhos Chromecast Integrado",
      price: 2299.99,
      discount: 190.99,
    },
    {
      code: 11,
      name: "Smartphone Samsung Galaxy A72 128GB",
      description:
        "4G Wi-Fi Tela 6.7 Dual Chip 6GB RAM Câmera Quádrupla + Selfie 32MP - Preto",
      price: 1988.4,
      discount: 87.89,
    },
    {
      code: 12,
      name: "Smartwatch Samsung Galaxy Watch Active",
      description:
        "4O Galaxy Watch Active é o smartwatch ideal para quem tem um estilo de vida ativo e saudável. Ele é leve, confortável e monitora diariamente suas atividades físicas, e os comportamentos de nível de stress e sono",
      price: 678.6,
      discount: 110.19,
    },
  ]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0)

  const handleClick = (productCode) => {
    const checkProduct = currentSale.some((product) => product.code === productCode);
    if (checkProduct === false) {
      const productFind = products.find((product) => product.code === productCode);
      setCurrentSale([...currentSale, productFind]);
    }
  };

  const showProducts = (searchInput) => {
    const searchFiltered  = products.filter((product) =>(
      product.name.toLowerCase().includes(searchInput.toLowerCase())
      ));
    setFilteredProducts(searchFiltered);
    console.log(searchFiltered)
  };
  
  return (
    <div className="App">
      <Header setFilteredProducts={setFilteredProducts} showProducts={showProducts}/>
      <ProductList products={products} handleClick={handleClick} filteredProducts={filteredProducts}/>
    </div>
  );
}

export default App;
