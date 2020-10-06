import React from 'react';
import { Container } from '../../Container/Container';
import { Form } from '../../Form/Form';
import { Input } from '../../Input/Input';

export const BasicInformation = () => {

    const [information, setInformation] = React.useState<{ [key: string]: string }>({
        firstname: "",
        lastname: "",
        dob: "",
        civicNumber: "",
        street: "",
        city: "",
        country: "",
        postalCode: ""
    });
    
    return (
        <Container fluid as="section" classname="basic-information">
            <Container fluid classname="container basic-information-container" as="section" data-content="Basic Information">
                <Form stateToUpdate={[information, setInformation]}>
                    <Input id="basicInformation-firstname" label="Firstname" value={information.firstname} />
                    <Input id="basicInformation-lastname" label="Lastname" value={information.lastname} />
                    <Input id="basicInformation-dob" label="Date of Birth" value={information.dob} />
                </Form>
            </Container>
            <Container fluid classname="container address-container" as="section" data-content="Address">
                <Form stateToUpdate={[information, setInformation]}>
                    <Input id="basicInformation-civicNumber" label="Civic Number" value={information.civicNumber} />
                    <Input id="basicInformation-street" label="Street" value={information.street} />
                    <Input id="basicInformation-city" label="City" value={information.city} />
                    <Input id="basicInformation-country" label="Country" value={information.country} />
                    <Input id="basicInformation-postalCode" label="Postal Code" value={information.postalCode} />
                </Form>
            </Container>
        </Container>    
    )
}
