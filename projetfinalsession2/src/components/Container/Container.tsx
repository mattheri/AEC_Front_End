import React from 'react';

interface IContainer extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: React.ReactNode;
    as?: "div" | "section" | "article";
    fluid?: boolean;
    classname?: string;
}

export const Container = ({as: As = "section", children, fluid, classname, ...rest}: IContainer) => {
    
    return (
        <As className={`${fluid ? "fluid" : "container"}${classname ? ` ${classname}` : ""}`} {...rest}>
            {children}
        </As>
    );
}