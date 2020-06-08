import React from 'react';
import Form from "react-bootstrap/form";

export const Input = (props) => {

    const handleChange = (e) => {
        const value = e.currentTarget.value;
        const id = e.currentTarget.id;
        props.onChange(value, id);
    };

    return (
        <Form.Group>
            <Form.Label htmlFor={props.id}>{props.label}</Form.Label>
            <Form.Control onChange={handleChange} id={props.id} name={props.id} type={props.type} value={props.value} placeholder={props.placeholder} />
        </Form.Group>
    );
}
