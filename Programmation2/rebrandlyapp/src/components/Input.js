import React from 'react';
import Form from "react-bootstrap/Form";

export const Input = (props) => {

    const handleChange = (e) => {
        const value = e.currentTarget.value;
        props.onChange(value);
    }

    return(
        <Form.Control placeholder="Enter your link here" onChange={handleChange} value={props.value} />
    );
}
