import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SalutiService from '../services/API/Saluti/Saluti';

export default class Welcome extends Component {

    state = {
        salutiMsg: ''
    }

    render() {
        return (
            <div className="WelcomeComponent">
                <section className="section-content bg padding-y">
                <header className="section-heading">
                    <h2 className="section-title">Benvenuti in GestFid</h2>
                </header>
                    
                <p>Saluti {this.props.match.params.userid}, clicca <Link to="/clienti">qui</Link>  per vedere i clienti disponibili</p>

                <button type="button" className="btn btn-primary" onClick={this.getSaluti}>Visualizza Saluti</button>

                <h3>{this.state.salutiMsg}</h3>
                </section>
            </div>
        );
    }

    getSaluti = () => {
        SalutiService.getSalutiDataParam(this.props.match.params.userid)
            .then(response => this.handleResponse(response))
            .catch(error => this.handleError(error));         
    };

    handleResponse = (response) => {
        this.setState(
            {
                salutiMsg: response.data
            }
        );
    }

    handleError = (error) => {
        console.log(error);
    }

}