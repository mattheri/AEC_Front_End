import React from 'react';
import { createPortal } from "react-dom";

export const Portal = (props) => {
    const mount = document.getElementById(props.id || "portal-root");
    const el = document.createElement("div");

    React.useEffect(() => {
        mount.appendChild(el);
        return () => mount.removeChild(el);
    }, [el, mount]);

    return createPortal(props.children, el);
}
