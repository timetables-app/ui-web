import { Button, Typography } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import { Marker, Popup } from 'react-leaflet';
import { PlacePoint } from './types';

const MapMarker: FunctionComponent<Props> = ({
  placePoint,
  onClickSource,
  onClickDestination
}) => {
  return (
    <Marker position={[placePoint.lat, placePoint.lng]}>
      <Popup>
        <Typography variant="subheading" style={{ marginBottom: '12px' }}>
          {placePoint.name}
        </Typography>
        <Button
          size="small"
          color="primary"
          variant="outlined"
          style={{ marginRight: '12px' }}
          onClick={onClickSource(placePoint)}
        >
          Start
        </Button>
        <Button
          size="small"
          color="secondary"
          variant="outlined"
          onClick={onClickDestination(placePoint)}
        >
          Cel
        </Button>
      </Popup>
    </Marker>
  );
};

interface Props {
  placePoint: PlacePoint;
  onClickSource: (p: PlacePoint) => () => void;
  onClickDestination: (p: PlacePoint) => () => void;
}

export default MapMarker;
