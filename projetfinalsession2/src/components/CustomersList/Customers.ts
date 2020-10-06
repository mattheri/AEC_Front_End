interface IModules {
    [key: string]: boolean;
    user: boolean;
    dependants: boolean;
    income: boolean;
    debt: boolean;
    insurance: boolean;
    retirement: boolean;
}

interface ICustomers {
    id: string;
    name: string;
    lastname: string;
    completed: boolean;
    modules: IModules
}

export const customers: ICustomers[] = [
    {
        id: "1",
        name: "Ferdinand",
        lastname: "Crush",
        completed: false,
        modules: {
            user: false,
            dependants: false,
            income: false,
            debt: false,
            insurance: false,
            retirement: false
        },
    },
    {
        id: "2",
        name: "Ferdinansadasd",
        lastname: "Crushasdas",
        completed: false,
        modules: {
            user: true,
            dependants: false,
            income: false,
            debt: false,
            insurance: false,
            retirement: false
        },
    },
    {
        id: "3",
        name: "Ferdinand",
        lastname: "Crush",
        completed: true,
        modules: {
            user: true,
            dependants: false,
            income: false,
            debt: false,
            insurance: false,
            retirement: false
        },
    },
    {
        id: "4",
        name: "Ferdinand",
        lastname: "Crush",
        completed: false,
        modules: {
            user: true,
            dependants: false,
            income: false,
            debt: false,
            insurance: false,
            retirement: false
        },
    },
    {
        id: "5",
        name: "Ferdinand",
        lastname: "Crush",
        completed: false,
        modules: {
            user: true,
            dependants: false,
            income: false,
            debt: false,
            insurance: false,
            retirement: false
        },
    },
    {
        id: "6",
        name: "Ferdinand",
        lastname: "Crush",
        completed: false,
        modules: {
            user: true,
            dependants: false,
            income: false,
            debt: false,
            insurance: false,
            retirement: false
        },
    },
    {
        id: "7",
        name: "Ferdinand",
        lastname: "Crush",
        completed: false,
        modules: {
            user: true,
            dependants: false,
            income: false,
            debt: false,
            insurance: false,
            retirement: false
        },
    },
    {
        id: "8",
        name: "Ferdinand",
        lastname: "Crush",
        completed: false,
        modules: {
            user: true,
            dependants: true,
            income: false,
            debt: false,
            insurance: false,
            retirement: false
        },
    },
    {
        id: "9",
        name: "Ferdinand",
        lastname: "Crush",
        completed: false,
        modules: {
            user: true,
            dependants: false,
            income: false,
            debt: false,
            insurance: false,
            retirement: false
        },
    },
    {
        id: "10",
        name: "Ferdinand",
        lastname: "Crush",
        completed: false,
        modules: {
            user: true,
            dependants: false,
            income: false,
            debt: false,
            insurance: false,
            retirement: false
        },
    },
    {
        id: "11",
        name: "Ferdinand",
        lastname: "Crush",
        completed: false,
        modules: {
            user: true,
            dependants: false,
            income: false,
            debt: false,
            insurance: false,
            retirement: false
        },
    },
    {
        id: "12",
        name: "Ferdinand",
        lastname: "Crush",
        completed: false,
        modules: {
            user: true,
            dependants: false,
            income: false,
            debt: false,
            insurance: false,
            retirement: false
        },
    },
    {
        id: "13",
        name: "Ferdinand",
        lastname: "Crush",
        completed: false,
        modules: {
            user: true,
            dependants: false,
            income: false,
            debt: false,
            insurance: false,
            retirement: false
        },
    },
]

// export const customers: {
//     id: string,
//     name: string,
//     lastname: string
// }[] = [];