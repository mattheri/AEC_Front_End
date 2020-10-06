import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/esm/Card';
import ListGroup from "react-bootstrap/ListGroup";
import { IPokemon } from "../ManagePokemons/ManagePokemons";

export const AjoutPokemons = () => {
    const [showImage, setShowImage] = React.useState(false);
    const [showName, setShowName] = React.useState(false);
    const [showAbilities, setShowAbilities] = React.useState(false);
    const [data, setData] = React.useState<IPokemon>();

    function handleChangeImage() {
        if (data?.picture) {
            if (showImage) {
                setData(prevData => (Object.assign({}, prevData, { picture: "" })));
                return setShowImage(!showImage);
            }
        }    
    }

    function handleChangeName() {
        if (data?.name) {
            if (showName) {
                setData(prevData => (Object.assign({}, prevData, { name: "" })));
                return setShowName(!showName);
            }
        }
    }

    function handleChangeAbility() {
        if (data?.abilities.length) {
            if (showAbilities) {
                setData(prevData => (Object.assign({}, prevData, { abilities: [] })));
                return setShowAbilities(!showAbilities);
            }
        }
    }

    function handleBlur() {
        if (data?.picture) {
            setShowImage(true);
        };

        if (data?.name) {
            setShowName(true);
        };

        if (data?.abilities && data?.abilities.length === 2) {
            setShowAbilities(true);
        }
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.currentTarget.value;
        console.log(value);
        const property = e.currentTarget.id;
        const abilities: object[] = [];
        if (property.includes("abilities")) {
            if (property === "abilities-1") abilities.push({ name: value });
            if (property === "abilities-2") abilities.push({ name: value });
            if (value) return setData(prevState => (Object.assign({}, data, {["abilities"]: abilities})));
        }
        if (value) setData(prevState => (Object.assign({}, data, {[property]: value})));
        console.log(data);
    }

    React.useEffect(() => console.log(data), [data]);

    return (
        <Container>
            <Card style={{ width: '18rem' }}>
                {!showImage &&
                    <Form className="px-5">
                        <Form.Group>
                            <Form.Label>Entrez l'URL de l'image</Form.Label>
                            <Form.Control id="picture" onChange={handleChange} onBlur={handleBlur} type="text" />
                        </Form.Group>
                    </Form>
                }
                {showImage &&
                    <>
                        <Button onClick={handleChangeImage} variant="link">Change</Button>
                        <Card.Img className="p-5" variant="top" src={data?.picture} />
                    </>
                }
                {!showName &&
                    <Form className="px-5">
                        <Form.Label>Entrez le nom</Form.Label>
                        <Form.Control id="name" onChange={handleChange} onBlur={handleBlur} type="text" />
                    </Form>
                }
                {showName &&
                    <>
                        <Button onClick={handleChangeName} variant="link">Change</Button>
                        <Card.Title>{data?.name}</Card.Title>
                    </>
                }
                {!showAbilities &&
                    <Form className="px-5">
                        <Form.Label>Entrez les attaques</Form.Label>
                        <Form.Control id="abilities-1" onChange={handleChange} onBlur={handleBlur} type="text" />
                        <Form.Control id="abilities-2" onChange={handleChange} onBlur={handleBlur} type="text" />
                    </Form>
                }
                {showAbilities &&
                    <>
                        <Button onClick={handleChangeAbility} variant="link">Change</Button>
                        <ListGroup>
                            {data?.abilities.map(a => <ListGroup.Item>{a.name}</ListGroup.Item>)}
                        </ListGroup>
                    </>
                }
            </Card>
        </Container>
    );
}
