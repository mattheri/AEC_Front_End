import React from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import { appContext } from './Context';

export const List = (props) => {

    const handleClick = (data) => {
        props.onClick(data);
    }

    let [context, setContext] = React.useContext(appContext);

    const handlePreview = (src) => {
        context["previewSrc"] = src;
        context["previewOn"] = true;
        setContext(prev => (Object.assign({}, prev, context)));
    }

    return (
        <>
            {props.data.map((track, i) => {
                return  <ListGroup.Item key={i * (Math.random() * 100)} className="track-item" variant="flush" href={track.link}>
                            <a onClick={() => handleClick(track)} className="text-white px-2">{track.title}</a>
                            {/* <a href={track.preview} target="_blank" className="px-2 text-white-50">Preview</a> */}
                            <a onClick={() => handlePreview(track.preview)} className="px-2 text-white-50">Preview</a>
                        </ListGroup.Item>
            })}
        </>
    );
}
