import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      comments: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, comments } = this.state;
    const { product, funcao } = this.props;
    const { id, title, price, thumbnail } = product;
    return (
      <aside className="container-details">
        <div className="details-product">
          <h1 data-testid="product-detail-name">{`${title} - valor $${price}`}</h1>
          <img src={ thumbnail } alt={ title } width="100px" />
        </div>
        <div className="specification">
          <button
            data-testid="product-detail-add-to-cart"
            id={ id }
            type="button"
            onClick={ funcao }
          >
            Comprar
          </button>
          <h3> Avaliações </h3>
          <form>
            <label htmlFor="email">
              <input
                type="text"
                name="email"
                id="email"
                onChange={ this.handleChange }
                value={ email }
              />
            </label>
            <label htmlFor="rating">
              Nota:
              <input
                type="number"
                id="rating"
                min="1"
                max="5"
                name="rating"
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="comments">
              <textarea
                data-testid="product-detail-evaluation"
                name="comments"
                type="textarea"
                value={ comments }
                id="comments"
                onChange={ this.handleChange }
              />
            </label>
            <input
              type="button"
              value="avaliar"
            />
          </form>
        </div>
      </aside>
    );
  }
}

ProductDetails.propTypes = {
  product: PropTypes.object,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
  title: PropTypes.string,
}.isRequired;
