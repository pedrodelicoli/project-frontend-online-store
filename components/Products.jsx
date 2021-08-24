import React, { Component } from 'react';
import { Redirect } from 'react-router';
import * as api from '../services/api';
import Category from './Category';
import ProductDetails from './ProductDetails';

export default class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      query: '',
      category: '',
      details: false,
      idDetails: '',
      CartItems: [],
      redirect: false,
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.Products = this.Products.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleLiClick = this.handleLiClick.bind(this);
    this.handleCard = this.handleCard.bind(this);
    this.handleBuy = this.handleBuy.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
  }

  componentDidUpdate() {
    const { CartItems } = this.state;
    localStorage.setItem('lista', JSON.stringify(CartItems));
  }

  handleCard({ target }) {
    this.setState({ details: true, idDetails: target.id });
  }

  handleOnChange(e) {
    this.setState({ query: e.target.value });
  }

  handleBuy({ target }) {
    const { products, CartItems } = this.state;
    const productId = products
      .find((product) => product.id === target.id);
    this.setState({ CartItems: [...CartItems, productId] });
    this.handleRedirect();
  }

  handleRedirect() {
    this.setState({
      redirect: true,
    });
  }

  async handleLiClick(e) {
    const { query, category } = this.state;
    await this.setState({ category: e.target.id, query: '' });
    this.Products(category, query);
  }

  handleOnClick() {
    const { query, category } = this.state;
    this.Products(category, query);
  }

  async Products() {
    const { query, category } = this.state;
    await api.getProductsFromCategoryAndQuery(category, query)
      .then((products) => { this.setState({ products: products.results }); });
  }

  render() {
    const { products, details, idDetails, redirect } = this.state;
    const productId = products.find((product) => product.id === idDetails);
    const renderProductId = (details) ? (<ProductDetails
      product={ productId }
      funcao={ this.handleBuy }
    />) : undefined;

    if (redirect) {
      return <Redirect to="/cart" />;
    }

    return (
      <div>
        <Category onClick={ this.handleLiClick } />
        <div className="Products">
          <input
            type="text"
            name=""
            id=""
            onChange={ this.handleOnChange }
            data-testid="query-input"
          />
          <button
            type="button"
            onClick={ this.handleOnClick }
            data-testid="query-button"
          >
            Pesquisar
          </button>
          <h1>Produtos</h1>
          <div>
            { renderProductId }
            { products.map((product) => (
              <div className="Product" key={ product.id } data-testid="product">
                <h3>{ product.title }</h3>
                <img
                  alt={ product.id }
                  src={ product.thumbnail }
                />
                <p>{ product.price }</p>
                <button
                  data-testid="product-detail-link"
                  id={ product.id }
                  type="button"
                  onClick={ this.handleCard }
                >
                  Detalhes
                </button>
                <button
                  data-testid="product-add-to-cart"
                  id={ product.id }
                  type="button"
                  onClick={ this.handleBuy }
                >
                  Comprar
                </button>
              </div>))}
          </div>
        </div>
      </div>
    );
  }
}
