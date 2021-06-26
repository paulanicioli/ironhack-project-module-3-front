import React, { Component } from 'react';

import './styles.css';

class Testimonial extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="testimonial-container">
        <div>
          <img
            className="testimonial-picture"
            src={this.props.imageUrl}
            alt={this.props.name}
          />
          <div>
            <h4>{this.props.name}</h4>
            <h6>{this.props.role}</h6>
          </div>
        </div>
        <p>"{this.props.quote}"</p>
      </div>
    );
  }
}

export default Testimonial;
