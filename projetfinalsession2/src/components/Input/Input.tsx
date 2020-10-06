import React, { HTMLAttributes } from 'react';

interface IInput extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label: string;
    id: string;
    value: string;
    change?: (value: string, id: string) => void;
    muted?: string;
}

export const Input = ({ label, id, value, change, muted, ...rest }: IInput) => {
    
    const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        const value = ev.currentTarget.value;
        const id = ev.currentTarget.id
        if (value.length) ev.currentTarget.classList.add("not-empty");
        if (value.length < 1) ev.currentTarget.classList.remove("not-empty");
        if (change) return change(value, id);
    }
    
    return (
        <div className="input">
            <input onChange={handleChange} id={id} name={id} {...rest} value={value} />
            <label htmlFor={id}>{label}</label>
            {muted && <small>{muted}</small>}
        </div>
    );
}
