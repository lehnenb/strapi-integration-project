import React from 'react';
import logo from './logo.svg';
import Home from './Home';
import Nursery from './Nursery';
import Voluntary from './Voluntary';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import {
 Header,
 Menu,
 Form,
 Button,
 Container,
 Segment,
 TextArea,
} from 'semantic-ui-react';
import './App.css';

function App(props) {
  return (
    <Container id="container" >
      <Router>
        <Header id="header" as='h1'>
          <img src={process.env.PUBLIC_URL + '/teacher_old_education_professor-512.png' } />Meu Velho Amigo
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
        <Route path="/" exact component={Home} />
        <Route path="/addHome" component={Nursery} />
        <Route path="/addVoluntary" component={Voluntary} />
      </Router>
    </Container>
  );
}

export default App;
