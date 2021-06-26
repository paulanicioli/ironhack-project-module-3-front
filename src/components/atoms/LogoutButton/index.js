import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import apiService from '../../../services/api.services';

class LogoutButton extends Component {
    constructor(props) {
        super(props)
        this.apiService = apiService
    }

    cleanUser = async () => {
        await this.apiService.logoutUser();

        this.props.updateUserState({ isUserLogged: false, role: '' })
    }

    render() {
        return (
            <Button id="nav-logout-btn"
              variant="outline-secondary"
              size="sm"
              onClick={this.cleanUser}>
                Logout
            </Button>
        )
    }
}

export default LogoutButton;