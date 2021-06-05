import React, { Component } from 'react';
import MenuItem from '../../molecules/MenuItem';

class ProductCategoryContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.products);
    return (
      <div>
        {this.props.products
          ? this.props.products.map((element) => {
              return <MenuItem product={element} />;
            })
          : ''}
      </div>
    );
  }
}

export default ProductCategoryContainer;
