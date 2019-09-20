import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {
 Header,
 Menu,
 Form,
 Button,
  Container,
  TextArea,
} from 'semantic-ui-react';

function Nursery() {
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
      <Container id='nursery-form form' >
        <Form>
          <Header>Cadastrar Lar</Header>
          <Form.Group unstackable widths={2}>
            <Form.Input label='Nome:' placeholder='Nome:' />
            <Form.Input label='Endereço:' placeholder='Endereço:' />
          </Form.Group>
          <Form.Group widths={2}>
            <Form.Input label='e-mail:' placeholder='e-mail:' />
            <Form.Input label='Telefone:' placeholder='Telefone:' />
          </Form.Group>
          <Form.Group widths={2}>
            <Form.Field control={TextArea} label="Descrição das Atividades de Voluntariado:" placeholder="Digite a descrição" />
          </Form.Group>
          <Button type='submit'>Enviar</Button>
      </Form>
     </Container>
  </div>
  );
}

export default Nursery;
