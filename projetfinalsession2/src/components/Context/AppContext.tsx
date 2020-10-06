import React from 'react';

type User = {
    id: string;
    name: string;
    lastname: string;
    picture: string;
}

interface IAppContext {
    isAuthenticated: boolean;
    user: User;
};

export type IAppState = [IAppContext, React.Dispatch<React.SetStateAction<IAppContext>>];

export let appContext: React.Context<IAppState>;

export const AppContextProvider = (props: { children: JSX.Element | JSX.Element[] }) => {
    
    const [appState, setAppState] = React.useState<IAppContext>({
        isAuthenticated: true,
        user: {
            id: "",
            name: "",
            lastname: "",
            picture: ""
        }
    });

    appContext = React.createContext<[IAppContext, React.Dispatch<React.SetStateAction<IAppContext>>]>([appState, setAppState]);
    
    return (
        <appContext.Provider value={[appState, setAppState]}>
            {props.children}
        </appContext.Provider>
    );
}
