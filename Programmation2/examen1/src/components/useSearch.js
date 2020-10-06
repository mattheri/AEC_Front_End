import React from 'react';
import { appContext } from './Context';

export const useSearch = (query) => {

    const [context, setContext] = React.useContext(appContext);
    let results = {
        albums: [],
        tracks: [],
        artists: []
    }

    if (query.length) {
        query = query.toLowerCase();
        const searchAlbums = async () => {
            const albums = Object.keys(context);
            albums.forEach(p => {
                let title = p.toLowerCase();
                let data = [title, context.data.filter(a => a.title === p)[0]];
                if (title.includes(query)) {
                    results.albums.push(data);
                };
                if (!title.includes(query) && results.albums.filter(t => t[0] === title).length) {
                    results.albums.splice(results.albums.indexOf(data), 1)
                }
            })
        }

        const searchTracks = async () => {
            const dataTracks = Object.entries(context);
            dataTracks.forEach(d => {
                if (d[0] !== "data" && d[0] !== "total" && d[0] !== "loadedAlbum" && d[0] !== "previewSrc" && d[0] !== "previewOn") {
                    d[1].data.forEach(p => {
                        let title = p.title.toLowerCase();
                        let data = [title, p, context.data.filter(t => t.title === d[0])]
                        if (title.includes(query)) {
                            results.tracks.push(data);
                        };
                        if (!title.includes(query) && results.tracks.filter(t => t[0] === title).length) {
                            results.tracks.splice(results.tracks.indexOf(data), 1);
                        }
                    })
                }
            })
        }

        const searchArtist = async () => {
            const data = context.data;
            data.forEach(p => {
                p = p.artist.name.toLowerCase();
                let data = [p, context.data.filter(t => t.artist.name.toLowerCase() === p)];
                if (p.includes(query)) {
                    results.artists.push(data);
                };
                if (!p.includes(query) && results.artists.filter(t => t[0] === data[0]).length) {
                    results.artists.splice(results.artists.indexOf(data), 1);
                }
            })
        }

        Promise.all([searchAlbums(), searchArtist(), searchTracks()]);
    }

    return results;
};