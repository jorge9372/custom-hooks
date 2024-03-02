import { useState } from "react";

export const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm);

    const onInputChange = (e) => {
        const { name, value } = e.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const onResetForm= () => {
        setFormState(initialForm)

    }

    return {
        ...formState, // de esta manera desestructuramos las propiedades directamente del formState
        formState,
        onInputChange,
        onResetForm
    };
};
