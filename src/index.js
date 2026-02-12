import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './FrontEnd/Pages/home';
import Terminal from './FrontEnd/Pages/terminal';
import Products from './FrontEnd/Components/products';
import Buyers from './FrontEnd/Components/buyers';
import { BuyerProvider } from "./FrontEnd/context/BuyerContext"
import { ProductProvider } from './FrontEnd/context/ProductContext';
import { OrcamentoProvider } from './FrontEnd/context/OrcamentoContext';
import Orcamento from './FrontEnd/Components/orcamento';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BuyerProvider>
    <ProductProvider>
    <OrcamentoProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path="/terminal" Component={Terminal}/>
        <Route path="/products" Component={Products}/>
        <Route path="/buyers" Component={Buyers}/>
        <Route path="/orcamento" Component={Orcamento}/>
      </Routes>
    </BrowserRouter>
    </OrcamentoProvider>
    </ProductProvider>
    </BuyerProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
