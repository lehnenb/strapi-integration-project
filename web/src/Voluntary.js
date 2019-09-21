import React, { useState } from 'react';
import logo from './logo.svg';
import { 
  BrowserRouter as Router, 
  Route, 
  Link 
} from 'react-router-dom';

import {
 Header,
 Menu,
 Form,
 Button,
 Container,
 TextArea,
 Segment,
 Message
} from 'semantic-ui-react';

import CustomBreadcrumbs from './CustomBreadcrumbs';
import { PostVoluntary } from './Services';

function Voluntary() {
  const [voluntaryState, setVoluntaryState] = useState({ name: '', last_name: '', email: '', phone: '', description: '' });
  const [serviceState, setServiceState] = useState({ success: false, error: false });
  const handleChange = (field, value) => setVoluntaryState({ ...voluntaryState, [field]: value });
  const handleSubmit = () => {
    PostVoluntary(voluntaryState)
      .then((r) => setServiceState({ success: r, error: !r }));
  };

  return (
    <div id="content">
      <CustomBreadcrumbs />
      <Container>
        <Segment id='voluntary-form'>
          <Form onSubmit={handleSubmit} success={serviceState.success} error={serviceState.error} onSubmit={handleSubmit} >
            <Message
              error
              header='Erro'
              content='Um erro ocorreu ao inserir o Voluntário'
            />
            <Message
              success 
              header='Sucesso'
              content='Voluntário adicionado com sucesso'
            />
            <Header as='h3' >Cadastrar Voluntário</Header>
            <Form.Group unstackable widths={2}>
              <Form.Input label='Nome:' placeholder='Nome' value={voluntaryState.name} onChange={(e) => handleChange('name', e.target.value) } />
              <Form.Input label='Sobrenome:' placeholder='Sobrenome' value={voluntaryState.last_name} onChange={(e) => handleChange('last_name', e.target.value) } />
            </Form.Group>
            <Form.Group widths={2}>
              <Form.Input label='e-mail:' placeholder='e-mail' value={voluntaryState.email} onChange={(e) => handleChange('email', e.target.value) } />
              <Form.Input label='Telefone:' placeholder='Telefone'  value={voluntaryState.phone} onChange={(e) => handleChange('phone', e.target.value) } />
            </Form.Group>
            <Form.Group widths={2}>
              <Form.Field control={TextArea} label="Carta de Apresentação:" placeholder="Digite sua carta de apresentação" value={voluntaryState.description} onChange={(e) => handleChange('description', e.target.value) }/>
            </Form.Group>
            <Button type='submit'>Enviar</Button>
          </Form>
        </Segment>
     </Container>
  </div>
  );
}

export default Voluntary;
