import React from 'react';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import ctaImage from "../assets/home-cta.png";

export const Header = () => {
    return(
        <Container as="header" fluid className="py-5">
            <Row>
            <Col xs={12} lg={6} className="d-flex align-items-center">
                <Container>
                    <Container className="d-flex align-items-center flex-column">
                        <h1 className="header-text">Your Brand on Your Links</h1>
                        <p className="pr-10">Id ad anim ex consequat.</p>
                    </Container>
                </Container>
            </Col>
            <Col xs={12} lg={6}>
                <Container>
                    <Image src={ctaImage} fluid />
                </Container>
            </Col>
            </Row>
        </Container>
    );
}
