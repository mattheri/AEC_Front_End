let attempts = 0;


/**********************************************
Will throttle calls to a maximum of 2/seconds*/
const fetchData = async (url, stateToUpdate, property) => {
    let [state, setState] = stateToUpdate;
    if (attempts > 0 && attempts < 10) {
        setTimeout(async () => {
            const f = await fetch(`https://cors-anywhere.herokuapp.com/${url}`, {
                headers: {
                    "Content-type": "application/json"
                }
            });

            if (property) state[property] = await f.json();
            if (!property) state = await f.json();

            try {
                setState(prev => {
                    return Object.assign({}, prev, state);
                });
            } catch (e) {
                console.error(e);
            };
        }, 500);

        attempts++;
    }

    if (attempts >= 10) {
        setTimeout(() => {
            attempts = 0;
            return;
        }, 500);
    }
    
    if (!attempts) {
        const f = await fetch(`https://cors-anywhere.herokuapp.com/${url}`, {
            headers: {
                "Content-type": "application/json"
            }
        });
        if (property) state[property] = await f.json();
        if (!property) state = await f.json();

        try {
            setState(prev => {
                return Object.assign({}, prev, state);
            });
        } catch (e) {
            console.error(e);
        };

        attempts++;
    }
};

export default fetchData;