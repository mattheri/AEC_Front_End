import React from 'react';
import Nav from "react-bootstrap/Nav";

export const Navbar = () => {
    return(
        <Nav className="justify-content-center py-2 bg-light">
            <Nav.Link href="https://developers.rebrandly.com/docs" target="_blank">API</Nav.Link>
            <Nav.Link href="https://rebrandly.com/" target="_blank">Home</Nav.Link>
        </Nav>
    );
}
