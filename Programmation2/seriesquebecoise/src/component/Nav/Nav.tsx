import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export const NavBar = () => {

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand>Becflix</Navbar.Brand>
            <Nav>
                <Nav.Link href="#">Plus populaire</Nav.Link>
                <Nav.Link href="#">Suspense</Nav.Link>
                <Nav.Link href="#">Comédie</Nav.Link>
                <Nav.Link href="#">Ma liste</Nav.Link>
            </Nav>
        </Navbar>
    );
};