import axios from 'axios';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { Map as MapLeaflet, TileLayer } from 'react-leaflet';
import { connect } from 'react-redux';
import {
  decrementProgress,
  incrementProgress
} from '../../framework/LinearProgress';
import { setTitle } from '../../framework/title';
import MapBar from './MapBar';
import MapMarker from './MapMarker';
import { PlacePoint } from './types';

const Map: FunctionComponent<Props> = ({
  setTitle: dispatchSetTitle,
  incrementProgress: dispatchIncrementProgress,
  decrementProgress: dispatchDecrementProgress
}) => {
  dispatchSetTitle('Rozkłady mapa');

  const [places, setPlaces] = useState<PlacePoint[]>([]);
  useEffect(() => {
    dispatchIncrementProgress();
    axios
      .get('http://localhost:8080/places')
      .then(r => {
        setPlaces(
          r.data._embedded.places.map(
            (v: any): PlacePoint => ({
              lat: v.lat,
              link: v._links.self.href,
              lng: v.lng,
              name: v.name
            })
          )
        );
      })
      .finally(dispatchDecrementProgress);
  }, []);

  const [source, setSource] = useState<PlacePoint>();
  const [destination, setDestination] = useState<PlacePoint>();
  const onClickSource = (placePoint: PlacePoint) => () => setSource(placePoint);
  const onClickDestination = (placePoint: PlacePoint) => () =>
    setDestination(placePoint);
  const [departureTime, setDepartureTime] = useState(new Date());

  return (
    <>
      <MapBar
        source={source}
        destination={destination}
        departureTime={departureTime}
        setDepartureTime={setDepartureTime}
      />
      <MapLeaflet center={[50.062037, 19.937735]} zoom={14}>
        {places.map((p, idx) => (
          <MapMarker
            key={idx}
            placePoint={p}
            onClickSource={onClickSource}
            onClickDestination={onClickDestination}
          />
        ))}
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
  incrementProgress: () => void;
  decrementProgress: () => void;
}

const mapDispatchToProps = {
  decrementProgress,
  incrementProgress,
  setTitle
};

export default connect(
  null,
  mapDispatchToProps
)(Map);
