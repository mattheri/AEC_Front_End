import React from "react";
import { Form, Container } from "react-bootstrap";

interface InputInterface {
    type: string;
    name: string;
    className: string;
    onChange: () => void;
};

const CustomInput = (props: InputInterface) => {

    const handleChange = (event: any) => {
        const value = event.target.value;
        return value;
    };

    return (
        <input type={props.type} onChange={handleChange} id={props.name} name={props.name} className={props.className} />
    );
}

const CustomForm = () => {
    return (
        <Container>
            <Form>
                <Form.Label>Name</Form.Label>
                <CustomInput type="text" name="cat-name" className="form-control" />
            </Form>
        </Container>
    );
}

export default CustomForm;