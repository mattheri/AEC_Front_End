import React from 'react';
import Container from "react-bootstrap/Container";
import { Header } from './Header';
import { PersonnageContainer } from './PersonnagesContainer';

function App() {
  return (
    <Container className="App px-0" fluid as="section">
      <Header />
      <PersonnageContainer />
    </Container>
  );
}

export default App;
