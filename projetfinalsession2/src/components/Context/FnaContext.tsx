import React from 'react';

type User = {
    name: string;
    lastname: string;
    dob: string;
    age: number;
    lifeExpectancy: number;
    civicNumber: string;
    street: string;
    city: string;
    country: string;
    postalCode: string;
}

type Dependant = {
    name: string;
    lastname: string;
    dob: string;
    age: string;
}

type Income = {
    gross: number;
    net: number;
    provincialTax: number;
    federalTax: number;
    EI: number;
    RRQ: number;
    RQAP: number;
}

type Debt = {
    name: string;
    principal: number;
    rate: number;
    numberOfPayments: number;
    interestOverTime: number[];
    principalOverTime: number[];
    totalInterestPaid: number;
}

type Insurance = {
    name: string;
    amount: number;
    waitingPeriod: number;
    waitingPeriodUnit: "days" | "weeks" | "months";
    type: "invalidity" | "life" | "illness";
    frequency: number;
    frequencyUnits: "weekly" | "monthly" | "once";
    comments: string;
}

type RetirementIncome = Omit<Income, "EI" | "RRQ" | "RQAP" | "completed">;

type Retirement = {
    goal: number;
    age: number;
    income: RetirementIncome[];
}

type Modules = {
    user: {
        u?: User;
        completed: boolean;
    };
    dependants: {
        d?: Dependant[];
        completed: boolean;
    };
    income: {
        i?: Income;
        completed: boolean;
    };
    debt: {
        d?: Debt[];
        completed: boolean;
    };
    insurance: {
        i?: Insurance[];
        completed: boolean;
    };
    retirement: {
        r?: Retirement;
        completed: boolean;
    };
}

type Customers = {
    id: string;
    completed: boolean;
    modules: Modules
}

type FNAContext = {
    FNA: Customers;
};

export type IAppState = [FNAContext, React.Dispatch<React.SetStateAction<FNAContext>>];

export let appContext: React.Context<IAppState>;

export const AppContextProvider = (props: { children: JSX.Element | JSX.Element[] }) => {
    
    const [appState, setAppState] = React.useState<FNAContext>({
        FNA: {
            completed: false,
            id: "",
            modules: {
                user: {
                    completed: false
                },
                dependants: {
                    completed: false
                },
                income: {
                    completed: false
                },
                debt: {
                    completed: false
                },
                insurance: {
                    completed: false
                },
                retirement: {
                    completed: false
                }
            }
        }
    });

    appContext = React.createContext<[FNAContext, React.Dispatch<React.SetStateAction<FNAContext>>]>([appState, setAppState]);
    
    return (
        <appContext.Provider value={[appState, setAppState]}>
            {props.children}
        </appContext.Provider>
    );
}