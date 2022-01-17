import React from 'react'
import { createTheme, Grid, Paper, Rating, ThemeProvider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { AccessTime } from '@mui/icons-material';

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: 'body2',
          },
          style: {
            fontSize: 11,
          }
        },
        {
          props: {
            variant: 'body3',
          },
          style: {
            fontSize: 9,
          }
        }
      ]
    }
  }
});

const TourCard = ({ tour }) => {
  return (
    <Grid item xs={6}  md={3}>
      <ThemeProvider theme={theme}> 
        <Paper elevation={3}>
          <img 
            src={tour.image}
            alt="" 
            className='img'
          />
          <Box paddingX={1}>
            <Typography variant="subtitle1" component="h2">
              {tour.name}
            </Typography>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
              <AccessTime sx={{width: 12.5}} />
              <Typography variant='body2' component="p" marginLeft={0.5}>
              {tour.duration} {tour.duration > 1 ? 'hours' : 'hour'}
              </Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center'}} marginTop={3}>
              <Rating name="read-only" value={tour.rating} readOnly precision={0.5} size='small'/>
              <Typography variant='body2' component="p" marginLeft={0.5}>
                {tour.rating}
              </Typography>
              <Typography variant='body2' component="p" marginLeft={0.5}>
                {tour.reviews} reviews
              </Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center'}} marginTop={0}>
              <Typography variant='h6' component="h3" marginTop={0}>
                From ${tour.price}
              </Typography> 
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  )
}

export default TourCard
