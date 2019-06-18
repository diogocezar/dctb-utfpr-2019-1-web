import React from 'react'
import './navbar.css'

const NavBar = (props) => {
    return props.color == 'true' ? <nav className="navbar navbar-transparent fixed-top navbar-expand-lg navbar-dark bg-dark" id="nav-bar">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="ml-4 nav-link" href="#">Home<span class="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#perfil">Perfil</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#habilidades">Habilidades</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#blog">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#trabalhos">Trabalhos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#infos">infos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contato">Contato</a>
                        </li>
                    </ul>
                <button type="button" className="btn btn-light">Login</button>
                <button type="button" className="ml-1 btn btn-light">Register</button>
                </div>
            </nav> : 
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" id="nav-bar">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="ml-4 nav-link" href="#">Home<span class="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#perfil">Perfil</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#habilidades">Habilidades</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#blog">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#trabalhos">Trabalhos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#infos">Infos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contato">Contato</a>
                    </li>
                    
                </ul>
            <button type="button" className="btn btn-light">Login</button>
            <button type="button" className="ml-1 btn btn-light">Register</button>
            </div>
            </nav>;
}

export default NavBar