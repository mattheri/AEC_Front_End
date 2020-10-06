import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { TrackList } from './TrackList';
import { appContext } from './Context';
import { Portal } from './Portal';
import { Results } from './Results';
import { AlbumContainer } from "./AlbumContainer";
import { Player } from "./Player";

export const Catalogue = (props) => {

    let [user, setUser] = props.state[0];
    let [searchResults, setSearchResults] = props.state[1];
    let [context, setContext] = React.useContext(appContext);
    const ref = React.useRef();
    let height = 0;
    let top = 0;
    let currentNavRef;

    const handleLoadAlbumData = (data) => {
        context.data["loadedAlbum"] = data;
        user.module = "album";
        setUser(prev => (Object.assign({}, prev, user)));
        setContext(prev => (Object.assign({}, prev, context)));
    }

    React.useEffect(() => {
        height = ref.current.clientHeight;
        top = ref.current.offsetTop;
    
        window.addEventListener("resize", function () {
            height = ref.current.clientHeight;
            top = ref.current.offsetTop;
        });

        //if (navRef.current !== currentNavRef) currentNavRef = navRef.current;
    }, []);

    return (
        <React.Fragment>
            <Container className="position-relative" ref={ref} fluid>
                {user.module === "catalogue" && 
                    <React.Suspense>
                        <Row>
                            <AlbumContainer data={context.data} handler={handleLoadAlbumData} />
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
                            <Results
                                state={[[searchResults, setSearchResults], [user, setUser]]}
                                top={ref.current && ref.current.offsetTop}
                                height={ref.current && ref.current.clientHeight} />    
                        }
                    </Portal>  
                }
            </Container>
            {context.previewOn &&
                <Player src={context.previewSrc} />
            }
        </React.Fragment>
    );
}
