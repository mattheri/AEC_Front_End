import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Input } from './Input';

export const LinkGetter = () => {

    const [link, setLink] = React.useState({
        link: "",
        rebrandly: ""
    });

    const handleChange = (value) => {
        link.link = value;
        setLink(prev => (Object.assign({}, prev, link)));
    };

    const handleClick = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_CORS}${process.env.REACT_APP_URL}links`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'apikey': `${process.env.REACT_APP_API_KEY}`
                },
                body: JSON.stringify({destination: link.link})
            });

            if (response.ok) {
                const json = await response.json();
                link.rebrandly = json.shortUrl;
                setLink(prev => (Object.assign({}, prev, link)));
                return json;
            }

            throw new Error("Request Failed");
        } catch(e) {
            console.log(e);
        }
    };
 
    return(
        <Container fluid className="bg-primary h-100">
            <Container className="pt-5">
            <Form>
                <Input onChange={handleChange} />
                <Button onClick={(e) => {
                    e.preventDefault();
                    handleClick();
                }} role="a" variant="link" className="text-white font-weight-bold mt-3">Get Link</Button>
            </Form>
            </Container>
            <Container>
                {link.rebrandly.length > 0 && 
                    <React.Fragment>
                        <h3 className="text-white font-weight-bold mt-3">Your link</h3>
                        <p className="text-white font-weight-bold mt-3">{link.rebrandly}</p>
                    </React.Fragment>}
            </Container>
        </Container>
    );
}
