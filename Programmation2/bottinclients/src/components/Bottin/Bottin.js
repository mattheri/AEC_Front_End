import React from 'react';
import { Client } from '../Client/Client';

export const Bottin = (props) => {

    const [client, setClient] = React.useState({
        clients: [
            <Client image={require("../../assets/images/bart.png")}
                firstname="Bart"
                lastname="Simpsons"
                tel="418-555-5525"
                email="bart.simpson@ptitverras.com"
                occupation="P'tit verras" />,
            <Client image={require("../../assets/images/lisa.png")}
                firstname="Lisa"
                lastname="Simpsons"
                tel="418-555-5525"
                email="lisa.simpson@bole.com"
                occupation="Bolée" />,
            <Client image={require("../../assets/images/homer.png")}
                firstname="Homer"
                lastname="Simpsons"
                tel="418-555-5525"
                email="homer.simpson@grostas.com"
                occupation="Gros tas" />,
            <Client image={require("../../assets/images/abraham.png")}
                firstname="Abraham"
                lastname="Simpsons"
                tel="418-555-5526"
                email="Aucune"
                occupation="Retraite" />,
            <Client image={require("../../assets/images/marge.png")}
                firstname="Marge"
                lastname="Simpsons"
                tel="418-555-5525"
                email="marge.simpson@mmmmmm.com"
                occupation="Mmmmmm" />,
        ]
    });

    return (
        <section className="bottin h-full">
            {client.clients}
        </section>
    );
}
