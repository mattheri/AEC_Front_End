import React from 'react';
import { Pokemon } from '../Pokemon/Pokemon';
import { BoutonAjouter } from '../BoutonAjouter/BoutonAjouter';
import Container from "react-bootstrap/Container";
type Abilities = { name: string };
export interface IPokemon {
    abilities: Abilities[];
    name: string;
    picture: string;
}
export function ManagePokemon() {

    const [pokemons, setPokemons] = React.useState<IPokemon[]>([]);

    React.useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`${process.env.REACT_APP_API}/pokemons`);
                const json: IPokemon[] = await res.json();
                setPokemons(json);
                if (!res.ok) throw Error(res.statusText);
            } catch (e) {
                console.error(e);
            }
        })();
    }, [])

    return (
        <Container className="d-flex flex-column">
            <Container className="d-flex justify-content-between py-5">
                {pokemons?.map(p => <Pokemon abilities={p.abilities} name={p.name} picture={p.picture} key={p.picture} />)}
            </Container>
            <BoutonAjouter />
        </Container>
    );
}