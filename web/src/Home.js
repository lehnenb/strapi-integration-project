import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {
 Header,
 Menu,
 Container,
 Segment,
 Divider,
 List,
} from 'semantic-ui-react';
import CustomBreadcrumbs from './CustomBreadcrumbs'

function Home() {
  return (
    <div id="content">
      <CustomBreadcrumbs />
      <Container id="rules">
      <Segment placeholder>
          <Header as='h2'>Regras de Inscrição</Header>
          <p>
            <p>
            Para participar de programas de voluntariado com idosos
            você terá que se cadastrar clicando no link <a href="/addVoluntary">Cadastro de Voluntário</a>.   
            Feito isso, o adminstrador irá verificar seus dados e lhe encaminhar as opções que melhor se encaixam com o seu perfil.<br />
            </p>
            <p>
            <b>A Escolha é feita a partir das habilidades e interesses descritos na carta de apresentação.
               <br />
               Com base nas informações apresentadas na carta, o administrador irá verificar as casas disponíveis no sistema e achar o programa que mais se encaixa com seu perfil.</b>
            </p>
          </p>
      </Segment>
      </Container>
      <Divider horizontal>---</Divider>
      <Container id="options">
      <Segment placeholder>
          <Header as='h2'>Opções de voluntariado</Header>
          <p>
            As opções de voluntariado são informadas por cada casa de idosos internamente.
            <p>
            As seguintes opções são sugeridas para cada casa:
            <br/>
            <List>
              <List.Item><b>Caminhada</b></List.Item>
              <List.Item><b>Refeição</b></List.Item>
              <List.Item><b>Visita</b></List.Item>
              <List.Item><b>Jogos de Carate e Tabuleiro</b></List.Item>
            </List>
          </p>
          </p>
      </Segment>
      </Container>
  </div>
  );
}

export default Home;
