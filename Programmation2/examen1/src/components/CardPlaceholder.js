import React from 'react';
import Card from "react-bootstrap/Card";

export const CardPlaceholder = (props) => {
    return (
        <Card className="card-placeholder" style={{ width: "18rem", height: "20rem" }}>
            <div className="placeholder-animation"></div>
        </Card>
    );
}
