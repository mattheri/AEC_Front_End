import React from 'react';
import { Form } from '../Form/Form';
import { Input } from '../Input/Input';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';

export const Login = () => {

    const [credentials, setCredentials] = React.useState<{[key: string]: string}>({
        username: "",
        password: ""
    });

    const isDisabled = () => {
        if (credentials.username.length > 5 && credentials.username.includes("@") && credentials.password.length > 3) return false;
        return true;
    }
    
    return (
        <section className="login">
            <h1 className="login-hello">Hello<span>.</span></h1>
            <Form stateToUpdate={[credentials, setCredentials]}>
                <Input label="Username" type="email" id="login-username" value={credentials.username} autoComplete="username" />
                <Input label="Password" type="password" id="login-password" autoComplete="current-password" value={credentials.password} />
            </Form>
            <Button onClick={(ev) => console.log(ev)} text="Login" isDisabled={isDisabled} />
            <h1><span><Link to="/register">Register</Link></span> to create an account<span>.</span></h1>
        </section>
    );
}
