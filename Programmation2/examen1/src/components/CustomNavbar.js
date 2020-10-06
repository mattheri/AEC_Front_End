import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

export const CustomNavbar = React.forwardRef((props, ref) => {

    const children = React.Children.map(props.children, (child) => {
        return <Nav.Item className="px-2">{child}</Nav.Item>
    });

    let [user, setUser] = props.state;

    let navLink1 = false;
    let navLink2 = false;

    switch (user.module) {
        case "album":
            navLink1 = "Catalogue";
            navLink2 = false;
            break;
        case "track":
            navLink1 = "Catalogue";
            navLink2 = "Album";
            break;
    };

    const handleClick = (e) => {
        const value = e.currentTarget.innerText.toLowerCase();
        user.module = value;
        setUser(prev => (Object.assign({}, prev, user)));
    }

    return (
        <Navbar bg="dark" expand="lg">
            <Container>
                <Navbar.Brand className="text-white">
                    <i className="fas fa-head-side-headphones px-3 text-white"></i>
                    Sneezer
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" ref={ref}>
                    <Nav className="mr-auto">
                        {user.module !== "catalogue" &&
                            <>
                                {navLink1.length && <Nav.Link className="text-white-50" onClick={handleClick}>{navLink1}</Nav.Link>}
                                {navLink2.length && <Nav.Link className="text-white-50" onClick={handleClick}>{navLink2}</Nav.Link>}
                            </>
                        }
                    </Nav>
                    <Nav className="ml-auto">
                        {children}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
});
