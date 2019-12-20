import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'

import ProductList from "./components/ProductList"
import BankSection from "./components/BankSection"

import OrderProductList from "./components/OrderProductList"

class App extends React.Component {
render(){
  return (
    <div className="App">
  <ProductList className="product-list"/>
  <BankSection />
  <OrderProductList/>
    </div>
  );
}
}
export default App;
