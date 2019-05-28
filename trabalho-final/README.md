# Trabalho Final

Olá pessoas, este é documento que explica o trabalho final das disciplinas as34a-n14 e if66h-es61 no primeiro semestre de 2019.

## Descrição

O trabalho a ser desenvolvido será dividido em 2 etapas.

1. Criação do Sistema de Back-End;
2. Criação da Integração do Back-End com o Front-End;

### Qual será o sistema?

O sistema deverá fornecer os dados necessários para a população dinâmica do trabalho _T02 - Criação do Seu Portfólio_.

Relembrando o que era o T02:

### T2 - Crie uma página para ser o seu portfólio pessoal utilizando ReactJS.

Essa página deverá ser hospedada em seu GitHub pessoal.

Deve possuir as sessões:

- Menu Fixado com âncoras para as sessões do site;
- Foto e Mini-biografia;
- Link para download do seu currículo em PDF;
- Seção de detalhes:
  - Interesses;
  - Idiomas;
  - Formação;
  - Atividades desenvolvidas;
- Lista de suas principais habilidades;
- Blog com três posts sobre tecnologia;
- Portfólio com alguns projetos que já executou (se não existir, usar os trabalhos da disciplina)
- Mais informações
  - Biografia completa;
  - Resenha do seu contato com a profissão;
- Link para o seu GitHub;
  Formulário de Contato (para enviar https://formspree.io) ;
  _ Nome;
  _ Email;
  _ Assunto;
  _ Mensagem;
- Links para as redes sociais;
- Rodapé;

- Um exemplo pode ser visto em: http://www.diogocezar.com

Deve-se enviar no repositório de entrega, apenas o link para o repositório e para a sua página publicada;

# O Trabalho T3

## Back-End

Utilizando NodeJS, você deverá criar um sistema que consiga realizar o CRUD das seguintes funcionalidades:

- Mini-biografia;
  - Texto com sua mini-biografia.
- Foto;
  - Fazer o upload de uma foto do seu computador;
  - Disponibilizar para o front-end a URL da foto;
- Currículo;
  - Fazer o upload de um arquivo PDF do seu computador;
  - Disponibilizar para o front-end a URL do currículo;
- Interesses;
  - Lista dos seus interesses;
- Idiomas;
  - Lista dos seus idiomas;
- Formação;
  - Lista das instituições que você já passou;
- Atividades desenvolvidas;
  - Lista das atividades que você já desenvolveu;
- Lista de suas principais habilidades;
  - Lista das suas principais habilidades;
- Portfólio com alguns projetos que já executou (se não existir, usar os trabalhos da disciplina)
  - Nome do projeto;
  - Data do projeto;
  - Descrição do projeto;
- Mais informações
  - Texto com mais informações;
- Biografia completa;
  - Texto com a sua biografia completa;
- Links
  - Link para o seu GitHub;
  - Links para as redes Sociais: Facebook, Twitter, Instagram, etc...

Para cada uma dessas funcionalidades, deve-se criar um sistema que consiga: Buscar, Inserir, Excluir e Atualizar estes dados.

Não é necessário nenhum sistema de login.

Além dos CRUDS, deve-se criar _endpoints_ que consigam acessar publicamente todos estes dados cadastrados, por exemplo, ao acessar:

http://localhost:8080/t3/projetos

Deve-se retornar um JSON parecido com este:

```
projetos : [
    {
        'titulo' : 'Projeto 1',
        'data' : '10/10/2019',
        'descricao' : 'Testando um projeto'
    },
    {
        'titulo' : 'Projeto 2',
        'data' : '10/10/2019',
        'descricao' : 'Testando um projeto'
    },
    ...
]
```

## Armazenamento

Você pode utilizar um banco de dados a sua escolha.

Algumas sugestões:

- MongoDB;
- MySQL;
- PostGreSQL;
- Firebase (Google);
- SQLite;

## Integração

Com o sistema pronto, deve-se integrar o que foi feito no T2 com o que ficou pronto no T3.

Lembrando que o trabalho 3 tem como dependência o trabalho 2.

_A INTEGRAÇÃO DO FRONT-END EM REACTJS COM O BACK-END EM NODE SERÁ TAMBÉM AVALIADA_

Para isso, deve-se utilizar alguma técnica de Ajax (fetch, axios) junto com o ReactJS para _alterar os estados dos componentes_ e obter os dados diretamente do _Back-End_.

## Avaliação

O trabalho deverá ser apresentado _individualmente_, cada aluno deve mostrar o trabalho para o professor, que observará os seguintes prontos:

- Organização do código;
- Configuração do ambiente de desenvolvimento;
- Teste de alguns CRUDS aleatórios;
- Busca de dados dentro do sistema;
- Criação de novos dados;
- Alteração de dados no sistema;
- Verificação da integração;

## Data de Apresentação

Os trabalhos devem ser apresentados em até 10 minutos, nas aulas dos dias:

### AS34A-N14

- 18/06/2019
- 24/06/2019
- 25/06/2019
- 01/07/2019

### IF66H-ES61

- 27/06/2019
- 28/06/2019
- 04/07/2019

## IMPORTANTE

- As apresentações serão feitas em ordem alfabética (PELA LISTA DE CHAMADA);

## Dicas

1. Lembrem-se de trazer o ambiente de configurado e testado;
2. Levem em consideração a internet da UTFPR que pode bloquear acessos externos a bancos online;
3. Dê preferência a bancos instalados diretamente em suas maquinas;
4. Tragam todo o sistema já testado e pronto;
5. Mesmo que não conseguir terminar todas as funcionalidades, foquem em terminar o principal, um fluxo completo do início ao fim;
