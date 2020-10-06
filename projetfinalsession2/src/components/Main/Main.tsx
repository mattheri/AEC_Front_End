import React from 'react';
import { Switch, Route, useRouteMatch, useParams, Link } from 'react-router-dom';
import { TransitionRoute } from '../TransitionRoute/TransitionRoute';
import { FNA } from '../FNA/FNA';
import { CustomerList } from '../CustomersList/CustomerList';
import { router } from '../../router';

export const Main = () => {

    const { path } = useRouteMatch();
    console.log("path", path);
    return (
        <main>
            <Switch>
                <Route path={`${path}/`}>
                    <FNA />
                </Route>
                <Route exact path={path}>
                    <CustomerList />
                </Route>
            </Switch>
        </main>
    );
}
