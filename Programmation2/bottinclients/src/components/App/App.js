import React from 'react';
import { Connexion } from '../Connexion/Connexion';
import { Bottin } from '../Bottin/Bottin';

function App() {

  const [connexion, setConnexion] = React.useState({
    username: ["mathieu.theriault89@gmail.com", "shany.carle@gmail.com"],
    password: ["a1032010", "patate"],
    connected: true
  });

  return (
    <div className="App">
      {!connexion.connected && <Connexion state={[connexion, setConnexion]} />}
      {connexion.connected && <Bottin />}
    </div>
  );
}

export default App;
