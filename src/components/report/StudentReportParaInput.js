export const InputFieldParameter = [
    {
        id: 1,
        name: "name",
        label: "Student name",
        type: "select",
        errorMessage: "Valid Name is required",
        pattern: /^[a-zA-Z]+$/,
        required: true
    },
    {
        id: 2,
        name: "classroom",
        label: "Class Room",
        type: "text",
        errorMessage: "Class Room is required",
        pattern: /^(?=.*[a-z0-9])[a-z0-9!@#$%&*.]{7,}$/i,
        required: false,
    },

    {
        id: 3,
        name: "contactperson",
        label: "Contact Person",
        type: "text",
        errorMessage: "Valid Name is required",
        pattern: /^[a-zA-Z]+$/,
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
    },
    {
        id: 5,
        name: "contactno",
        label: "Contact No",
        type: "text",
        errorMessage: "Valid Contact no is required",
        pattern: /^\d+$/,
        required: true
    },

    {
        id: 6,
        name: "dob",
        label: "Date of Birth",
        type: "date",
        errorMessage: "Valid date of birth is required",
        pattern: /^\d{4}-\d{2}-\d{2}$/,
        required: true
    },

]

export const TabelCol = [
    {
        id: 1,
        name: "Subject"
    },
    {
        id: 2,
        name: "Teacher"
    }
]
