export const InputFieldParameter = [
    {
        id: 1,
        name: "teachername",
        label: "Teacher Name",
        type: "select",
        errorMessage: "Valid Name is required",
        pattern: /^[a-zA-Z]+$/,
        required: true
    },
    {
        id: 2,
        name: "classroomname",
        label: "Classroom Name",
        type: "select",
        errorMessage: "Valid Name is required",
        pattern: /^[a-zA-Z]+$/,
        required: true
    },
    {
        id: 3,
        name: "subjecname",
        label: "subject Name",
        type: "select",
        errorMessage: "Valid Name is required",
        pattern: /^[a-zA-Z]+$/,
        required: true
    },
]

export const TabelCol = [
    {
        id: 1,
        name: "Classroom Name"
    },
]
