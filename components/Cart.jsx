import React from 'react';
import {
  Link } from 'react-router-dom';

export default class Cart extends React.Component {
  render() {
    const productobj = localStorage.getItem('lista');
    const objeto = JSON.parse(productobj);
    const renderCart = (localStorage.getItem('lista') === null)
      ? (
        <h1 data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </h1>)
      : objeto.map((p) => (
        <div key={ p.id }>
          <h1
            data-testid="shopping-cart-product-name"
            key={ p.id }
          >
            {p.title}
          </h1>
          <h1 data-testid="shopping-cart-product-quantity">1</h1>
        </div>));
    return (
      <div className="Cart">
        <Link data-testid="shopping-cart-button" to="/cart">
          <img id="carrinho" src="https://i.pinimg.com/originals/15/4f/df/154fdf2f2759676a96e9aed653082276.png" alt="cart button" />
        </Link>
        { renderCart }
      </div>
    );
  }
}
