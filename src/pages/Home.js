import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import TourCard from '../components/TourCard'
import cities from "../data.json";

const Home = () => {
  return (
    <>
      <Container sx={{marginY: 5}} >
      {cities.map((city) => (
        <>          
          <Typography 
          variant="h5" 
          component="h2" 
          key={city.id}
          marginTop={5}
          marginBottom={3}
          >
            Top {city.name} Tours
          </Typography>
        <Grid container spacing={5}>
          {city.tours.map((tour) => (
            <TourCard tour={tour} key={tour.id} />
          ))}
        </Grid>
        </>
      ))}
      </Container>
    </>
  )
}

export default Home
