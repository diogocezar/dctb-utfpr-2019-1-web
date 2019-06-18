import React from 'react'
import './blog.css'
import Button from '../button/Button'

const Blog = () => {
    return (
    <div className="center">
        <div className="flex">
            <img src="./assets/games-de-linux.jpg" alt="imagem games linux" id="img"/>
            <p id="sinopse">O ano de 2018 tem sido muito interessante em termos dos jogos disponíveis para as distribuições Linux, já que a oferta de títulos de diferentes gêneros aumentou exponencialmente...</p>
            <Button value="Ver Mais" content="https://www.diolinux.com.br/2018/11/os-generos-e-videogames-mais-jogados-no-linux.html" color="true"/>
        </div>
        <div className="flex">
            <img src="./assets/not2.jpg" alt="logo linux mint" id="img"/>
            <p id="sinopse">Vários servidores, sistemas Linux e FreeBSD possuem uma vulnerabilidade de negação de serviço chamada SACK Panic. A descoberta foi feita por Jonathan Looney, engenheiro da Netflix Information Security....</p>
            <Button value="Ver Mais" content="https://olhardigital.com.br/fique_seguro/noticia/engenheiro-da-netflix-descobre-falhas-de-seguranca-no-linux/87024" color="true"/>
        </div>
        <div className="flex">
            <img src="./assets/not3.jpg" alt="imagem ilustrativa logo red heat" id="img"/>
            <p id="sinopse">Dinheiro digital é uma iniciativa de várias empresas e poderá ser usado a partir da carteira virtual Calibra, dentro de plataformas do Facebook...</p>
            <Button value="Ver Mais" content="https://www.techtudo.com.br/noticias/2019/06/facebook-anuncia-criptomoeda-libra-e-carteira-virtual-para-2020.ghtml" color="true"/>
        </div>
    </div>
    )
}

export default Blog