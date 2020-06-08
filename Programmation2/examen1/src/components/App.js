import React from 'react';
import fetchData from "./fetch";
import { Connexion } from './Connexion';
import { ContextProvider } from "./Context";
import { CatalogueContainer } from "./CatalogueContainer";

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
        {user.isConnected && <CatalogueContainer state={[[user, setUser], [music, setMusic]]} />}
      </div>
    </ContextProvider>
  
  );
}

export default App;
