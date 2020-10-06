import React from 'react';
import Card from "react-bootstrap/Card";

export const AlbumCard = (props) => {

    let [albumData, setAlbumData] = React.useState({});

    const { id, title, link, cover, cover_xl, tracklist, artist } = props.props;

    React.useEffect(() => {
        albumData = props.props;
        setAlbumData((prev) => (Object.assign({}, prev, albumData)));
    }, []);

    const handleClick = () => {
        props.onClick(props.props);
    };

    const handleHover = (e) => {
        e.currentTarget.classList.toggle("album-hover");
    }
    
    return (
        <React.Suspense>
            {props && <Card style={{ width: "18rem" }} onMouseEnter={handleHover} onMouseLeave={handleHover} className="bg-black album" onClick={handleClick}>
                <Card.Img variant="top" src={cover} />
                <Card.Body>
                    <Card.Title className="text-white">{title}</Card.Title>
                    <Card.Text className="text-white">{artist.name}</Card.Text>
                </Card.Body>
            </Card>}
        </React.Suspense>
    );
}
