import { useEffect, useState } from 'react'
import { getClima } from '../helper/getClima';

export const useFetch = (query) => {

    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    });

    useEffect( () => {
        getClima(query)
            .then(clima => {
                setState({
                    data: clima,
                    loading: false,
                    error: null
                })
            })
    }, [query]);

    return state;
}