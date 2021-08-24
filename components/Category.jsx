import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

export default class Category extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.Category();
  }

  Category() {
    api.getCategories().then((categories) => { this.setState({ categories }); });
  }

  render() {
    const { categories } = this.state;
    const { onClick } = this.props;
    // console.log(categories);
    return (
      <div className="Category">
        { categories.map((c) => (
          <option
            data-testid="category"
            onClick={ onClick }
            id={ c.id }
            key={ c.id }
          >
            {c.name}

          </option>))}
      </div>
    );
  }
}

Category.propTypes = {
  onClick: PropTypes.func.isRequired,
};

// { categories.map((c) => (
// <li data-testid="category" key={ c.id }><button type="button" onClick={ onClick }>{c.name}</button></li>))}
