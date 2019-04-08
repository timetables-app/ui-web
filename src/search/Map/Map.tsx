import { Map as MapLeaflet, Marker, TileLayer } from 'react-leaflet';
import PlaceIcon from '@material-ui/icons/Place';
import {
  Card,
  CardHeader,
  CardActions,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@material-ui/core';
import React, { useState } from 'react';

function Map() {
  const [selectedPlace, setSelectedPlace] = useState<string>('');
  const [source, setSource] = useState<string>('');
  const [destination, setDestination] = useState<string>('');

  return (
    <>
      <div
        style={{
          position: 'absolute',
          zIndex: 9999,
          top: '66px',
          paddingLeft: '10px'
        }}
      >
        <Card>
          <List component="nav">
            <ListItem button>
              <ListItemIcon>
                <PlaceIcon color="primary" />
              </ListItemIcon>
              <ListItemText inset primary={source} secondary="Skąd" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemIcon>
                <PlaceIcon color="secondary" />
              </ListItemIcon>
              <ListItemText inset primary={destination} secondary="Dokąd" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText
                inset
                primary="10:00 30.03.2019"
                secondary="Data odjazdu"
                style={{ padding: 0 }}
              />
            </ListItem>
          </List>
          <Divider />
          {selectedPlace && (
            <>
              <CardHeader
                title={selectedPlace}
                style={{ padding: '16px 16px 8px 8px' }}
              />
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  variant="outlined"
                  onClick={() => setSource(selectedPlace)}
                >
                  Start
                </Button>
                <Button
                  size="small"
                  color="secondary"
                  variant="outlined"
                  onClick={() => setDestination(selectedPlace)}
                >
                  Cel
                </Button>
              </CardActions>
            </>
          )}
        </Card>
      </div>
      <MapLeaflet
        center={[50.062037, 19.937735]}
        zoom={14}
        onClick={() => setSelectedPlace('')}
      >
        <Marker
          position={[50.062037, 19.937735]}
          onClick={() => setSelectedPlace('AGH \\ UR')}
        />
        <Marker
          position={[50.062037, 19.927735]}
          onClick={() => setSelectedPlace('Czarnowiejska')}
        />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />
      </MapLeaflet>
    </>
  );
}

export default Map;