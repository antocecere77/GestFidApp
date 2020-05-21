import React, { Component } from 'react';
import './HeaderComponent.css';

export default class HeaderComponent extends Component {

    render() {
        return ( 
            <div className="HeaderComponent">
                <header class="section-header">
                    <section class="header-main border-bottom">
                        <div class="container">
                            <div class="row align-items-center">
                                
                                <div class="col-lg-3 col-sm-4 col-md-4 col-5">
                                    <a href="#" class="brand-wrap">
                                        <img class="logo" src={`../logo.png`} />
                                    </a>
                                </div>
                                
                                <Search></Search>
                                <User></User>
                            </div>
                        </div>
                    </section>
                </header>

                <nav class="navbar navbar-main navbar-expand-lg border-bottom">
                    <Menu />
                </nav>
            </div>
        )
    }
}

const Menu = () => {
    return (
        <div class="container" style={{width:'55%'}}>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav3" 
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="main_nav3">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link pl-0" href="#"> <strong>All category</strong></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Clienti</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Premi</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Statistiche</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Altro</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

const Search = () => {
    return (
        <div class="col-lg-4 col-xl-5 col-sm-8 col-md-4 d-none d-md-block">
            <form action="#" class="search">
                <div class="input-group w-100">
                    <input type="text" class="form-control" style={{width:'55%'}} placeholder="Cerca" />
                    <div class="input-group-append">
                    <button class="btn btn-primary" type="submit">
                        <i class="fa fa-search"></i>
                    </button>
                    </div>
                </div>
            </form>
        </div>
        )
    }

const User = () => {
    return (
        <div class="col-lg-5 col-xl-4 col-sm-8 col-md-4 col-7">
            <div class="d-flex justify-content-end">

                <a href="#" class="widget-header mr-3">
                    <div class="icon">
                        <i class="icon-sm rounded-circle border fa fa-shopping-cart"></i>
                        <span class="notify">0</span>
                    </div>
                </a>
                <a href="#" class="widget-header mr-3">
                    <div class="icon icon-sm rounded-circle border ">
                        <i class="fa fa-user"></i>
                    </div>
                </a>

                <div class="text">
                    <span class="text-muted">Benvenuto!</span>
                    <div> 
                        <a href="#">Logout</a> |  
                        <a href="#"> Registra</a>
                    </div>
                </div>
            </div>
        </div>
        )
    }