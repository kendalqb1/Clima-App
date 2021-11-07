export const getClima = async (query) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(query)}&units=metric&APPID=1eaa3820bc3013388d477d0058e018fb&lang=sp`;
    const resp = await fetch(url);
    const data = await resp.json();

    return data;

} 