import React, { Component } from 'react';
import Cliente from './Clienti';

export default class Fidelity extends Component {
    state = {
        clienti: [
            {nome: 'Nicola La Rocca', bollini: '1580', data: '02/01/2020'},
            {nome: 'Mario Bianchi', bollini: '830', data: '23/12/2019'},
            {nome: 'Lucia La Rocca', bollini: '140', data: '15/01/2020'},
            {nome: 'Giuseppe Garibaldi', bollini: '560', data: '18/01/2020'},
        ] 
    }

    modificaDati = (Bollini) => {
        console.log("Hai cliccato il tasto");

        this.setState(
            {
                clienti: [
                    {nome: 'Nicola La Rocca', bollini: Bollini, data: '15/01/2020'},
                    {nome: 'Mario Bianchi', bollini: '830', data: '23/12/2019'},
                    {nome: 'Lucia La Rocca', bollini: '140', data: '15/01/2020'},
                    {nome: 'Giuseppe Garibaldi', bollini: '0', data: '20/01/2020'},
                ] 
            }
        )
    }

    modificaDati2 = (event) => {

        this.setState(
            {
                clienti: [
                    {nome: 'Nicola La Rocca', bollini: '1500', data: '15/01/2020'},
                    {nome: event.target.value, bollini: '830', data: '23/12/2019'},
                    {nome: 'Lucia La Rocca', bollini: '140', data: '15/01/2020'},
                    {nome: 'Giuseppe Garibaldi', bollini: '0', data: '20/01/2020'},
                ] 
            }
        )
    }

    render() {
        return (
            <div>
                <Cliente modifica={this.modificaDati.bind(this, '1000')}  nome={this.state.clienti[0].nome} bollini={this.state.clienti[0].bollini} data={this.state.clienti[0].data}></Cliente>
                <Cliente modificaNome={this.modificaDati2} nome={this.state.clienti[1].nome} bollini={this.state.clienti[1].bollini} data={this.state.clienti[1].data}>Prova</Cliente>
                <Cliente nome={this.state.clienti[2].nome} bollini={this.state.clienti[2].bollini} data={this.state.clienti[2].data}></Cliente>
                <Cliente  nome={this.state.clienti[3].nome} bollini={this.state.clienti[3].bollini} data={this.state.clienti[3].data}>Premio Ritirato</Cliente>
                <button onClick={this.modificaDati.bind(this, '2000')}>Modifica</button>
            </div>
        )
    }
}