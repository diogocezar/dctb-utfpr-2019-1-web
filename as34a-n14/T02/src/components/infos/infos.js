import React, { Component } from 'react'
import './infos.css'

class Infos extends Component {
    state = {
        bio: "Em 2012 quando estava finalizando o ensino medio, acabei pesquisando sobre a area e me interessando pela area de programação, desde então venho buscando cada dia um pouco mais de conhecimento.",
        profission: "Hoje trabalho na empresa CDS Informatica como suporte tecnico, tendo uma oportunidade futura no desenvolvimento, trabalho com modelagem de banco de dados fazendo consultas, na area de anco é uma area que quero muito buscar a cada dia."
    }

    render(){
        return (
            <div className="container">
                <div className="item">
                    <span>
                        <img src="./assets/biografia.png" alt="icone biografia"/>
                        BIOGRAFIA
                    </span>
                    <article className="art">{this.state.bio}</article>
                </div>
                <div className="item">
                    <span>
                        <img src="./assets/work.jpg" alt="icone profissão"/>
                        PROFISSÃO
                    </span>
                    <article className="art">{this.state.profission}</article>
                </div>
                
            </div>
        );
    }
}

export default Infos