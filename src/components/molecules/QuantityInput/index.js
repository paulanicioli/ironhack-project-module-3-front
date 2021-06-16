import React, { Component } from 'react';

import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

import './styles.css';

class QuantityInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
  }

  addQuantity = async () => {
    await this.setState({ quantity: this.state.quantity + 1 });
    this.handleChange();
  };

  reduceQuantity = async () => {
    await this.setState({ quantity: Math.max(0, this.state.quantity - 1) });
    this.handleChange();
  };

  handleChange = () => {
    this.props.getQuantity(this.state.quantity);
  };

  render() {
    return (
      <>
        <h6>Quantidade a ser adicionada no carrinho:</h6>
        <div className="quantity-input">
          <InputGroup size="lg">
            <InputGroup.Prepend>
              <Button
                variant="outline-secondary"
                size="lg"
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
                size="lg"
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
