import React from 'react';
import Header from './Components/Header/header';
import Product from './Components/Product/Product';
import Bill from './Components/Bill/bill';
import './App.css';

const App = () => {

  return (
    <>
      <Header />
      <div className="container">
        <Product />
      </div>
      <Bill />
    </>
  )
}

export default App;
