import React from 'react';
import Button from "react-bootstrap/Button";
import fetchData from "./fetch";
import { Catalogue } from './Catalogue';
import { appContext } from './Context';
import { CustomNavbar } from './CustomNavbar';
import { Search } from './Search';

export const CatalogueContainer = (props) => {

    let [searchResults, setSearchResults] = React.useState({ query: "" });
    let [user, setUser] = props.state[0];
    let [music, setMusic] = props.state[1];
    let [context, setContext] = React.useContext(appContext);

    const handleDeconnexion = () => {
        setUser({ isConnected: false, module: "catalogue" });
    };

    const fetchAll = async () => {
        context.data.forEach(album => {
            fetchData(album.tracklist, [context, setContext], album.title);
        });
    }

    React.useEffect(() => {
        context = music.albums;
        setContext(prev => (Object.assign({}, prev, context)));

        if (context !== undefined && context.hasOwnProperty("data")) fetchAll();
    }, [music]);

    return (
        <React.Fragment>
            <CustomNavbar state={[user, setUser]}>
                <Search state={[searchResults, setSearchResults]} value={searchResults && searchResults.query} />
                <Button className="py-1" variant="danger" onClick={handleDeconnexion}>Deconnexion</Button>
            </CustomNavbar>
            <Catalogue state={[[user, setUser], [searchResults, setSearchResults]]} />
        </React.Fragment>
    );
}
