import React from 'react';
import ResponsiveAppBar from '../components/Navbar/navbar';
import IconList from '../components/NAVBAR/iconList';
import { Box, Container, Divider,Button } from '@mui/material';
import {Map} from '@mui/icons-material';
import CardList from '../components/CARDLIST/cardList';
import MapIntegrationButton from '../components/MapIntegration';

const Home = () => {
  return (
      
    <Box maxWidth="lg" p={0} sx={{padding:'0px',postion:'relative'}}>
    <ResponsiveAppBar/>
    <IconList/>
    <CardList/>
    <MapIntegrationButton/>
    </Box>
  )
}

export default Home;
