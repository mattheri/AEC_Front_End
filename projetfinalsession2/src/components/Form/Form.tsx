import React, { HTMLAttributes } from 'react';

interface IForm extends React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
    stateToUpdate: [{ [key: string]: string }, React.Dispatch<React.SetStateAction<{ [key: string]: string }>>];
    children: JSX.Element | JSX.Element[];
}

export const Form = ({ stateToUpdate, children, ...rest }: IForm): JSX.Element => {

    const [state, setState] = stateToUpdate;

    const handleUpdateState = (value: string, id: string) => {
        const property = id.split("-")[1];
        state[property] = value;
        setState(previousState => Object.assign({}, previousState, state));
        console.log(state);
    }

    const inputChildren = React.Children.map(children, child => React.cloneElement(child, { change: handleUpdateState, ...child.props }));
    
    return (
        <form {...rest}>
            {inputChildren}
        </form>
    );
}