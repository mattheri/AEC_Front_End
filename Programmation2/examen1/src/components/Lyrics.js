import React from 'react';
import fetchData from "./fetch";
import { appContext } from './Context';

export const Lyrics = (props) => {

    let [lyrics, setLyrics] = React.useState();
    const [message, setMessage] = React.useState("Loading lyrics...");
    const [context, setContext] = React.useContext(appContext);
    let load = true;

    React.useEffect(() => {
        const uri = `https://api.canarado.xyz/lyrics/${context.data.loadedTrack.title}`;
        fetchData(uri, [lyrics, setLyrics]);
        setMessage("Loading lyrics...");
        setTimeout(() => {
            setMessage("Couldn't find the lyrics :(");
            load = false;
        }, 10000);
    }, [context.data.loadedTrack]);

    return (
        <section>
            {lyrics &&
                lyrics.content.map((info, i) => {
                    if (info.artist.includes(context.data.loadedTrack.artist.name) && info.title.includes(context.data.loadedTrack.title)) {
                        load = false;
                        return <p key={i * Math.random() + 100} className="text-white text-center py-5">{info.lyrics}</p>
                    }
                })
            }
            {load && <p className="text-white text-center py-5">{message}</p>}
        </section>
    );
}
