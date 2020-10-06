import React from 'react';

interface IButton extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    onClick: (ev: React.MouseEvent<HTMLButtonElement>) => void;
    text: string;
    isDisabled?: () => boolean;
}

export const Button = ({onClick, text, isDisabled, ...rest}: IButton) => {
    return (
        <button className="button" onClick={onClick} disabled={isDisabled ? isDisabled() : false} {...rest}>
            {text}
        </button>
    );
}
