import React from 'react';
import './App.css';
import { ManagePokemon } from '../ManagePokemons/ManagePokemons';
import { Switch, Route } from 'react-router-dom';
import { AjoutPokemons } from '../AjoutPokemons/AjoutPokemons';
import FormEditerPokemonHooks from '../text';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <ManagePokemon />
        </Route>
        <Route path="/ajout">
          <AjoutPokemons />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
