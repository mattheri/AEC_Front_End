import React from 'react';

export const appContext = React.createContext({});

export const ContextProvider = (props) => {

    let [context, setContext] = React.useState({});

    return (
        <appContext.Provider value={[context, setContext]}>
            {props.children}
        </appContext.Provider>
    );
}
