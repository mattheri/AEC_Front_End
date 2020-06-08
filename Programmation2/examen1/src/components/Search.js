import React from 'react';
import { CustomForm } from './CustomForm';
import { Input } from './Input';
import { useSearch } from './useSearch';

export const Search = (props) => {

    const results = useSearch(props.value);
    let [searchResults, setSearchResults] = props.state;

    React.useEffect(() => {
        searchResults["results"] = results;
        setSearchResults(prev => (Object.assign({}, prev, searchResults)));
    }, [props.value]);

    return (
        <CustomForm state={props.state}>
            <Input
                placeholder="Try typing your favorite artist..."
                id="navbar-query"
                autoComplete="off"
                noLabel
                value={props.value} />
        </CustomForm>
    );
}
