import React from 'react'
import { useForm } from '../hooks/useForm'
import { TextField, Button, Box} from '@mui/material';

export const Form = ({setQuery}) => {

    const [formValues, handleInputChange, reset] = useForm({
        ciudad: '',
    });

    const { ciudad } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        setQuery([formValues.ciudad]);
        reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Cuidad"
                name="ciudad"
                autoComplete="off"
                fullWidth={true}
                value={ciudad}
                onChange={ handleInputChange}
                required={true}
            />
            <Box sx={{ m: "1rem"}}>
                <Button
                    variant="contained"
                    type="submit"
                    color="success"
                    fullWidth={true}
                    size="large"
                >
                    Buscar
                </Button>
            </Box>
        </form>      
    )
}
