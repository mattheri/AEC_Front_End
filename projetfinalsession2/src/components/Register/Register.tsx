import React from 'react';
import { Form } from '../Form/Form';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';

export const Register = () => {

    const [registerInfo, setRegisterInfo] = React.useState<{ [key: string]: string }>({
        firstname: "",
        lastname: "",
        emailAddress: "",
        password: "",
        reType: ""
    });

    const [passwordMatch, setPasswordMatch] = React.useState(false);

    const handlePasswordMatch = () => {
        if (registerInfo.reType.length && registerInfo.password.length) {
            if (registerInfo.reType === registerInfo.password) {
                return setPasswordMatch(true);
            }
        }
    }

    const isDisabled = () => {
        if (registerInfo.firstname.length > 3) {
            if (registerInfo.lastname.length > 3) {
                if (registerInfo.emailAddress.length > 5 && registerInfo.emailAddress.includes("@")) {
                    if (passwordMatch) {
                        return false;
                    }
                }
            }
        }

        return true;
    }
    
    return (
        <section className="register">
            <h1>Hello there<span>.</span></h1>
            <Form stateToUpdate={[registerInfo, setRegisterInfo]} onChange={handlePasswordMatch}>
                <Input id="register-firstname" type="text" label="Firstname" value={registerInfo.firstname} />
                <Input id="register-lastname" type="text" label="Lastname" value={registerInfo.lastname} />
                <Input id="register-emailAddress" type="email" label="Email" value={registerInfo.emailAddress} autoComplete="username" />
                <Input id="register-password" type="password" label="Set a password" value={registerInfo.password} autoComplete="new-password" muted="Passwords should contain at least 1 number and minimum 8 characters" />
                <Input id="register-reType" type="password" label="Type it again" value={registerInfo.reType} />
            </Form>
            <Button onClick={() => console.log("gotcha")} text="Register" isDisabled={isDisabled} />
            <h1><span>Nice</span> to meet you.</h1>
        </section>
    );
}
