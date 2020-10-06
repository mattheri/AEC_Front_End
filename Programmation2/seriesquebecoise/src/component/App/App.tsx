import React from 'react';

import { NavBar } from '../Nav/Nav';
import { Catalogue } from '../Catalogue/Catalogue';
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const App: React.FC = () => {

  return (
    <div className="App">
      <NavBar />
      <Container>
        <Form>
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="Email" />
          <Form.Label>Password</Form.Label>
          <Form.Control type="text" placeholder="Password" />
          <Button variant="primary">Login</Button>
        </Form>
      </Container>
      {/* <Catalogue /> */}
    </div>
  );
}

export default App;
