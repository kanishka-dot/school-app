export  const InputFieldParameter = [
  {
    id: 1,
    name:"firstname",
    label: "First name",
    type:"text",
    errorMessage:"Valid Name is required",
    pattern: /^[a-zA-Z]+$/,
    required:true
  },
  {
    id: 2,
    name:"lastname",
    label: "Last name",
    type:"text",
    errorMessage:"Valid Name is required",
    pattern: /^[a-zA-Z]+$/,
    required:true
  },
  {
    id: 3,
    name:"contactperson",
    label: "Contact Person",
    type:"text",
    errorMessage:"Valid Name is required",
    pattern:/^[a-zA-Z]+$/,
    required:true
  },
  {
    id: 4,
    name:"contactno",
    label: "Contact No",
    type:"text",
    errorMessage:"Valid Contact no is required",
    pattern:/^\d+$/,
    required:true
  },
  {
    id: 5,
    name:"email",
    label: "Email",
    type:"email",
    errorMessage:"Valid email is required",
    pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    required:true
  },
  {
    id: 6,
    name:"dob",
    label: "Date of Birth",
    type:"date",
    errorMessage:"Valid date of birth is required",
    pattern:/^\d{4}-\d{2}-\d{2}$/,
    required:true
  },
  {
    id: 7,
    name:"age",
    label: "Age",
    type:"text",
    errorMessage:"Age is not Valid",
    pattern:/^[0-9]{0,2}$/,
    required:true
  },
  {
    id: 8,
    name:"classroom",
    label: "Class Room",
    type:"select",
    errorMessage:"Class Room is required",
    pattern:/^(?=.*[a-z0-9])[a-z0-9!@#$%&*.]{7,}$/i,
    required:false,
  }
]

export const TabelCol =[
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
      name: "Contact Person"
  },
  {
      id: 4,
      name: "Contact No"
  },
  {
    id: 5,
    name: "Action"
},
]
