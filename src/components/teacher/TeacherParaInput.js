export const InputFieldParameter = [
    {
        id: 1,
        name: "firstname",
        label: "First name",
        type: "text",
        errorMessage: "Valid Name is required",
        pattern: /^[a-zA-Z]+$/,
        required: true
    },
    {
        id: 2,
        name: "lastname",
        label: "Last name",
        type: "text",
        errorMessage: "Valid Name is required",
        pattern: /^[a-zA-Z]+$/,
        required: true
    },
    {
        id: 3,
        name: "contactno",
        label: "Contact No",
        type: "text",
        errorMessage: "Valid Contact no is required",
        pattern: /^\d+$/,
        required: true
    },
    {
        id: 4,
        name: "email",
        label: "Email",
        type: "email",
        errorMessage: "Valid email is required",
        pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        required: true
    }
]

export const TabelCol = [
    {
        id: 1,
        name: "First Name"
    },
    {
        id: 2,
        name: "Last Name"
    },
    {
        id: 3,
        name: "Contact No"
    },
    {
        id: 4,
        name: "Email"
    },
    {
        id: 5,
        name: "Action"
    },
]
