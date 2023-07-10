import React, { useState, useEffect, useRef } from 'react';
import './iconList.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import { 
  faChevronLeft, faChevronRight, 
  faHouse, faHelmetSafety,
  faHouseFloodWater,faLandmarkDome,
  faHotel, faBabyCarriage,faUmbrellaBeach,
  faBed, faLuggageCart,faCashRegister,
  faCocktail,faToiletsPortable, faWindowClose,
  faEarthOceania, faDove, faWheelchairMove,faBookBible,
  faLandmark,faSwimmingPool,
} from '@fortawesome/free-solid-svg-icons';
import { Box, Button, Container, IconButton, Tooltip, Typography } from '@mui/material';
import { Insights } from '@mui/icons-material';
import { AppBar} from '@material-ui/core';

const icons = [
  { name: 'Shared home', icon: faHouse },
  { name: 'OMG!', icon: faHelmetSafety },
  { name: 'Amazing pools', icon: faSwimmingPool },
  { name: 'Rooms', icon: faCocktail },
  { name: 'Amazing pools', icon: faHotel },
  { name: 'Mansions', icon: faLandmarkDome },
  { name: 'Landmark', icon: faLandmark },
  { name: 'Beach', icon: faUmbrellaBeach },
  { name: 'Icon cities', icon: faWindowClose },
  { name: 'Traveling', icon: faLuggageCart },
  { name: 'Domes', icon: faBabyCarriage },
  { name: 'Boats', icon: faHouseFloodWater },
  { name: 'Islands', icon: faWheelchairMove },
  { name: 'Historical homes', icon: faEarthOceania },
  { name: 'Good attendants', icon: faCashRegister },
]

const IconList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);
  const listRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    const containerWidth = listRef.current.parentNode.offsetWidth;
    const iconWidth = iconRef.current.offsetWidth;
    const visibleIcons = Math.floor(containerWidth / iconWidth);
    const scrollAmount = visibleIcons * iconWidth;
    const maxScrollLeft = listRef.current.scrollWidth - containerWidth;
    const newScrollLeft = Math.min(scrollAmount * currentIndex, maxScrollLeft);
    listRef.current.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth',
    });
    setShowLeftButton(newScrollLeft > 0);
    setShowRightButton(newScrollLeft < maxScrollLeft);
  }, [currentIndex]);



  const handleScrollLeft = () => {
    const containerWidth = listRef.current.parentNode.offsetWidth;
    const iconWidth = iconRef.current.offsetWidth;
    const scrollAmount = Math.floor(containerWidth / iconWidth) * iconWidth;
    listRef.current.scrollTo({
      left: listRef.current.scrollLeft - scrollAmount,
      behavior: 'smooth',
    });
    setShowRightButton(true);
    setShowLeftButton(listRef.current.scrollLeft - scrollAmount > 0);
  };

  const handleScrollRight = () => {
    const containerWidth = listRef.current.parentNode.offsetWidth;
    const iconWidth = iconRef.current.offsetWidth;
    const scrollAmount = Math.floor(containerWidth / iconWidth) * iconWidth;
    listRef.current.scrollTo({
      left: listRef.current.scrollLeft + scrollAmount,
      behavior: 'smooth',
    });
    setShowLeftButton(true);
    setShowRightButton(listRef.current.scrollLeft + 2 * scrollAmount < listRef.current.scrollWidth - containerWidth);
  };

  return (
    <AppBar style={{
      marginTop:65,
      backgroundColor: 'white',
      boxShadow:'none',
      paddingTop: 10,
    }}>
      <Container maxWidth="100%" sx={{backgroundColor:'#fff', padding:'0px 80px!important'}}>
      <Box style={{ 
        display: 'flex', 
        alignItems: 'center',
        padding:'0px', 
        margin:'0px 0px' 
        }}>
        {showLeftButton && (
          <Tooltip title="Back">
            <Typography  onClick={handleScrollLeft} sx={{px:2}}>

            <FontAwesomeIcon icon={faChevronLeft}  
            style={{
              fontSize:14,
              padding:'4px',width:'15px', 
              color:'black',borderRadius: '50%', 
              border:'1px solid #D3D3D3',
              cursor:'pointer', 
              }}/>
            </Typography>
          </Tooltip>

        )}
        <Box
          ref={listRef}
          style={{
            display: 'flex',
            flexWrap: 'nowrap',
            overflow: 'hidden',
            width: '100%',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {icons.map((icon, index) => (
            <Link to="/" className='link' key={index} style={{ flex: '0 0 auto', margin:'5px 35px 5px 0px'}}>
              <Box ref={index === currentIndex ? iconRef : null} sx={{display:'flex', justifyContent:'center', color:'text.secondary'}}>
                <FontAwesomeIcon icon={icon.icon} size="1x" />
              </Box>
              <Typography sx={{fontSize: 14, fontWeight:'450', py:1, color:'text.secondary'}} >{icon.name}</Typography>
            </Link>
          ))}
        </Box>
        {showRightButton && (
          <Tooltip title = 'Next'>
          <Typography onClick={handleScrollRight} sx={{px:2}}>
            <FontAwesomeIcon icon={faChevronRight} 
            style={{ 
              fontSize:14,
              padding:'4px',width:'15px', 
              color:'black',borderRadius: '50%', 
              border:'1px solid #D3D3D3',
              cursor:'pointer', 
              }} />
          </Typography>
          </Tooltip>

        )}       
          <IconButton 
          sx={{ 
            mx:'auto',     
            px:1,
            py:'12px',
            borderRadius: '10px',
            border: '1px solid #D3D3D3'}}>
            <Insights sx={{fontSize:14, color:'black'}}/>
            <Typography sx={{fontSize:13, color:'text.primary',px:1, fontWeight:'bold'}}>Filters</Typography>
          </IconButton>
     
      </Box>
      </Container>
    </AppBar>

  

  );
};

export default IconList;
