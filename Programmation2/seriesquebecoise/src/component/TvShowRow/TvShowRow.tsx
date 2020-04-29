import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

export const TvShowRow = (props: { children: Array<JSX.Element> | JSX.Element, category: string }) => {
    
    const { children, category } = props;

    return (
        <Row className="tvshow-row">
            <Container fluid>
                <Row>
                    <h1 className="px py">{category}</h1>
                </Row>
                <Row className="py">
                    {children}
                </Row>
            </Container>
        </Row>
    );
}