import React from 'react';
import { createPortal } from "react-dom";

interface IPortal {
    children: JSX.Element | JSX.Element[];
    transitionDone: boolean;
}

export const Portal = ({children, transitionDone}: IPortal) => {
    const mount = document.getElementById("transition") as HTMLElement;
    React.useEffect(() => console.log(transitionDone), [transitionDone]);

    return createPortal(!transitionDone && children, mount);
}