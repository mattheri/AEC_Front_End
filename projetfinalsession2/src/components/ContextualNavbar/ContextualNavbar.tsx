import React from 'react';
import { useLocation, Link, useParams, useRouteMatch } from 'react-router-dom';
import { locations } from "./locations";
import { ContextNavButton } from './ContextNavButton';
interface IItem {
    text: string;
    path: string;
}

export const ContextualNavbar = () => {
    const [show, setShow] = React.useState(false);
    const [items, setItems] = React.useState<IItem[]>([]);

    const handleShow = () => setShow(!show);

    const location = useLocation();
    const { path, url } = useRouteMatch();

    React.useEffect(() => {
        const loc = location.pathname.match(/\d/) ? `${location.pathname}`.replace(/\/\d+/, "") : location.pathname;
        console.log(location, path, url);
        console.log("loc", loc);
        setItems(locations[loc]);
    }, [location, items]);

    return (
        <ContextNavButton onClick={handleShow} show={show}>
            <div className="context-nav-container">
                <nav className="context-nav">
                    <ul>
                        {items.map(i => <li onClick={handleShow} key={i.path}><Link to={i.path}>{i.text}</Link></li>)}
                    </ul>
                </nav>
            </div>
        </ContextNavButton>
    );
}
