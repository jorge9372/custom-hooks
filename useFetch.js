import { useEffect, useState } from 'react';

export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    });
    const getFetch = async () => {
        setState({
            ...state,
            isLoading: true,
        });

        const resp = await fetch(url);
        const data = await resp.json();

        setState({
            data,
            isLoading: false,
            hasError: null,
        });
    };

    useEffect(() => {
        getFetch();
    }, [url]);

    return {
        /*
        Aca pudiese retornar directamente el state y funciona, pero se hace de esta manera porque aunque suene retornante,
        facilita el trabajo cuando se quiere agregar otros elementos para retornar que no esten dentro del objeto asignado al
        state
        */
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError

    };
};
