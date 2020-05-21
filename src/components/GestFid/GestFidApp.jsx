import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import WelcomeComponent from './Welcome/Welcome';
import ClientiComponent from './Clienti/Clienti';
import LoginComponent from './Login/LoginComponent';
import HeaderComponent from './Header/HeaderComponent';
import FooterComponent from './Footer/FooterComponent';

export default class GestFidApp extends Component {
    render() {
        return (
            <div className={GestFidApp}>                   
                <Router>
                    <HeaderComponent />
                    <Switch>
                        <Route path="/" exact component={LoginComponent} />
                        <Route path="/login" component={LoginComponent} />
                        <Route path="/welcome/:userid" component={WelcomeComponent} />
                        <Route path="/clienti" component={ClientiComponent} />
                        <Route component={ErrorComponent} />
                    </Switch>
                    <FooterComponent />                
                </Router>                           
            </div>
        );
    }
}

function ErrorComponent() {
    return <div>Errore. Pagina non trovata</div>
}