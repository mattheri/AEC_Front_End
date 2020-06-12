import React from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import fetchData from "./fetch";
import { CardPlaceholder } from './CardPlaceholder';
import { Lyrics } from './Lyrics';
import { List } from './List';
import { appContext } from './Context';

export const TrackList = (props) => {

    let [tracksData, setTrackData] = React.useState();
    let [user, setUser] = props.data[1];
    let [context, setContext] = React.useContext(appContext);
    React.useEffect(() => {
        if (context.hasOwnProperty(context.data.loadedAlbum.title)) {
            tracksData = context[context.data.loadedAlbum.title];
            setTrackData(prev => (Object.assign({}, prev, tracksData)));
        } else {
            fetchData(context.data.loadedAlbum.tracklist, [tracksData, setTrackData]);
        }
    }, [context.data.loadedAlbum]);

    const handleClick = (trackData) => {
        context.data["loadedTrack"] = trackData;
        setContext(prev => (Object.assign({}, prev, context)));
        user.module = "track";
        setUser(prev => (Object.assign({}, prev, user)));
    }

    return (
        <React.Fragment>
            <section className="album-cover-image d-flex flex-column justify-content-center align-items-center" style={{ backgroundImage: `url("${context.data.loadedAlbum.cover_xl}")` }}>
                <h1 className="text-white">{context.data.loadedAlbum.title}</h1>
                {user.module === "track" && <h4 className="text-white">{context.data.loadedTrack && context.data.loadedTrack.title}</h4>}
            </section>
            <Container className="d-flex justify-content-center track-list" fluid="sm">
                {user.module === "album" ?
                    <ListGroup className="w-100 py-8">
                        <React.Suspense fallback={<CardPlaceholder />}>
                            {tracksData && <List data={tracksData.data} onClick={handleClick} />}
                        </React.Suspense>
                    </ListGroup>

                    : <Lyrics />
                }
            </Container>
        </React.Fragment>
    );
}
