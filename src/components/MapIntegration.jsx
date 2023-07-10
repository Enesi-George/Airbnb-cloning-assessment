import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Modal } from '@material-ui/core';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import {Map} from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    backgroundColor:'black',
    position:'fixed',
    margin:'0 45%',
    bottom:50,
    color:'white',
    fontSize:12,
    fontWeight: 400,
    borderRadius: 20,
    px:2,
    width:'120px',
    zIndex:1,
    textTransform: 'capitalize',
    transition: '0.23',
    ':hover':{
      backgroundColor:'grey',
    }
  },
  modalContent: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(0),
    outline: 'none',
    width:'75%'
  },
  map: {
    width: '100%',
    height: '400px',
  },
}));

const MapIntegrationButton = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Button variant="contained" className={classes.button} onClick={handleOpenModal}>
        Site map 
        <Map sx={{fontSize: 15,}}/>
      </Button>
      <Modal
        open={isOpen}
        onClose={handleCloseModal}
        className={classes.modal}
      >
        <div className={classes.modalContent}>
          <div className={classes.map}>
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158855.38334309723!2d-122.41941506657788!3d37.77492959045952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sca!4v1627502816804!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MapIntegrationButton;
