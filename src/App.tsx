
import * as C from './styles/app.styles'
import logoHeader from "./assets/logoPortifolio.png";
import What from "./assets/what.png";
import Linkedin from "./assets/linkedin.png";
import Email from "./assets/email.png";
import Git from "./assets/git.png";

import CLogo from "./assets/C++Logo.png";
import FlutterLogo from "./assets/FlutterLogo.png";
import HtmCSSJsLogo from "./assets/HtmCSSJsLogo.png";
import JavaLogo from "./assets/JavaLogo.png";
import NodeLogo from "./assets/NodeLogo.png";
import ReactLogo from "./assets/ReactLogo.png";
import SpringLogo from "./assets/SpringLogo.png";
import SQLLogo from "./assets/SQLLogo.png";
import TypeScriptLogo from "./assets/TypeScriptLogo.png";
import VueLogo from "./assets/VueLogo.png";

import ProjetoTitulo from "./assets/ProjetoTitulo.png";
import ProjetoTexto from "./assets/ProjetoTexto.png";


import Competencia from "./assets/competencia.png";
import Certificacao from "./assets/certificacao.png";
import Historico from "./assets/historico.png";
import Formacao from "./assets/formacao.png";
import Idioma from "./assets/idioma.png";


function App() {

  return (
    <C.Container>
      <C.Header>
        <C.HeaderImg src={logoHeader} alt="logoHeader" />
        <C.ContatoHeader>
          <a href="https://wa.me/qr/ZEMEIJXWRZHIH1" target="_blank"><C.HeaderContatosImg src={What} /></a>
          <a href="https://www.linkedin.com/in/moises-pompilio-173bb021b" target="_blank"><C.HeaderContatosImg src={Linkedin} /></a>
          <a href="mailto:moisesalexandrep.c@gmail.com" target="_blank"><C.HeaderContatosImg src={Email} /></a>
          <a href="https://github.com/moisesPompilio" target="_blank"><C.HeaderContatosImg src={Git} /></a>
        </C.ContatoHeader>
      </C.Header>
      <C.Main>
        <C.ContainerFlex>
          <C.Sobre>
            <C.Title>Moises Alexandre Pompilio da Costa</C.Title>
            <C.ParagrafoSobre>Desenvolvedor de software focado em programação para web. Sempre admirei o universo das tecnologias, principalmente quando se trata de web, pois gosto de ter uma variedade de conteúdo digital. Tenho interesse em trabalhar em projetos que ajudem a sociedade no seu dia-a-dia ou no seu lazer.</C.ParagrafoSobre>
          </C.Sobre>
          <C.Linguagem>
            <C.Title>Linguagem e Framework.</C.Title>
            <C.Subtitulo>Experiencia e projetos:</C.Subtitulo>
            <C.LinguagemImg src={ReactLogo} />
            <C.LinguagemImg src={NodeLogo} />
            <C.LinguagemImg src={SpringLogo} />
            <C.LinguagemImg src={JavaLogo} />
            <C.LinguagemImg src={VueLogo} />
            <C.LinguagemImg src={TypeScriptLogo} />
            <C.LinguagemImg src={HtmCSSJsLogo} />
            <C.Subtitulo>Conhecimento:</C.Subtitulo>
            <C.LinguagemImg src={FlutterLogo} />
            <C.LinguagemImg src={CLogo} />
            <C.LinguagemImg src={SQLLogo} />
          </C.Linguagem>
        </C.ContainerFlex>

        <C.Projetos>
          <C.Title><C.TitituloImg src={ProjetoTitulo} />  Projetos:</C.Title>
          <br />
          <C.ContainerFlex>
            <C.Projeto>
              <C.TitleProjeto ><C.TitituloImg src={ProjetoTexto} />  Samir</C.TitleProjeto>
              <C.SubtituloProjeto> Tecnologias: Spring, Vue e PostgreSQL</C.SubtituloProjeto>
              <C.ParagrafoProjeto>   Projeto que visa ajudar o ramo previdenciário na AGU, O sistema realizar calculo previdenciário e triagem dos processos. Dessa forma beneficiando a população com processos mais ágeis.</C.ParagrafoProjeto>
              <C.ParagrafoProjeto>   Ele foi desenvolvido em Spring(JPA, Framework e Boot) no Back-end, no Front-end foi utilizado Vue(Vuetify e Axios) e banco de dados PostgreSQL.</C.ParagrafoProjeto>
              <C.ParagrafoProjeto>   Desse modo o sistema recebeu bastante elogio pela AGU tanto na esfera estadual quanto na esfera federal, pois utilizar tecnologias eficientes e escaláveis.</C.ParagrafoProjeto>
              <a href="https://github.com/moisesPompilio/samirFront" target="_blank"><C.SubtituloProjeto>Front-end</C.SubtituloProjeto></a>
              <a href="https://github.com/moisesPompilio/samir-back" target="_blank"><C.SubtituloProjeto>Back-end</C.SubtituloProjeto></a>
            </C.Projeto>
            <C.Projeto>
              <C.TitleProjeto ><C.TitituloImg src={ProjetoTexto} />  Equity-Wallet</C.TitleProjeto>
              <C.SubtituloProjeto> Tecnologias:  Node, React e PostgreSQL</C.SubtituloProjeto>
              <C.ParagrafoProjeto>   Sistema desenvolvido visando ajudar as pessoas a controlarem seus gastos, de um jeito fácil e prático, assim poupando tempo e incentivando as pessoas a terem uma vida financeira consciente.</C.ParagrafoProjeto>
              <C.ParagrafoProjeto>   Ele foi desenvolvido em Node(TypeScript, TypeORM e Express) no Back-end, no Front-end foi utilizado React.tsx, banco de dados PostgreSQL e Docker.</C.ParagrafoProjeto>
              <C.ParagrafoProjeto>   Dessa maneira o projeto foi desenvolvido visando escalabilidade e eficiência na aplicação, assim como ajudar a população no controle financeiro.</C.ParagrafoProjeto>
              <a href="https://github.com/moisesPompilio/equity-wallet_front-end" target="_blank"><C.SubtituloProjeto>Front-end</C.SubtituloProjeto></a>
              <a href="https://github.com/moisesPompilio/equity-wallet_back-end" target="_blank"><C.SubtituloProjeto>Back-end</C.SubtituloProjeto></a>
            </C.Projeto>
          </C.ContainerFlex>
          <C.ContainerFlex>
            <C.Projeto>
              <C.TitleProjeto ><C.TitituloImg src={ProjetoTexto} />  Rick-Morty</C.TitleProjeto>
              <C.SubtituloProjeto> Tecnologias: Vue</C.SubtituloProjeto>
              <C.ParagrafoProjeto>   Site que visa o enterimento, contem diversas informações do desenho do Rick-Morty e algumas brincadeiras  na construção, visando o divertimento.</C.ParagrafoProjeto>
              <C.ParagrafoProjeto>   Ele foi desenvolvido em Vue( Vuetify e Axios) e consume uma API de terceiro em GraphQL.</C.ParagrafoProjeto>
              <C.ParagrafoProjeto>   Desse modo, o SPA (Single Page Applications) utilizando um frameowrk  moderno, o software visa o enterimento e o repasse de informações sobre o seriado Rick e morty.</C.ParagrafoProjeto>
              <a href="https://github.com/moisesPompilio/Rick-Morty" target="_blank"><C.SubtituloProjeto>GitHub</C.SubtituloProjeto></a></C.Projeto>
            <C.Projeto>
              <C.TitleProjeto ><C.TitituloImg src={ProjetoTexto} />  Beremiz</C.TitleProjeto>
              <C.SubtituloProjeto> Tecnologias:  Java, Selenium e SQLite</C.SubtituloProjeto>
              <C.ParagrafoProjeto>   Software desenvolvido para ajudar na triagem de dados para AGU, o qual visa aumentar a eficiência no despacho e triagem de informações para o setor previdenciário.</C.ParagrafoProjeto>
              <C.ParagrafoProjeto>   Ele foi desenvolvido para ser um BOT para desktop, utilizando Java, Selenium(realiza pesquisa na web) e banco de dados SQLite.</C.ParagrafoProjeto>
              <C.ParagrafoProjeto>   Dessa forma o sistema foi desenvolvido para aumentar a efetividade na parte da triagem, assim garantindo agilidade nos processos e melhorias sociais.</C.ParagrafoProjeto>
              <a href="https://github.com/moisesPompilio/Beremiz-Samir" target="_blank"><C.SubtituloProjeto>GitHub</C.SubtituloProjeto></a>
            </C.Projeto>
          </C.ContainerFlex>
          <C.ContainerFlex>
            <C.Projeto>
              <C.TitleProjeto ><C.TitituloImg src={ProjetoTexto} />  Study-Meta</C.TitleProjeto>
              <C.SubtituloProjeto> Tecnologia:  Node, Vue e MySQL</C.SubtituloProjeto>
              <C.ParagrafoProjeto>   Sistema que visa ajudar as pessoas nos estudos: ele permite que o estudante cadastre suas metas a serem estudadas e também permiti anotações das matérias, quantifica as horas estudadas e registra início e termino de estudo.</C.ParagrafoProjeto>
              <C.ParagrafoProjeto>   Ele foi desenvolvido em Node(Express, Swagger, Knex e JWT) no Back-End, no Front-end em Vue(Vuetify e Axios) e banco de dados MySQL.</C.ParagrafoProjeto>
              <C.ParagrafoProjeto>   Dessa maneira o sistema foi desenvolvido para as pessoas terem mais eficiências no estudos, assim alcançarem suas metas e manterem seus registros de estudo.</C.ParagrafoProjeto>
              <a href="https://github.com/moisesPompilio/study-meta_front-end" target="_blank"><C.SubtituloProjeto>Front-end</C.SubtituloProjeto></a>
              <a href="https://github.com/moisesPompilio/study-meta_back-end" target="_blank"><C.SubtituloProjeto>Back-end</C.SubtituloProjeto></a>
            </C.Projeto>
          </C.ContainerFlex>
        </C.Projetos>
        <C.ContainerFlex>
          <C.ContainerPadrao>
            <C.Title><C.TitituloImg src={Competencia} />  Competências</C.Title>
            <C.Paragrafo>Desenvolvimento API com Spring( JPA, Security, Framework e Boot).</C.Paragrafo>
            <C.Paragrafo>Experiência com desenvolvimento de API com Node.js( Express, Knex, JSON Web Token, TypeScript, Jest, Supertest e TypeORM) .</C.Paragrafo>
            <C.Paragrafo>Experiência com teste unitários e teste de integração, utilizando Jest e Supertest</C.Paragrafo>
            <C.Paragrafo>Desenvolvimento Front-end( Vue.js e React).</C.Paragrafo>
            <C.Paragrafo>Banco de dados relacional e não relacional (PostgreSQL, SQLite e Mysql).</C.Paragrafo>
            <C.Paragrafo>Experiência com GitHub, web API, protocolo HTPP e Figma.</C.Paragrafo>
            <C.Paragrafo>Experiência com Docker.</C.Paragrafo>
            <C.Paragrafo>Experiência  com metodologia Scrum.</C.Paragrafo>
            <C.Paragrafo>Conhecimento em documentação de código com  Swagge e Storybook.</C.Paragrafo>
            <C.Paragrafo>Conhecimentos em TypeScript, MongoDB, Flutter e C++.</C.Paragrafo>
          </C.ContainerPadrao>
          <C.ContainerPadrao>
            <C.Title><C.TitituloImg src={Certificacao} />  Certificações:</C.Title>
            <C.Paragrafo>Certificação em Desenvolvimento de front-end pela Instituto Federal de Educação, Ciência e Tecnologia do Pará. <a href="https://mooc.ifpa.edu.br/certificate/qchIjeTv" target="_blank">click aqui</a></C.Paragrafo>
            <C.Paragrafo>Certificação em Desenvolvimento de back-end pela Instituto Federal de Educação, Ciência e Tecnologia do Pará. <a href="https://mooc.ifpa.edu.br/certificate/EXURS8bd" target="_blank">click aqui</a></C.Paragrafo>
            <C.Paragrafo>Certificação em Boas práticas em desenvolvimento de software pela Instituto Federal de Educação, Ciência e Tecnologia do Pará. <a href="https://mooc.ifpa.edu.br/certificate/bOtkAm8j" target="_blank">click aqui</a></C.Paragrafo>
            <C.Paragrafo>Certificação em Introdução à programação em linguagem JAVA pela Instituto Federal de Educação, Ciência e Tecnologia do Pará. <a href="https://mooc.ifpa.edu.br/certificate/ARSB3iEh" target="_blank">click aqui</a></C.Paragrafo>
            <C.Paragrafo>Certificação em Programação em JavaScript: Conceitos e bibliotecas pela Instituto Federal de Educação, Ciência e Tecnologia do Pará. <a href="https://mooc.ifpa.edu.br/certificate/QWfZ17b-" target="_blank">click aqui</a></C.Paragrafo>
            <C.Paragrafo>Certificação em Introdução à lógica de programação pela Instituto Federal de Educação, Ciência e Tecnologia do Pará. <a href="https://mooc.ifpa.edu.br/certificate/gy6AhTWJ" target="_blank">click aqui</a></C.Paragrafo>
            <C.Paragrafo>Certificação em Programação em HTML5 - Introdução ao front-end - pela Instituto Federal de Educação, Ciência e Tecnologia do Pará. <a href="https://mooc.ifpa.edu.br/certificate/zeQfrP94" target="_blank">click aqui</a></C.Paragrafo>
            <C.Paragrafo>Certificação em Inglês- nível 1 - pela Open English. <a href="https://mega.nz/file/6fw0HDRR#QBz41xG9K1dF3BuLvVNpoOxzkwMexmjXhm0B1JKC_io" target="_blank">click aqui</a></C.Paragrafo>
          </C.ContainerPadrao>
        </C.ContainerFlex>
        <C.ContainerFlex>
          <C.ContainerPadrao>
            <C.Title><C.TitituloImg src={Historico} />  Histórico profissional</C.Title>
            <C.Subtitulo>Advocacia-Geral da União - AGU BELÉM, PA</C.Subtitulo>
            <C.Paragrafo>Cargo: Desenvolvedor Full-Stack - Estágio.</C.Paragrafo>
            <C.Paragrafo>Período: Julho 2021 - Atual</C.Paragrafo>
            <C.Paragrafo>Realizei a construção de dois sistema Samir( Back-end em Java Spring, Front-end em Vue.js e banco de dados PostgreSQL) e Beremiz( desenvolvido em Java para desktop e banco de dados SQLite).</C.Paragrafo>
            <C.Paragrafo>Trabalhei com metodologia Scrum.</C.Paragrafo>
            <C.Paragrafo>Identificação de problemas, analisando as informações disponíveis a fim de obter as melhores soluções.</C.Paragrafo>
            <C.Paragrafo>Desenvolvimento de API em Node.js(Express, Knex, JSON Web Token, TypeScript, Jest, Supertest e TypeORM).</C.Paragrafo>
            <C.Paragrafo>Realizei desenvolvimento de API utilizando API de terceiro.</C.Paragrafo>
            <C.Paragrafo>Realizei desenvolvimento de sistemas webs e desktops.</C.Paragrafo>
            <C.Paragrafo>Desenvolvimento e implementação de estratégias e planos de melhoria do desempenho, visando o crescimento contínuo da equipe e dos software desenvolvidos.</C.Paragrafo>
            <C.Paragrafo>Fiz a utilização de Docker, Swagger e Storybook</C.Paragrafo>
          </C.ContainerPadrao>
          <C.ContainerOutros>
            <C.Projetos>
              <C.Title><C.TitituloImg src={Idioma} />  Idiomas</C.Title>
              <C.Paragrafo>Português: Língua materna</C.Paragrafo>
              <C.Paragrafo>Inglês: B1 Pré-intermediário</C.Paragrafo>
              <C.Paragrafo>Espanhol:  A2 Básico</C.Paragrafo>
            </C.Projetos>
            <C.Projetos>
              <C.Title><C.TitituloImg src={Formacao} />  Formação acadêmica</C.Title>
              <C.Paragrafo>Esperado em Julho 2024</C.Paragrafo>
              <C.Paragrafo>Universidade Federal do Pará (UFPA) BELÉM</C.Paragrafo>
              <C.Paragrafo>Bacharelado em Engenharia de Computação </C.Paragrafo>
            </C.Projetos>
          </C.ContainerOutros>
        </C.ContainerFlex>
      </C.Main>
    </C.Container>
  )
}

export default App
