import React from 'react';

export const Player = (props) => {

    const [src, setSrc] = React.useState("");

    React.useEffect(() => {
        if (src !== props.src) setSrc(props.src);
    }, [props.src, src]);

    return (
        <div className="audio">
            {src.length > 0 && <audio src={src} controls autoPlay />}
        </div>
    );
}
