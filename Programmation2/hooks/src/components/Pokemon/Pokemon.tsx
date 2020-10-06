import React from 'react';
import { IPokemon } from "../ManagePokemons/ManagePokemons";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export const Pokemon = (props: IPokemon) => (
    <Card className="pokemon-carte" style={{ width: '18rem' }}>
        <Card.Img className="p-5" variant="top" src={props.picture} />
        <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <ListGroup>
                {props.abilities.map(a => <ListGroup.Item key={a.name}>{a.name}</ListGroup.Item>)}
            </ListGroup>
        </Card.Body>
    </Card>
);
