import React from 'react';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { CustomForm } from './CustomForm';
import { Input } from './Input';

export const Connexion = (props) => {

    const [credentials, setCredentials] = React.useState({
        email: "",
        password: ""
    });

    const handleConnexion = async () => {
        const [user, setUser] = props.state;
        const users = await import("./credentials");
        const storedCredentials = Object.entries(users)[0][1];
        for (let i in storedCredentials) {
            if (storedCredentials[i].email === credentials.email && storedCredentials[i].password === credentials.password) {
                const status = { isConnected: true };
                setUser(prev => Object.assign({}, prev, status));
            };
        };
    };

    return (
        <Container as="section" fluid>
            <Container>
                <Container className="d-flex flex-column align-items-center justify-content-center py-5">
                    <i className="fas fa-head-side-headphones px-3 text-white connexion-logo p-3"></i>
                    <h1 className="text-white">Sneezer</h1>
                </Container>
                <CustomForm state={[credentials, setCredentials]}>
                    <Input labelClassName="text-white-50" className="mb-3" type="email" id="connexion-email" label="Email" placeholder="exemple@exemple.com" autoComplete={"username"} />
                    <Input labelClassName="text-white-50" type="password" id="connexion-password" label="Password" autoComplete={"current-password"} />
                    <Button className="my-3" onClick={handleConnexion}>Connexion</Button>
                </CustomForm>
            </Container>
        </Container>
    )
}
