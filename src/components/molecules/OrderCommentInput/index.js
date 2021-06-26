import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

import { PencilSquare } from 'react-bootstrap-icons';
import { CheckCircleFill } from 'react-bootstrap-icons';

import './styles.css';
class CommentInput extends Component {
  constructor(props) {
    super(props);
    this.state = { comment: this.findProductInLocalStorage(), editing: false };
  }

  findProductInLocalStorage() {
    const currentOrder = localStorage.getItem('order');
    if (currentOrder) {
      const orderArray = JSON.parse(currentOrder);
      const productInArray = orderArray.find((element) => {
        return element.product == this.props.product._id;
      });
      if (productInArray) {
        return productInArray.comment;
      }
    }
    return '';
  }

  async componentDidMount() {
    await this.setState({
      comment: this.findProductInLocalStorage(),
      editing: this.state.editing,
    });
    this.props.getComment(this.state.comment);
  }

  handleChange = async (e) => {
    await this.setState({
      comment: e.target.value,
      editing: this.state.editing,
    });
    this.props.getComment(this.state.comment);
  };

  renderCommentBox() {
    if (this.state.editing) {
      return (
        <div className="order-comment-container">
          <Form>
            <Form.Group controlId={this.props.product._id}>
              <Form.Control
                key={this.props.product._id}
                as="textarea"
                size="sm"
                rows={2}
                name="comment"
                defaultValue={this.state.comment}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form>
          <CheckCircleFill
            size={20}
            onClick={() =>
              this.setState({ comment: this.state.comment, editing: false })
            }
          />
        </div>
      );
    }
    return (
      <div className="order-comment-container">
        <h6>
          {this.state.comment
            ? `Comentário:  ${this.state.comment} `
            : 'Nenhum comentário adicionado '}
          <span>
          <PencilSquare
            size={15}
            onClick={() =>
              this.setState({ comment: this.state.comment, editing: true })
            }
          />
          </span>
        </h6>
        
      </div>
    );
  }

  render() {
    return <>{this.renderCommentBox()}</>;
  }
}

export default CommentInput;
