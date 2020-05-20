import React, { Component } from 'react';
import Bottone from './Bottone';
import './Contatore.css'

class contatore extends Component {

    state = {
        contatore: 0
    }

    render() {
        return (
            <div className="Contatore">
                <Bottone modifica={this.incrementa.bind(this, 1)} decrementa={this.decrementa.bind(this, 1)} valore={1}></Bottone>
                <Bottone modifica={this.incrementa.bind(this, 5)} decrementa={this.decrementa.bind(this, 5)} valore={5}></Bottone>
                <Bottone modifica={this.incrementa.bind(this, 10)} decrementa={this.decrementa.bind(this, 10)} valore={10}></Bottone>
                <span className="valore">{this.state.contatore}</span>
                <div>
                    <button onClick={this.reset}>Reset</button>
                </div>
            </div>
        )
    }

    reset = () => {
        this.setState(
            (prevState) =>
            {
                return {contatore: 0}
            }
        )
    }

    incrementa = (valore) => {
        console.log("Hai Cliccato il bottone");

        this.setState(
            (prevState) =>
            {
                return {contatore: prevState.contatore + valore}
            }
        )
    }

    decrementa = (valore) => {
        console.log("Diminuisco il valore");

        this.setState(
            (prevState) =>
            {
                return {contatore: prevState.contatore - valore}
            }
        )
    }
}

export default contatore;