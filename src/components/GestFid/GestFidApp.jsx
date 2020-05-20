import React, { Component } from 'react';

export default class GestFidApp extends Component {
    render() {
        return (
            <div className={GestFidApp}>
                <p>Accedi alla App GestFid</p>
                <LoginComponent />
            </div>
        );
    }
}

class LoginComponent extends Component {
    render() {
        return (
            <div>
               Nome Utente: <input type="text" name="user"/>
               Password: <input type="password" name="password"/>
               <button>Accedi</button>
            </div>
        );
    }
}