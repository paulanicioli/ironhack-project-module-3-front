import React, { Component } from 'react';

import Badge from 'react-bootstrap/Badge';

import './styles.css';

class OrderDetail extends Component {
  constructor(props) {
    super(props);
  }

  formatPrice(price) {
    return 'R$' + price.toFixed(2).replace('.', ',');
  }

  renderAllProducts() {
    return (
      <div>
        {this.props.order.products.map((element, index) => {
          return (
            <div className="specific-order-container">
              <small>
                {element.name} {' x'} {this.props.order.quantities[index]}
              </small>
            </div>
          );
        })}
      </div>
    );
  }

  showStatus() {
    if (this.props.order.completed) {
      return (
        <Badge pill className="badge-gray-background ">
          Concluído
        </Badge>
      );
    } else {
      return (
        <Badge pill className="badge-yellow-background ">
          Em progresso
        </Badge>
      );
    }
  }

  render() {
    return (
      <div className="order-container">
        <div>
          <h4>{this.props.order.business.name}</h4>
          <small>
            {new Date(this.props.order.createdAt).toLocaleDateString('pt-BR')}{' '}
            {new Date(this.props.order.createdAt).toLocaleTimeString('pt-BR', {
              timeStyle: 'short',
            })}
          </small>
        </div>
        <div className="order-details">
          {this.renderAllProducts()}
          <div>
            <h6>Total: {this.formatPrice(this.props.order.totalPrice)}</h6>
            {this.showStatus()}
          </div>
        </div>
      </div>
    );
  }
}

export default OrderDetail;
