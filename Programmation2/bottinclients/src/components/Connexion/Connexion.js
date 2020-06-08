import React from 'react';
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Input } from '../Input/Input';

export const Connexion = (props) => {

    const [connexionInput, setConnexionInput] = React.useState({
        username: "",
        password: ""
    });

    const handleChange = (newvalue, id) => {
        const fieldToUpdate = id.split("-")[1];
        connexionInput[fieldToUpdate] = newvalue;
        setConnexionInput(prev => (Object.assign({}, prev, connexionInput)));
    };

    const handleConnexion = () => {
        const [connexion, setConnexion] = props.state;
        if (connexion.username.includes(connexionInput.username) && connexion.password.includes(connexionInput.password)) {
            connexion["connected"] = true;
            setConnexion(prev => (Object.assign({}, prev, connexion)));
        } else {
            alert("Password or username is invalid.");
        }
    };

    return (
        <section className="login h-full d-flex align-items-center">
            <Container className="p-5">
                <Form>
                    <Input type="email" id="connexion-username" label="Email" placeholder="exemple@exemple.com" onChange={handleChange} value={connexionInput.username} />
                    <Input type="password" id="connexion-password" label="Password" onChange={handleChange} value={connexionInput.password} />
                </Form>
                <Button variant="success" block onClick={handleConnexion}>Login</Button>
            </Container>
        </section>
    );
}