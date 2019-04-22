import {
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import { Place } from '@material-ui/icons';
import React, { FunctionComponent, useState } from 'react';
import { Map as MapLeaflet, Marker, TileLayer } from 'react-leaflet';
import { connect } from 'react-redux';
import { setTitle } from '../../framework/title';

const Map: FunctionComponent<Props> = ({ setTitle: dispatchSetTitle }) => {
  dispatchSetTitle('Rozkłady mapa');
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
                <Place color="primary" />
              </ListItemIcon>
              <ListItemText inset primary={source} secondary="Skąd" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemIcon>
                <Place color="secondary" />
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
};

interface Props {
  setTitle: (title: string) => void;
}

const mapDispatchToProps = {
  setTitle
};

export default connect(
  null,
  mapDispatchToProps
)(Map);
