import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import apiService from '../../../services/api.services';

class LogoutButton extends Component {
    constructor(props) {
        super(props)
        this.apiService = apiService
    }

    render() {
        return (
            <Button 
              variant="secondary"
              size="sm"
              onClick={this.apiService.logoutUser}>
                Logout
            </Button>
        )
    }
}

export default LogoutButton;