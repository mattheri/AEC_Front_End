import React from 'react';
import Form from "react-bootstrap/Form";

export const CustomForm = (props) => {

    const [state, setState] = props.state;

    const updateProperty = (newvalue, property, state) => {
        const stateProperty = Object.keys(state).filter(f => f === property)[0];
        const updatedState = Object.defineProperty(state, stateProperty, { value: newvalue, writable: false });
        return updatedState;
    };

    const handleChange = (newvalue, id) => {
        const property = id.split("-")[1];
        setState(Object.assign({}, state, updateProperty(newvalue, property, state)));
    };

    const children = React.Children.map(props.children, child => React.cloneElement(child, { onChange: handleChange }));

    return (
        <Form>
            {children}
        </Form>
    )
}
