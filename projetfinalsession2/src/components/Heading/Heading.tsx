import React, { ReactElement, ReactComponentElement } from 'react';

interface IHeading extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    text?: string;
    children?: React.ReactNode;
}

export const Heading = ({as: As = "h1", text, children, ...rest}: IHeading) => {
    return (
        <As className={`heading ${As}`} {...rest}>
            {text && text}
            {children && children}
        </As>
    );
}