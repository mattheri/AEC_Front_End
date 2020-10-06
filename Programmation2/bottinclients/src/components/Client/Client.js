import React from 'react';
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";


export const Client = (props) => {
    return (
        <Card style={{width: "18rem"}}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.firstname}</Card.Title>
                <Card.Text>`${props.firstname} ${props.lastname}`</Card.Text>
                <Card.Link href={props.tel}>{props.tel}</Card.Link>
                <Card.Link href={props.email}>{props.email}</Card.Link>
            </Card.Body>
            <ListGroup>
                <ListGroupItem>{`Occupation: ${props.occupation}`}</ListGroupItem>
            </ListGroup>
        </Card>
    );
}
