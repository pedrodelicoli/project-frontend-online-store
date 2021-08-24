import React from 'react';
import {
  Link } from 'react-router-dom';
import Products from './Products';

export default class App extends React.Component {
  render() {
    return (
      <div className="Index">
        <div className="Search">
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <Products />
        </div>
        <div className="CartButton">
          <Link data-testid="shopping-cart-button" to="/cart">
            <img src="https://i.pinimg.com/originals/15/4f/df/154fdf2f2759676a96e9aed653082276.png" alt="cart button" />
          </Link>
        </div>
      </div>
    );
  }
}
