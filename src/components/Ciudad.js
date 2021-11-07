import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { DetalleCuidad } from './DetalleCuidad';
import { CircularProgress } from '@mui/material';

export const Ciudad = ({query}) => {
    
    const { data, loading } = useFetch(query);

    return (
        <div>
            {
                loading ? 
                <CircularProgress 
                    sx={{textAlign: 'center'}}
                />
                :
                data.cod === '404' ?
                <h2>Cuidad no existe</h2> :
                <DetalleCuidad data={data} />
            }
        </div>
    )
}
