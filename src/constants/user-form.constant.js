export const USER_FROM_FIELDS = [
    {
        id:1,
        displayName: "1",
        description: "Account",
        className: "account",
        groups: {
            groupId: 1,
            displayName: "Account Information",
            fields: [
                {
                    id: 1,
                    name: "Customer Id",
                    value: "",
                    keyToPost: "customerId"
                },
                {
                    id: 2,
                    name: "Email",
                    value: "",
                    keyToPost: "email"
                },
                {
                    id: 3,
                    name: "Plan Name",
                    value: "",
                    keyToPost: "planName"
                }
            ]
        }
    },

    {
        id: 2,
        displayName: "2",
        className: "personal",
        description: "Billing Info",
        groups: {
            groupId: 1,
            displayName: "Billing Information",
            fields: [
                {
                    id: 4,
                    name: "Street",
                    value: "",
                    keyToPost: "street"
                },
                {
                    id: 5,
                    name: "State",
                    value: "",
                    keyToPost: "state"
                },
                {
                    id: 6,
                    name: "City",
                    value: "",
                    keyToPost: "city"
                },
                {
                    id: 7,
                    name: "Country",
                    value: "",
                    keyToPost: "Country"
                }
            ]
        }
    },
    
    {
        id: 3,
        displayName: "3",
        className: "payment",
        description: "Payment Info",
        groups: {
            groupId: 1,
            displayName: "Payment Information",
            fields: [
                {
                    id: 12,
                    name: "Card No",
                    value: "",
                    keyToPost: "cardNo"
                },
                {
                    id: 13,
                    name: "Expiry",
                    value: "",
                    keyToPost: "expiry"
                },
                {
                    id: 14,
                    name: "CVV",
                    value: "",
                    keyToPost: "cvv"
                }
            ]
        }
    },
    {
        id: 4,
        displayName: "4",
        className: "confirm",
        description: "Confirmation",
        groups: {
            groupId: 1,
            displayName: "Payment Information",
            fields: []
        }
    }
];

export const STAGES = {
    CONFIRM: "confirm"
}