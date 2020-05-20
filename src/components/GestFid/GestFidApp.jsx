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

    state = {
        userId: 'Antonio',
        password: ''
    }

    render() {
        return (
            <div>
               Nome Utente: <input type="text" name="user" value={this.state.userId} onChange={this.gestModUser} />
               Password: <input type="password" name="password" value={this.state.password} onChange={this.gestModPassword}/>
               <button onClick={this.login}>Accedi</button>
            </div>
        );
    }

    login = () => {
        console.log(this.state.userId);
        console.log(this.state.password);
    }

    gestModUser = (event) => {
        this.setState({
            userId: event.target.value
        });
    }

    gestModPassword = (event) => {
        this.setState({
            password: event.target.value
        });
    }
}