import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SalutiService from '../services/API/Saluti/Saluti';

export default class Welcome extends Component {
    render() {
        return (
            <div className="WelcomeComponent">
                <section className="section-content bg padding-y">
                <header className="section-heading">
                    <h2 className="section-title">Benvenuti in GestFid</h2>
                </header>
                    
                <p>Saluti {this.props.match.params.userid}, clicca <Link to="/clienti">qui</Link>  per vedere i clienti disponibili</p>

                <button type="button" className="btn btn-primary" onClick={this.getSaluti}>Visualizza Saluti</button>
                </section>
            </div>
        );
    }

    getSaluti = () => {
        SalutiService.getSaluti()
            .then(response => console.log(response));         
    };

}