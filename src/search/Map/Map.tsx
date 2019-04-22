import React, { FunctionComponent, useState } from 'react';
import { Map as MapLeaflet, Marker, TileLayer } from 'react-leaflet';
import { connect } from 'react-redux';
import { setTitle } from '../../framework/title';
import { LeafletMouseEvent } from 'leaflet';
import { Card, CardContent, Typography } from '@material-ui/core';
import Popover from './Popover';

const Map: FunctionComponent<Props> = ({ setTitle: dispatchSetTitle }) => {
  dispatchSetTitle('Rozkłady mapa');
  const [selectedPlace, setSelectedPlace] = useState<string>('');
  const [source, setSource] = useState<string>('');
  const [destination, setDestination] = useState<string>('');
  const [popoverPosition, setPopoverPosition] = useState({ x: 0, y: 0 });

  const logRef = (ref: any) => {
    console.log(ref);
  };

  const onMarkerClick = (e: LeafletMouseEvent) => {
    setPopoverPosition(e.layerPoint);
  };

  return (
    <>
      <MapLeaflet
        center={[50.062037, 19.937735]}
        zoom={14}
        onClick={() => setSelectedPlace('')}
      >
        <Popover {...popoverPosition} />
        <Marker
          ref={logRef}
          position={[50.062037, 19.937735]}
          onClick={onMarkerClick}
        />
        <Marker position={[50.062037, 19.927735]} onClick={onMarkerClick} />
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
