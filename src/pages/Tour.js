import { BottomNavigation, Box, Container, Paper, Typography } from '@mui/material'
import React from 'react'
import CustomizedAccordions from '../components/Accordion'
import BasicModal from '../components/Modal'
import QuiltedImageList from '../QuiltedImageList'

const Tour = () => {
  return (
    <Container sx={{ width:900 }}>
      <Typography variant='h3' component='h1'marginTop={3} >
        Explore the World
      </Typography>
      <Box marginTop={3} sx={{display:"flex"}} >
        <img src="https://media.timeout.com/images/105124791/750/422/image.jpg" alt="" height={325}/>
        <QuiltedImageList />  
      </Box>
      <Box>
        <Typography variant='h6' component='h4'marginTop={3} >
          About this ticket
        </Typography>
        <Typography variant='paragraph' component='p'marginTop={3} >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor molestiae corporis labore laborum, sapiente sunt cum modi quis facilis autem, saepe ad possimus magni dignissimos praesentium dolore nam ipsa excepturi. Quia cupiditate aut perspiciatis adipisci commodi exercitationem labore reprehenderit facilis.
        </Typography>
      </Box>
      <Box marginBottom={10} >
        <Typography variant='h6' component='h4' marginTop={3} marginBottom={2} >
          Frequently Asked Questions
        </Typography>
        <CustomizedAccordions />
      </Box>
       {/* Fixed positioning */}
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation >
          <BasicModal />
        </BottomNavigation>
      </Paper>
    </Container>
  )
}

export default Tour
