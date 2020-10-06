import React from 'react';
import { Heading } from '../Heading/Heading';
import { Link, useLocation, useRouteMatch } from 'react-router-dom';
import { Icon, InlineIcon } from "@iconify/react";
import trashIcon from "@iconify/icons-fa-solid/trash-alt";
import donateIcon from '@iconify/icons-fa-solid/donate';
import landmarkIcon from '@iconify/icons-fa-solid/landmark';
import balanceScale from '@iconify/icons-fa-solid/balance-scale';
import babyIcon from '@iconify/icons-fa-solid/baby';
import userIcon from '@iconify/icons-fa-solid/user';
import caravanIcon from '@iconify/icons-fa-solid/caravan';
import checkCircle from '@iconify/icons-fa-solid/check-circle';

interface IModules {
    user: boolean;
    dependants: boolean;
    income: boolean;
    debt: boolean;
    insurance: boolean;
    retirement: boolean;
}

interface ICustomerCard {
    id: string;
    title: string;
    url: string;
    cardComplete: boolean;
    modules: IModules;
}

export const CustomerCard = ({ id, title, url, modules, cardComplete }: ICustomerCard) => {

    
    return (
        <article className="customer-card">
        <Link className="customer-card-body-link" to={`${url}/${id}`}></Link>
            <Heading as="h4">{title}</Heading>
            <section className="customer-card-body">
                <Link className="modules-link" to={`${url}/${id}/basicInformation`}><Icon color={modules.user ? "#00C9A7" : "#a0a4a7"} icon={userIcon} /></Link>
                <Link className="modules-link" to={`${url}/${id}/dependants`}><Icon color={modules.dependants ? "#00C9A7" : "#000000"}  icon={babyIcon} /></Link>
                <Link className="modules-link" to={`${url}/${id}/income`}><Icon color={modules.income ? "#00C9A7" : "#00000"}  icon={donateIcon} /></Link>
                <Link className="modules-link" to={`${url}/${id}/debts`}><Icon color={modules.debt ? "#00C9A7" : "#00000"}  icon={landmarkIcon} /></Link>
                <Link className="modules-link" to={`${url}/${id}/insurances`}><Icon color={modules.insurance ? "#00C9A7" : "#00000"}  icon={balanceScale} /></Link>
                <Link className="modules-link" to={`${url}/${id}/retirement`}><Icon color={modules.retirement ? "#00C9A7" : "#00000"}  icon={caravanIcon} /></Link>
            </section>
            <section className="customer-card-footer">
                <button className="modules-link card-delete"><Icon icon={trashIcon} /></button>
                <button className="modules-link card-complete"><Icon color={cardComplete ? "#00C9A7" : "#00000"} icon={checkCircle} /></button>
            </section>
        </article>
    );
}
