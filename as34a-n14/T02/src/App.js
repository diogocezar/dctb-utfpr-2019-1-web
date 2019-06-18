import React, { Component, Fragment } from 'react';
import './App.css'
import NavBar from './components/nav/navbar'
import Title from './components/title/title'
import Perfil from './components/perfil/perfil-component'
import Button from './components/button/Button'
import Skills from './components/skills/habilidades'
import Habilidades from './components/skills/habilidades';
import Blog from './components/blog/blog'
import Work from './components/works/work'
import Infos from './components/infos/infos'
import Form from './components/form/form'
import Footer from './components/footer/footer'

class App extends Component {
  render() {
    return (<Fragment>
              <NavBar color="false"/>
              <section className="perfil" id="perfil">
                <div className="title">
                  <Title value="Perfil" color="false" />
                </div>
                <Perfil />
                <div className="title">
                  <Button value="Download Currículo" content="./assets/Currículo.pdf" color="false"/>
                </div>
              </section>
              <section id="habilidades">
                  <div>
                    <Title value="Skills" color="true" />
                  </div>
                  <div>
                    <h3 className="p">Estas são algumas de minhas habilidades!</h3>
                    <Habilidades />
                  </div>
              </section>
              <section id="blog">
                <div className="title">
                  <Title value="Blog" color="false" />
                </div>
                <Blog />
              </section>
              <section id="trabalhos">
                <div className="title">
                  <Title value="Trabalhos" color="true" />
                </div>
                <h3 className="p">Estes são alguns de meus trabalhos</h3>
                <div className="title">
                  <Work />
                </div>
              </section>
              <section id="infos">
                <div className="title">
                  <Title value="Mais Informações" color="false" />
                </div>
                <h3>Mais algumas informações sobre mim</h3>
                <Infos />
                <div>
                  <a target="_blank" href="https://github.com/wesleykads">
                    <img src="./assets/github-icon.png" alt="icone repositório github"/>
                  </a>
                  <p>Link para o meu perfil do GitHub</p>
                </div>
              </section>
              <section id="contato">
                <div className="title">
                  <Title value="Contato" color="true" />
                </div>
                <Form />
                <div className="title">
                  <h5 className="p">Link para as minhas redes sociais!</h5>
                  <ul id="redes-sociais">
                    <li>
                      <a target="_blank" href="https://www.facebook.com/wesley.carlosrodriguesbregagnoli"><img src="./assets/facebook-icon.png" alt="icone facebook"/></a>
                    </li>
                  </ul>
                </div>
              </section>
              <Footer name="Wesley Carlos" email="wesleycarlosrb@gmail.com" number="+55 (43) 99990-1319" />
            </Fragment>
            );
  }
}

export default App;