import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Modal } from '@material-ui/core';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import {Map} from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', //justify the content
  },
  button:{
    backgroundColor:'black',
    position:'fixed',
    bottom:45,
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
    height: '500px',
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
    <div style={{width:'100%',display:'flex', justifyContent:'center'}}>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6487908.742605282!2d3.3350031426917077!3d9.072264384017143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b2b1e160abf%3A0xd19113b501200733!2sNigeria!5e0!3m2!1sen!2sus!4v1627631115949!5m2!1sen!2sus"
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
