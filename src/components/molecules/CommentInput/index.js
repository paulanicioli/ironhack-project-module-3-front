import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

class CommentInput extends Component {
  constructor(props) {
    super(props);
    this.state = { comment: '' };
  }

  handleChange = async (e) => {
    await this.setState({ comment: e.target.value });
    this.props.getComment(this.state.comment);
  };

  render() {
    return (
      <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Comentário ou pedido ao restaurante:</Form.Label>
          <Form.Control
            as="textarea"
            name="comment"
            rows={3}
            defaultValue={this.state.comment}
            onChange={this.handleChange}
          />
        </Form.Group>
      </Form>
    );
  }
}

export default CommentInput;
