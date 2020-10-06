import React from 'react';
import { customers } from "./Customers";
import { CustomerCard } from '../CustomerCard/CustomerCard';
import { Container } from '../Container/Container';
import { Form } from '../Form/Form';
import { Input } from '../Input/Input';
import { BlockReveal } from '../BlockReveal/BlockReveal';
import { Heading } from '../Heading/Heading';
import { useRouteMatch } from 'react-router-dom';

export const CustomerList = () => {

    const [search, setSearch] = React.useState<{ [key: string]: string }>({ search: "" });
    const [customerList, setCustomerList] = React.useState<any[]>();
    const { url } = useRouteMatch();

    const handleSearch = (query: string) => {
        const q = query
            .split(" ")
            .filter(q => q.includes("completed" || "not-completed"));
        const searchWithoutWq = q.map(s => query.replace(s, "")).join("").replace(" ", "");
        const cs = customers.filter(c => c.name.toLowerCase()
            .includes(searchWithoutWq.toLowerCase() || query.toLowerCase()) || c.lastname.toLowerCase().includes(searchWithoutWq.toLowerCase() || query.toLowerCase()));
        const wq = handleWildCards(query.toLowerCase());
        let output = cs;
        output = wq ? [...new Set(cs.concat(wq))] : cs;
        if (cs.length && wq) {
            output = cs.filter(c => wq.filter(q => q === c));
        }
        setCustomerList(output);
    }
    

    const handleWildCards = (query: string) => {
        const wildcardquery = query
            .split(" ")
            .filter(q => q.includes("completed" || "not-completed"))
            .map(q => q.split(/=/));
        if (wildcardquery[0]) {
            const cs = wildcardquery.map(wq => {
                return customers.filter(c => c.modules[wq[0]] === (wq[1] === "completed" ? true : false));
            })
            const queryResults = [];
            for (let i = 0; i < cs.length; i++) {
                for (let y = 0; y < cs[i].length; y++) {
                    queryResults.push(cs[i][y]);
                }
            }
            const output = [...new Set(queryResults)];
            return output;
        }
    };

    React.useEffect(() => {
        setCustomerList(customers);
        console.log(url);
    }, []);

    return (
        <Container fluid classname="customers-list">
            <Container>
                <Form onChange={() => handleSearch(search.search)} stateToUpdate={[search, setSearch]}>
                    <Input id="customers-search" label="Search" value={search.search} muted="You can try searching by module. Ex.: user=completed" />
                </Form>
            </Container>
            <Container>
                {customerList && customerList.map(c => <CustomerCard id={c.id} modules={c.modules} title={`${c.name} ${c.lastname}`} url={url} cardComplete={c.completed} key={c.id} />)}
            </Container>
        </Container>
    );
}
