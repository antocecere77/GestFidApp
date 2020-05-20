import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import WelcomeComponent from './Welcome/Welcome';
import ClientiComponent from './Clienti/Clienti';
import LoginComponent from './Login/LoginComponent';

export default class GestFidApp extends Component {
    render() {
        return (
            <div className={GestFidApp}>     
                <Router>
                    <Switch>
                        <Route path="/" exact component={LoginComponent} />
                        <Route path="/login" component={LoginComponent} />
                        <Route path="/welcome/:userid" component={WelcomeComponent} />
                        <Route path="/clienti" component={ClientiComponent} />
                        <Route component={ErrorComponent} />
                    </Switch>
                </Router>                           
            </div>
        );
    }
}

function ErrorComponent() {
    return <div>Errore. Pagina non trovata</div>
}