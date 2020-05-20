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
        userId: '',
        password: '',
        isLogged: false,
        noLogged: false
    }

    render() {
        return (
            <div>
               Nome Utente: <input type="text" name="userId" value={this.state.userId} onChange={this.gestMod} />
               Password: <input type="password" name="password" value={this.state.password} onChange={this.gestMod}/>
               <button onClick={this.login}>Accedi</button>
               <ConnexOkMsg isLogged={this.state.isLogged}/>
               <ConnexKoMsg noLogged={this.state.noLogged} />
            </div>
        );
    }

    login = () => {
        console.log(this.state.userId);
        console.log(this.state.password);
        if(this.state.userId === 'antonio' && this.state.password === '123456') {
            this.setState({
                isLogged: true,
                noLogged: false
            });
        } else {
            this.setState({
                isLogged: false,
                noLogged: true
            });
        }
    }

    gestMod = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }    
}

function ConnexOkMsg(props) {
    if(props.isLogged) {
        return <div><h3>Connessione eseguita con successo</h3></div>
    } 
    return null;
}

function ConnexKoMsg(props) {
    if(props.noLogged) {
        return <div><h3>Connessione fallita</h3></div>
    } 
    return null;
}