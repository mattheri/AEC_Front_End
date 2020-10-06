import React from 'react';
import Button from "react-bootstrap/Button";
import { Link, useHistory } from 'react-router-dom';

export const BoutonAjouter = () => {

    let history = useHistory();

    function handleClick(e: React.MouseEvent<HTMLElement, MouseEvent>) {
        e.preventDefault();
        history.push("/ajout");
    }
    
    return (
        <Button onClick={handleClick} block>Ajouter</Button>
    );
}
