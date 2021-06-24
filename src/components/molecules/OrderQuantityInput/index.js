import React, { Component } from 'react';

import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

import './styles.css';

class QuantityInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: this.findProductInLocalStorage(),
    };
  }

  findProductInLocalStorage() {
    const currentOrder = localStorage.getItem('order');
    if (currentOrder) {
      const orderArray = JSON.parse(currentOrder);
      const productInArray = orderArray.find((element) => {
        return element.product == this.props.product._id;
      });
      if (productInArray) {
        return productInArray.quantity;
      }
    }
    return 1;
  }

  async componentDidMount() {
    await this.setState({ quantity: this.findProductInLocalStorage() });
    this.props.getQuantity(this.state.quantity);
  }

  addQuantity = async () => {
    await this.setState({ quantity: this.state.quantity + 1 });
    this.handleChange();
  };

  reduceQuantity = async () => {
    await this.setState({ quantity: Math.max(1, this.state.quantity - 1) });
    this.handleChange();
  };

  handleChange = () => {
    this.props.getQuantity(this.state.quantity);
  };

  render() {
    return (
      <>
        <div className="order-quantity-input">
          <InputGroup size="sm">
            <InputGroup.Prepend>
              <Button
                variant="outline-secondary"
                size="sm"
                onClick={this.reduceQuantity}
              >
                -
              </Button>
            </InputGroup.Prepend>
            <FormControl
              type="number"
              onChange={this.handleChange}
              value={this.state.quantity}
              className="current-quantity"
            />
            <InputGroup.Append>
              <Button
                variant="outline-secondary"
                size="sm"
                onClick={this.addQuantity}
              >
                +
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </div>
      </>
    );
  }
}

export default QuantityInput;
