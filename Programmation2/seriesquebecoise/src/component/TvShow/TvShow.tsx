import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

interface TvShowProps {
    url: string;
    title: string;
    onClick: (e: React.MouseEvent) => void;
}

export const TvShow = (props: TvShowProps) => {

    const { url, title, onClick } = props;

    return (
        <Col xs={2} className="tv-show">
            <Container className="text-center">
                <div className="image-overlay">
                    <button onClick={onClick} className="btn add">+</button>
                    <button onClick={onClick} className="btn remove">-</button>
                </div>
                <Image
                     src={url} alt={title} fluid />
                <h3>{title}</h3>
            </Container>
        </Col>
    );
};