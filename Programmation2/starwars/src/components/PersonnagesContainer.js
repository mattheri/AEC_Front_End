import React from 'react';
import { fetchData } from './fetch';
import { Personnages } from './Personnages';

export const PersonnageContainer = (props) => {

    let [personnages, setPersonnages] = React.useState([]);

    //React.useCallback(() => (fetchData("https://swapi.dev/api/people/2/", [personnages, setPersonnages])), [personnages])
    const handleFetchData = async () => {
        const response = await fetch(`https://swapi.dev/api/people/1/`);
        const json = await response.json();
        console.log(response, json)
        try {
            personnages.push(json);
            setPersonnages(prev => (Object.assign({}, prev, personnages)));
        } catch (e) {
            console.error(e);
        }
    }

    React.useEffect(() => {
        fetchData();
    }, []);

    return (
        <React.Fragment>
            <Personnages {...personnages} />
        </React.Fragment>
    )
}
