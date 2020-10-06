import { router } from "../../router";

export const locations = {
    [router.home]: [
        {
            text: "Home",
            path: router.home
        },
        {
            text: "Login",
            path: router.login
        },
        {
            text: "Register",
            path: router.register
        },
        {
            text: "Customers",
            path: router.customers
        }
    ],
    [router.login]: [
        {
            text: "Home",
            path: router.home
        },
        {
            text: "Register",
            path: router.register
        },
        {
            text: "Customers",
            path: router.customers
        }
    ],
    [router.register]: [
        {
            text: "Home",
            path: router.home
        },
        {
            text: "Login",
            path: router.login
        },
        {
            text: "Customers",
            path: router.customers
        }
    ],
    [router.customers]: [
        {
            text: "Home",
            path: router.home
        },
        {
            text: "Disconnect",
            path: router.login
        },
        {
            text: "Create New Customer",
            path: router.register
        },
        {
            text: "Go To Last Customer",
            path: router.register
        }
    ],
    [`${router.customers}${router.basicInformation}`]: [
        {
            text: "Home",
            path: router.home
        },
        {
            text: "Disconnect",
            path: router.login
        },
        {
            text: "Create New Customer",
            path: router.register
        },
        {
            text: "Go To Last Customer",
            path: router.register
        }
    ]
}