import { Button, Card, CardContent, CardMedia, Collapse, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'


export const DetalleCuidad = ({data}) => {
    const { clouds, coord, main, name, sys, weather, wind } = data;
    const [expanded, setExpanded] = useState(false)
    const handleExpanded = () => {
        setExpanded(!expanded);
    }
    const handleDecimal = num => Math.round(num);
    const handleWindDirection = (direction) => {
        let directions = ['Norte', 'Nor Este', 'Este', 'Sur Este', 'Sur', 'Sur Oeste', 'Oeste', 'Nor Oeste'];
        direction += 22.5;
        if (direction < 0)
            direction = 360 - Math.abs(direction) % 360;
        else
            direction = direction % 360;
        let w = parseInt(direction / 45);
        return `${directions[w]}`;
    }

    return (
        <Box sx={{display: 'flex', justifyContent: 'center', mb: 5}}>
            <Card sx = {{  width:{ md: "50%", sm: "90%", xs: "100%" }, boxShadow: 3, borderRadius: 2}} >
                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                    <CardMedia
                        component="img"
                        sx={{width: 150}}
                        image={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                        alt={weather[0].main}
                    >
                    </CardMedia>  
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}, {sys.country}
                        </Typography> 
                        <Typography variant="subtitle1" color="text.secondary">
                            {weather[0].main}, {weather[0].description}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            Temp: {handleDecimal(main.temp)}°C
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            Min: {handleDecimal(main.temp_min)}°C, Max: {handleDecimal(main.temp_max)}°C
                        </Typography>
                    </CardContent>
                </Box> 
                <Button
                    onClick={handleExpanded}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    Ver mas
                </Button>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <Box sx={{ my: 3,}}>
                        <Typography gutterBottom variant="h6" component="div">
                            Informacion Adicional
                        </Typography> 
                        <Typography variant="subtitle1" color="text.secondary">
                            Lat: {coord.lat}°, Lon: {coord.lon}°
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            Temp Percibida: {handleDecimal(main.feels_like)}°C
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            Viento: {wind.speed}m/s, {handleWindDirection(wind.deg)}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            Presion: {main.pressure}hPa, Humedad: {main.humidity}%
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            Nubosidad: {clouds.all}%
                        </Typography>
                    </Box>
                </Collapse>
            </Card>
        </Box>
    )
}
