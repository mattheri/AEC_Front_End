import React from 'react';
import { Container } from '../Container/Container';
import { Switch, useRouteMatch, useParams, Route } from 'react-router-dom';
import { TransitionRoute } from '../TransitionRoute/TransitionRoute';
import { BasicInformation } from '../Modules/BasicInformation/BasicInformations';
import { router } from '../../router';

export const FNA = () => {

    const { path } = useRouteMatch();
    const { id } = useParams();

    return (
        <Container fluid>
            <Switch>
                <Route exact path={`${path}`}>
                    <BasicInformation />
                </Route>
                <TransitionRoute path={`${path}/${id}${router.basicInformation}`}>
                    <BasicInformation />
                </TransitionRoute>
                <TransitionRoute path={`${path}/${id}${router.dependants}`}>
                    <BasicInformation />
                </TransitionRoute>
                <TransitionRoute path={`${path}/${id}${router.income}`}>
                    <BasicInformation />
                </TransitionRoute>
                <TransitionRoute path={`${path}/${id}${router.debt}`}>
                    <BasicInformation />
                </TransitionRoute>
                <TransitionRoute path={`${path}/${id}${router.insurance}`}>
                    <BasicInformation />
                </TransitionRoute>
                <TransitionRoute path={`${path}/${id}${router.retirement}`}>
                    <BasicInformation />
                </TransitionRoute>
            </Switch>
        </Container>
    );
}
