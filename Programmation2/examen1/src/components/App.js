import React from 'react';
import fetchData from "./fetch";
import { Connexion } from './Connexion';
import { Catalogue } from './Catalogue';
import { ContextProvider } from "./Context";

function App() {

  const [user, setUser] = React.useState({
    isConnected: false,
    module: "catalogue"
  });
  let [music, setMusic] = React.useState({});

  React.useEffect(() => {
    fetchData("https://api.deezer.com/chart/0", [music, setMusic]);
  }, []);

  return (
    <ContextProvider>
      <div className="App">
        {!user.isConnected && <Connexion state={[user, setUser]} />}
        {user.isConnected && <Catalogue state={[[user, setUser], [music, setMusic]]} />}
      </div>
    </ContextProvider>
  
  );
}

export default App;
