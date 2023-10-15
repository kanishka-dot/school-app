export const validateAllFields = (formFields, requiredFields) =>{
    for (let index = 0; index < formFields.length; index++) {
        if (formFields[index].required) {
            if (requiredFields[formFields[index].name] === "") {
                return false;
            }
        }
    }
    return true;
}