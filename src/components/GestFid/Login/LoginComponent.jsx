import React, { Component } from 'react';
import './LoginComponent.css';

export default class LoginComponent extends Component {

    state = {
        userId: '',
        password: '',
        isLogged: false,
        noLogged: false
    }

    render() {
        return (
            <div className="LoginComponent">
            <section className="section-content bg padding-y">
                <div className="container login-container">
                    <div className="row">
                        <div className="col-md-6 login-form">
                            <h3>Accesso a GestFid</h3>
                            <div className="form-group">
                                <input type="text" className="form-control"  name="userId" placeholder="Nome Utente" 
                                    value={this.state.userid} onChange={this.gestMod} />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control"  name="password" placeholder="Password" 
                                    value={this.state.password} onChange={this.gestMod} />
                            </div>
                            <div className="form-group">
                                <button className="btnSubmit" onClick={this.login}>Connetti</button>
                            </div>
                            <div className="form-group">
                                    <a href="#" className="ForgetPwd">Password Dimenticata?</a>
                            </div>
                            <ConnexKoMsg isNoLogged={this.state.noLogged}  /> 
                        </div>
                    </div>
                </div>
            </section>
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
            this.props.history.push(`/welcome/${this.state.userId}`); 
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

function ConnexKoMsg(props) {
    if (props.isNoLogged) {
        return <div class="alert alert-danger" role="alert">Spiacente la userid e/o la password sono errate!</div>
    }
    return null;
}