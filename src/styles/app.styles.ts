import styled from "styled-components";
import logoHeader from "../assets/logoPortifolio.png";

export const Container = styled.div`
background-color: #fff;
color: #000;
min-height: 100vh;
`;

export const Header = styled.header`
background-color: #fff;
box-shadow: 0px 0px 1.5px #CCC;
height: 107px;
width: 100%;
justify-content: space-between;
display: flex;
`;
export const ContatoHeader = styled.div`
justify-content: space-between;
margin-top: 30px;
margin-bottom: 0px;
`;


export const HeaderContatosImg = styled.img`
margin: 3px;
text-align: center;
@media screen and (max-width: 500px) {
    margin: 5px;
    width: 27px;
    height: auto;
}
`;
export const HeaderImg = styled.img`
margin: 10px;
@media screen and (max-width: 500px) {
    margin: 25px 5px 5px 10px;
    width: auto;
    height: 70px;
}
`;

export const Main = styled.body`
margin: auto;
margin-top: 15px;
margin-left: 12px;
max-width: 98%;
min-height: 90vh;
margin-bottom: 10px;
display: inline-block;
`;
export const Sobre = styled.div`
width: 47.5%;
margin: auto;
margin-top: 0;
margin-left: 0;
box-shadow: 0px 0px 4px #CCC;
@media screen and (max-width: 500px) {
    width: 90%;
    margin-left:5%
}
`;
export const Title = styled.h1`
font-weight: bold;
font-size: 30px;
margin: 10px 15px 0px 10px;
justify-content: center;
`;
export const ParagrafoSobre = styled.p`
color: #303030;
font-size: 25px;
margin: 19px;
`;
export const Linguagem = styled.div`
width: 47.5%;
box-shadow: 0px 0px 4px #CCC;
margin: auto;
margin-top: 0;
margin-right: 0;
@media screen and (max-width: 500px) {
    width: 90%;
    margin-left:5%
}
`;
export const Subtitulo = styled.h2`
font-size: 25px;
margin: 10px 15px 0px 10px;
font-weight: semi-bold;
color: #00021f;
`;
export const Paragrafo = styled.p`
color: #000000;
font-size: 22px;
margin: 19px;
`;

export const LinguagemImg = styled.img`
margin: 3px;
justify-content: center;
text-align: center;
height: 40px;
`;
export const TitituloImg = styled.img`
margin: 3px;
justify-content: center;
text-align: center;
height: 40px;
`;
export const Projetos = styled.div`
display: inline-block;
min-width: 100%;
box-shadow: 0px 0px 4px #CCC;
margin: auto;
margin-top: 0;
margin-bottom: 15px;
`;
export const Projeto = styled.div`
width: 47.5%;
background-color: #EDEDED;
box-shadow: 4px 4px 7px #202020;
margin: auto;
margin-top: 0;
@media screen and (max-width: 500px) {
    width: 90%;
    margin-left:5%
}
`;
export const TitleProjeto = styled.h1`
font-weight: bold;
font-size: 30px;
margin: 10px 15px 0px 10px;
justify-content: center;
color: black;

`;
export const SubtituloProjeto = styled.h2`
font-size: 25px;
margin: 10px 15px 0px 10px;
font-weight: semi-bold;
color: #000000;
`;
export const ParagrafoProjeto = styled.p`
color: #000000;
font-size: 25px;
margin: 19px;
`;
export const ContainerFlex = styled.div`
background-color: #fff;
color: #000;
width: 100%;
display: flex;
margin-bottom: 15px;
@media screen and (max-width: 500px) {
    display: block;
}
`;

export const ContainerPadrao = styled.div`
width: 47.5%;
background-color: white;
box-shadow: 0px 0px 4px #CCC;
margin: auto;
margin-top: 0;
@media screen and (max-width: 500px) {
    width: 90%;
    margin-left:5%
}
`;
export const ContainerOutros = styled.div`
width: 47.5%;
display: inline-block;
background-color: white;
margin: auto;
margin-top: 0;
@media screen and (max-width: 500px) {
    width: 90%;
    margin-left:5%
}
`;
