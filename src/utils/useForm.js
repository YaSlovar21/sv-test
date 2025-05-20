import React from "react";

export function useForm(initiaState) {
    const initialStateF = initiaState;
    const [values, setValues] = React.useState(initiaState);

    const handleInputChange = (evt) => {
        setValues({
            ...values,
            [evt.target.name]: evt.target.value
        });
    }
    const resetForm =() =>{
        setValues(initialStateF)
    }
    return {
        values,
        setValues,
        resetForm,
        handleInputChange
    }
}