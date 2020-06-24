import React from 'react';
import { Header } from './Header';
import { Navbar } from './Navbar';
import { LinkGetter } from './LinkGetter';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <LinkGetter />
    </div>
  );
}

export default App;
