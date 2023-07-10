import React from 'react';
import './navbar.css';
import IconList from './iconList';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography'; 
import Badge from '@mui/material/Badge';
import {AccountCircle, HorizontalSplit, Language, SearchOutlined } from '@mui/icons-material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAirbnb } from '@fortawesome/free-brands-svg-icons';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    boxShadow:'none',
    borderBottom: '1px solid #D3D3D3',
  },
  topBar: {
    backgroundColor: 'white',
    boxShadow:'none'
  },
  bottomBar: {
    backgroundColor: '#2196f3',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  
}));


const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const commonStyles = {
  border: 1,
  borderRadius:0,
  borderColor: 'text.disabled',
};


const ResponsiveAppBar = () => {
  const classes = useStyles();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <div>
      <AppBar position="fixed" className={`${classes.appBar} ${classes.topBar}`}>
        <Container maxWidth="lg">
        <Toolbar >
   
          <Typography sx={{display: { xs: 'none', md: 'flex' }, mr: 1, ml:0}}>
          <FontAwesomeIcon icon={faAirbnb} style={{ fontSize: 30, color:'#FF5A5F'}} />          

          </Typography>
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              ml:0,
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 600,
              color:'#FF5A5F',
              textDecoration: 'none',
            }}
          >
            airbnb
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color= 'text.primary'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography sx={{display: { xs: 'flex', md: 'none' }, mr: 1 }}>
          <FontAwesomeIcon icon={faAirbnb} style={{  fontSize: 30, color:'#FF5A5F'}} />          

          </Typography>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 600,
              color:'#FF5A5F',
              textDecoration: 'none',
            
            }}
          >
            airbnb
          </Typography>
          <Box 
          sx={{ 
            display: { xs: 'none', md: 'flex' }, 
            justifyContent:'center',
            mx:'auto',
            width: '400px',
            }}>
           
              <Box
                onClick={handleCloseNavMenu}
                sx={{ 
                  color: 'black', 
                  display: 'flex',
                  justifyContent:'center',              
                  m: 1,
                  px:1,
                  borderRadius: '40px',
                  boxShadow:'0.1px 0.5px 2px gray',
                  
                }}
              >
                <Button sx={{
                  textTransform: 'capitalize', 
                  fontSize: 14, 
                  color:'text.primary',
                  ":hover": { backgroundColor:'transparent' }                
              }}>
                Anywhere
                </Button>
                <Button 
                sx={{
                  ...commonStyles, 
                  borderTop: 0, 
                  borderBottom:0,
                  textTransform: 'capitalize', 
                  color:'text.primary', 
                  fontSize: 14, 
                  padding:'0px 10px', 
                  margin:'9px 0px',
                  ":hover": { backgroundColor:'transparent' }                
                  }}>
                    Any week
                    </Button>
                <Button sx={{
                  textTransform: 'capitalize', 
                  fontSize: 14, 
                  color:'text.disabled',
                  ":hover": { backgroundColor:'transparent' }                
                  }}>
                  Add guests
                  </Button>

                <Tooltip title="search"
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  margin:'7px -3px 0px 0px',
                  width: '25px',
                  height: '24px',
                  borderRadius:'51%',
                  bgcolor:' #FF5A5F',
                  ":hover": { backgroundColor:'#ff7a7e' }
                }} >

                <IconButton>
                <SearchOutlined               
                sx={{
                  color: 'white',
                  fontSize:15,           
                }}/>                
                </IconButton>

                </Tooltip>
              </Box>
          
          </Box>

          <Box sx={{ mr: 0 }}>
           
            <IconButton
            sx={{
              color:'text.primary', 
              borderRadius: 10,
              fontSize: 14, 
              margin:'0px 10px',
              display:{ 
                xs:'none', lg:'inline-block', 
                md:'inline-block', sm:'none'},
                px:2,
 
              }}
                
            >
            Become a Host
            <Language sx={{pl:1, margin:'-5px 0px', fontSize: 18 }}/>
            </IconButton>
            <IconButton
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={handleOpenUserMenu}
              color="inherit"
              sx={{              
                px:2,
                borderRadius: '35px',
                boxShadow:'0.1px 0.5px 2px gray',
               }}
            >
            <HorizontalSplit sx={{ fontSize: 25, color:"text.disabled", display:{xs:'none', sm:'block'} }}/>
            <Badge color="error" variant="dot"  p={0}>

              <AccountCircle  sx={{ fontSize: 25, color:"text.disabled", m:0 }}/>
            </Badge>

            </IconButton>

            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
        </Container>
      </AppBar>


      <AppBar
        position="static"
        className={`${classes.appBar} ${classes.bottomBar}`}
        style={{ top: '70px' }} // Adjust top position to avoid overlapping
      >
        <Container maxWidth="lg">
          <Toolbar className={classes.toolbar}>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default ResponsiveAppBar;
