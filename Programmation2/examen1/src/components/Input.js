import React from 'react';
import Form from "react-bootstrap/Form";

export const Input = (props) => {

    const handleChange = (e) => {
        const value = e.currentTarget.value;
        const id = e.currentTarget.id;
        props.onChange(value, id);
    };

    return (
        <>
            {!props.noLabel && <Form.Label className={props.labelClassName} htmlFor={props.id}>{props.label}</Form.Label>}
            <Form.Control
                type={props.type || "text"}
                name={props.id}
                id={props.id}
                placeholder={props.placeholder}
                onChange={handleChange}
                value={props.value}
                autoComplete={props.autoComplete}
                className={props.className}
            />
        </>
    );
}
