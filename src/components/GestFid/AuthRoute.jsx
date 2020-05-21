import React, { Component } from 'react';
import AuthenticationService from './services/authservice';
import { Route, Redirect } from 'react-router-dom';

export default class AuthRoute extends Component {

    render() {
        if(AuthenticationService.isLogged()) {
            return <Route {...this.props} />
        } else {
            return <Redirect to="/login" />
        }
    }

}