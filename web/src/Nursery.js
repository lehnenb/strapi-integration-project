import React, { useState } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {
 Header,
 Menu,
 Form,
 Button,
 Container,
 Segment,
 TextArea,
 Message,
} from 'semantic-ui-react';

import CustomBreadcrumbs from './CustomBreadcrumbs'
import { PostNursery } from './Services';

function Nursery() {
  const [homeState, setHomeState] = useState({ name: '', address: '', email: '', phone: '', description: '' });
  const [serviceState, setServiceState] = useState({ success: false, error: false });
  const handleChange = (field, value) => setHomeState({ ...homeState, [field]: value });
  const handleSubmit = () => {
    PostNursery(homeState)
    .then((r) => setServiceState({ success: r, error: !r }));
  };

  return (
    <div id="content">
      <CustomBreadcrumbs />
      <Container>
        <Segment id='nursery-form'>
          <Form success={serviceState.success} error={serviceState.error} onSubmit={handleSubmit}>
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
            <Header>Cadastrar Lar</Header>
            <Form.Group unstackable widths={2}>
              <Form.Input label='Nome:' placeholder='Nome' value={homeState.name} onChange={(e) => handleChange('name', e.target.value) } />
              <Form.Input label='Address:' placeholder='Address:' value={homeState.address} onChange={(e) => handleChange('address', e.target.value) } />
            </Form.Group>
            <Form.Group widths={2}>
              <Form.Input label='e-mail:' placeholder='e-mail' value={homeState.email} onChange={(e) => handleChange('email', e.target.value) } />
              <Form.Input label='Telefone:' placeholder='Telefone'  value={homeState.phone} onChange={(e) => handleChange('phone', e.target.value) } />
            </Form.Group>
            <Form.Group widths={2}>
              <Form.Field control={TextArea} label="Descrição das Atividades de Voluntariado:" placeholder="Digite a descrição" value={homeState.description} onChange={(e) => handleChange('description', e.target.value) }/>
            </Form.Group>
            <Button type='submit'>Enviar</Button>
        </Form>
      </Segment>
     </Container>
  </div>
  );
}

export default Nursery;
