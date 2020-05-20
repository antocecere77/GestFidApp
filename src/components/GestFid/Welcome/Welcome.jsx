import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Welcome extends Component {
    render() {
        return (
            <div className="WelcomeComponent">
                <p>Benvenuti in GestFid</p>
                <p>Saluti {this.props.match.params.userid}, clicca <Link to="/clienti">qui</Link> per vedere i clienti disponibili</p>
            </div>
        );
    }
}