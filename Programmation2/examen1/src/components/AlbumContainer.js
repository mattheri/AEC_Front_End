import React from 'react';
import Col from "react-bootstrap/Col";
import { AlbumCard } from './AlbumCard';

export const AlbumContainer = (props) => {

    return (
        <React.Fragment>
            {props.data &&
                props.data.map((entry, i) => {
                    return  <React.Suspense key={i * Math.random() + 100}>
                                <Col className="d-flex justify-content-center align-items-center py-3" key={i * Math.random() + 100} xs={12} md={6} lg={3}>
                                    <AlbumCard key={i * Math.random() + 100} props={entry} onClick={props.handler} />
                                </Col>
                            </React.Suspense>
            })}
        </React.Fragment>
    );
}
