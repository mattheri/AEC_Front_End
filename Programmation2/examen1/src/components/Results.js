import React from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import { appContext } from './Context';

export const Results = (props) => {
    let [searchResults, setSearchResults] = props.state[0];
    let [user, setUser] = props.state[1];
    let [context, setContext] = React.useContext(appContext);
    let results = searchResults.results;

    const handleHover = (e) => {
        e.currentTarget.classList.toggle("active");
    }

    const handleClick = (e, data) => {
        searchResults.query = "";
        setSearchResults(prev => (Object.assign({}, prev, searchResults)));
        if (e.currentTarget.id === "album" || e.currentTarget.id === "artist") {
            context.data["loadedAlbum"] = data[1];
            user.module = "album";
        }
        if (e.currentTarget.id === "track") {
            context.data["loadedAlbum"] = data[1][0];
            context.data["loadedTrack"] = data[0];
            user.module = "track";
        }
        setContext(prev => (Object.assign({}, prev, context)));
        setUser(prev => (Object.assign({}, prev, user)));
    }
    
    return (
        <Container className="search-results" fluid style={{ top: `${props.top ? props.top : "0"}px`, height: `${props.height ? props.height : "0"}px`}}>
            <Container>
                <ListGroup>
                    {results.artists.length > 0 &&
                        <React.Fragment>
                            <h1 className="text-white text-center">Artists</h1>
                            {results.artists.map((artist, i) => {
                                return <ListGroup.Item id="artist" onClick={(e) => handleClick(e, [artist[0], artist[1][0]])} onMouseEnter={handleHover} onMouseLeave={handleHover} key={i * Math.random() + (Math.random() * i)} as="a" className="d-flex result-list-item">{artist[0]}</ListGroup.Item>
                            })}
                        </React.Fragment>
                    }
                    {results.albums.length > 0 &&
                        <React.Fragment>
                            <h1 className="text-white text-center">Albums</h1>
                                {results.albums.map((album, i) => {
                                    if (album[0] !== "data" && album[0] !== "total" && album[0] !== "loadedalbum") {
                                        return <ListGroup.Item
                                            onMouseEnter={handleHover}
                                            onMouseLeave={handleHover}
                                            key={i * Math.random() + (Math.random() * i)}
                                            as="a"
                                            id="album"
                                            onClick={(e) => handleClick(e, [album[0], album[1]])}
                                            className="d-flex result-list-item">{album[0]}
                                                    <p key={i * Math.random() + (Math.random() * i)} className="text-black-50 pl-3">{album[1].artist.name}</p>
                                                </ListGroup.Item>   
                                }
                            })}
                        </React.Fragment>
                    }
                    {results.tracks.length > 0 &&
                        <React.Fragment>
                            <h1 className="text-white text-center">Tracks</h1>
                            {results.tracks.map((track, i) => {
                                return <ListGroup.Item
                                    onMouseEnter={handleHover}
                                    onMouseLeave={handleHover}
                                    key={i * Math.random() + (Math.random() * i)}
                                    as="a"
                                    id="track"
                                    className="d-flex result-list-item"
                                    onClick={(e) => handleClick(e, [track[1], track[2]])}>{track[0]}
                                            <p key={i * Math.random() + (Math.random() * i)} className="text-black-50 pl-3">{`Album: ${track[2][0].title}`}</p>
                                            <p key={i * Math.random() + (Math.random() * i)} className="text-black-50 pl-3">{`Artist: ${track[1].artist.name}`}</p>
                                        </ListGroup.Item>
                            })}
                        </React.Fragment>
                    }
                </ListGroup>
            </Container>
        </Container>
    );
}
