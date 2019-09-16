import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {
 Header,
 Menu,
} from 'semantic-ui-react';

function Voluntary() {
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

  </div>
  );
}

export default Voluntary;
