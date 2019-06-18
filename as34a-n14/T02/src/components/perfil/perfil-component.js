import React, { Component, Fragment } from 'react'
import './perfil-component.css'

class Perfil extends Component {
    state = {
        interesses: ['Aprofundar conhecimentos na modelagem de banco de dados', 'Aprender sobre desenvolvimento mobile', 'Tecnologias novas e antigas que ainda não aprendi'],
        idiomas: ['Inglês Intermediário', 'Espanhol avançado'],
        formacao: ['Graduação Tecnologia em Análise e Desenvolvimento de Sistemas UTFPR-CP(2019)', 'Ensino Médio no Colégio Regina Tokano(CRT) in (2012)'],
        atividades: ['Suporte tecnico, Auxiliar de serviçoes gerais, Frentista']
    }

    render(){
        return <Fragment>
            <div className="center">
                <div>
                    <div className="title">
                        <img src="./assets/wk.jpg" alt="foto-perfil" className="foto" />
                    </div>
                    <p id="introducao">Hello, meu nome é <b>Wesley Carlos Rodrigues Bregagnoli</b> e este é o meu Portifólio!</p>
                </div>
                <div className="lista">
                    <h3>Interesses</h3>
                    <ul>
                        {this.state.interesses.map(
                            (item, index) => {
                                return <li key={index}>{item}</li>
                            }
                        )}
                    </ul>
                    <h3>Idiomas</h3>
                    <ul>
                        {this.state.idiomas.map(
                            (item, index) => {
                                return <li key={index}>{item}</li>
                            }
                        )}
                    </ul>
                    <h3>Formação</h3>
                    <ul>
                        {this.state.formacao.map(
                            (item, index) => {
                                return <li key={index}>{item}</li>
                            }
                        )}
                    </ul>
                    <h3>Atividades Desenvolvidas</h3>
                    <ul>
                        {this.state.atividades.map(
                            (item, index) => {
                                return <li key={index}>{item}</li>
                            }
                        )}
                    </ul>
                </div>
            </div>
        </Fragment>
    }
}


export default Perfil