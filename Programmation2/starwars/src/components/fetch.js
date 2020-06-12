export const fetchData = async (url, stateToUpdate, property) => {
    const response = await fetch(url);
    const json = await response.json();

    try {
        let [state, setState] = stateToUpdate;

        if (property) {
            state[property] = json
            setState(prev => (Object.assign({}, prev, state)));
            return;
        }

        setState(prev => (Object.assign({}, prev, json)));
    } catch (e) {
        console.error(e);
    }
}