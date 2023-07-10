import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import Favorite from '@mui/icons-material/Favorite';
import { makeStyles } from '@material-ui/core/styles';
import image1 from '../../assets/1.jpg';
import image2 from '../../assets/2.jpg';
import image3 from '../../assets/3.jpg';
import image4 from '../../assets/4.jpg';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  useMediaQuery,
  useTheme,
  Container,
  Box,
} from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
import { StarRate } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({

  card: {
    height: 330,
    padding:'0',
    display: 'flex',
    flexDirection: 'column',
    borderRadius:'10px',
    boxShadow:'none',
    position: 'relative',
  },
  img:{
    width: '100%',
    height: 250,
    position: 'relative',


  },

  cardContent: {
    flexGrow: 1,
    padding:0,
    position: 'relative',
    width: '100%'
  },
  carousel:{
    position: 'relative',
    height: 220,
    width: '100%',
    padding:0,
    borderRadius:'10px',
  },
  iconContainer: {
    position: 'absolute',
    top:'50%',
    left:'50%',
    transform: 'translate(110%, -450%)',
    zIndex: 1,
    cursor:'pointer'
  },
  carouselIndicatorContainer: {
    position: 'absolute',
    bottom: theme.spacing(1),
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    pointerEvents: 'none',
    zIndex:1,
  },
  carouselIndicator: {
    width: theme.spacing(1.5),
    height: theme.spacing(1.5),
    borderRadius: '50%',
    backgroundColor: '#fff',
    opacity: 0.7,
    margin: theme.spacing(0, 0.5),
    transition: 'opacity 0.3s',
  },
  activeCarouselIndicator: {
    opacity: 1,
  },

  typography:{
    fontSize:'11px',
  }

}));

const catImages = [
  image1,
  image2,
  image3,
  image4
];
const houseDescription=[
    {
        name:'5 Bedroom Dulex in Ajah', 
        host:'Hosted by George',
        date : 'July 10 - 12',
        cost: '$79',
        rate: '5.0'
    }
]

const CardList = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isExtraSmall = useMediaQuery(theme.breakpoints.down('xs'));
  const isSmall = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isMediumOrLarger = useMediaQuery(theme.breakpoints.up('md'));

  const cardsPerRow = isExtraSmall
    ? 1
    : isSmall
    ? 2
    : isMediumOrLarger
    ? 4
    : 4; // Fallback to 4 for desktop devices

  return (
    <Box style={{marginTop:150, padding:0}}>
      <Container maxWidth="lg">
      <Box mt={2} mb={4} style={{padding:'0px 24px'}}>
        <Grid container spacing={2}>
          {Array.from({ length: 20 }).map((_, index) => (
            <Grid key={index} item xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>

                  <Carousel className={classes.carousel} 
                    indicatorContainerProps={{
                      className: classes.carouselIndicatorContainer,
                    }}
                    indicatorIconButtonProps={{
                      className: classes.carouselIndicator,
                    }}>                              

                    {catImages.map((catImage, catIndex) => (
                      <Box key={catIndex}>
                      <img className={classes.img}
                        src={catImage}
                        alt={`Cat ${catIndex + 1}`}
                        width={'100%'}
                        height={'auto'}
                      />  
                        <IconButton className={classes.iconContainer}>
                        <Checkbox icon={<FavoriteBorder sx={{color:'white' }} />} checkedIcon={<Favorite sx={{color:'red'}}/>} />
                      </IconButton>                    
                      </Box>
                      
                    ))}
                    
                  </Carousel>
                  {
                    houseDescription.map((houseDetail, houseIndex) => (
                        <Box key={houseIndex}
                        style={{marginTop:'10px'}}>

                        <Typography className={classes.typography} 
                        style={{
                          display:'flex', 
                          justifyContent:'start', 
                          width:'100%',}}>
                            <b>  {houseDetail.name}</b>
                        
                        <Typography className={classes.typography} 
                        style={{
                          margin:'0px 0px 0px 76px',
                          }} >
                           <StarRate sx={{fontSize:'11px'}}/>
                           {houseDetail.rate}
                           
                           </Typography>
                        
                        </Typography>

                        <Typography className={classes.typography}>{houseDetail.host}
                        </Typography>

                        <Typography className={classes.typography}>{houseDetail.date}</Typography>
                        <Typography className={classes.typography}> <b>{houseDetail.cost}</b> night</Typography>

                        </Box>

                    ))
                  }
                  
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      </Container>

    </Box>
  );
};

export default CardList;
