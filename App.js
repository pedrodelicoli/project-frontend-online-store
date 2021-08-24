import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Index from './components/Index';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route exact path="/">
          <Index />
        </Route>
        <Route exact path="/ProductDetails">
          <ProductDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
