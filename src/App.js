import { useState } from "react";
import { Ciudad } from "./components/Ciudad";
import { Form } from "./components/Form";
import {Container, Typography, Box} from '@mui/material';
import { NavBar } from "./components/NavBar";

function App() {

  const [query, setQuery] = useState([]);

  return (
    <>
      <NavBar/>
      <Container>
          <Box sx={{ my: 5, py: 3, textAlign: 'center', boxShadow: 3, borderRadius: 2}}>
              <Typography variant="h5">Consulta su clima</Typography>
          </Box>
          <Form setQuery={ setQuery }/>
          <Box sx={{my:4}}>
            <hr />
          </Box>
          <Box sx={{ textAlign: "center" }}>
            { 
              query.length === 0 && 
              <Typography variant="h4">Busca una ciudad</Typography>
            }
            {
              query.map( query => (
                <Ciudad key={query} query={query}/>
              ))
            }
          </Box>
      </Container>
    </>
  );
}

export default App;
