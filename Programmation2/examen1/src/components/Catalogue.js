/*Il y a VRAIMENT trop de choses qui se passe ici. 
Avoir plus de temps, je rapetisserais la taille de ce component 
vu qu'il fait trop de chose en même temps. */

import React from 'react';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import fetchData from "./fetch";
import { CardPlaceholder } from './CardPlaceholder';
import { AlbumCard } from './AlbumCard';
import { CustomNavbar } from './CustomNavbar';
import { Search } from './Search';
import { TrackList } from './TrackList';
import { appContext } from './Context';
import { Portal } from './Portal';
import { Results } from './Results';

export const Catalogue = (props) => {

    let [searchResults, setSearchResults] = React.useState({query: ""});
    let [user, setUser] = props.state[0];
    let [music, setMusic] = props.state[1];
    let [context, setContext] = React.useContext(appContext);
    const ref = React.useRef();
    const navRef = React.useRef();
    let height = 0;
    let top = 0;
    let currentNavRef;

    const handleDeconnexion = () => {
        setUser({ isConnected: false, module: "catalogue" });
    };

    const handleLoadAlbumData = (data) => {
        context.data["loadedAlbum"] = data;
        user.module = "album";
        setUser(prev => (Object.assign({}, prev, user)));
        setContext(prev => (Object.assign({}, prev, context)));
    }

    const fetchAll = async () => {
        context.data.forEach(album => {
            setTimeout(async () => {
                fetchData(album.tracklist, [context, setContext], album.title);
            }, 500);
        });
    }

    React.useEffect(() => {
        context = music.albums;
        setContext(prev => (Object.assign({}, prev, context)));

        if (context !== undefined && context.hasOwnProperty("data")) fetchAll();
        height = ref.current.clientHeight;
        top = ref.current.offsetTop;
    
        window.addEventListener("resize", function () {
            height = ref.current.clientHeight;
            top = ref.current.offsetTop;
        });

        if (navRef.current !== currentNavRef) currentNavRef = navRef.current;
    }, [music]);

    return (
        <React.Fragment>
            <CustomNavbar state={[user, setUser]} ref={navRef}>
                <Search state={[searchResults, setSearchResults]} value={searchResults && searchResults.query} />
                <Button className="py-1" variant="danger" onClick={handleDeconnexion}>Deconnexion</Button>
            </CustomNavbar>
            <Container className="position-relative" ref={ref} fluid>
                {user.module === "catalogue" && 
                    <React.Suspense>
                        <Row>
                            {context.data && context.data.map((entry, i) => {
                                return  <React.Suspense key={i * Math.random() + 100} fallback={<CardPlaceholder />}>
                                            <Col className="d-flex justify-content-center align-items-center py-3" key={i * Math.random() + 100} xs={12} md={6} lg={3}>
                                                <AlbumCard key={i * Math.random() + 100} props={entry} onClick={handleLoadAlbumData} />
                                            </Col>
                                        </React.Suspense>
                            })}
                        </Row>
                    </React.Suspense>
                }
                {user.module !== "catalogue" &&
                    <React.Suspense>
                        <Row>
                            <TrackList data={[context.loadedAlbum, [user, setUser]]} /> 
                        </Row>
                    </React.Suspense>
                }
                {searchResults.query.length > 0 &&
                    <Portal>
                        {searchResults.results &&
                            <Results state={[[searchResults, setSearchResults], [user, setUser]]} top={ref.current && ref.current.offsetTop} height={ref.current && ref.current.clientHeight} />    
                        }
                    </Portal>  
                }
            </Container>
        </React.Fragment>
    );
}
