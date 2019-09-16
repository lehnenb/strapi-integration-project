import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {
 Header,
 Menu,
 Container,
 Segment,
} from 'semantic-ui-react';

function Home() {
  return (
    <div id="container">
      <Header id="header" as='h1' divider='bool'>
          Meu Velho Amigo 
      </Header> 
      <Menu>
        <Menu.Item>
          <Link to='/'>Home</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/addVoluntary'>Cadastrar Voluntário</Link>
        </Menu.Item> 
        <Menu.Item>
            <Link to='/addHome'>Cadastrar Lar de Idosos</Link>
        </Menu.Item>
      </Menu>
      <Segment placeholder>
        <Container id="rules">
          <Header as='h2'>Regras de Inscrição</Header>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
            ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
            quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
            arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
            Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
            dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
            Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
            viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
            Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
          </p>
        </Container>
      </Segment>
      <Segment placeholder>
        <Container id="options">
          <Header as='h2'>Opções de voluntariado</Header>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
            ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
            quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
            arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
            Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
            dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
            Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
            viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
            Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
          </p>
        </Container>
      </Segment>
  </div>
  );
}

export default Home;
