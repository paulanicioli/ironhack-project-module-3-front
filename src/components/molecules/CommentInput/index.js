import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

class CommentInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Comentário ou pedido ao restaurante:</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
    );
  }
}

export default CommentInput;
