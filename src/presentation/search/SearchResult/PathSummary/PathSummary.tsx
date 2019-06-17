import { IconButton, Tooltip, Typography } from '@material-ui/core';
import {
  ChevronRight,
  DirectionsBus,
  DirectionsWalk,
  Subway,
  Train,
  Tram
} from '@material-ui/icons';
import moment from 'moment';
import React, { cloneElement, FunctionComponent, ReactElement } from 'react';
import { PathMeansOfTransport, PathMeansOfTransportMap } from '../types';
import Change from './Change';

const PathSummary: FunctionComponent<Props> = ({
  sourceTime,
  changeCount,
  destinationTime,
  meansOfTransport
}) => {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="subheading">
          {moment(sourceTime).format('LT')}
        </Typography>
        <ChevronRight />
        <Typography variant="subheading">
          {moment(destinationTime).format('LT')}
        </Typography>
      </div>
      <div>
        {meansOfTransport.map((meanOfTransport, idx) =>
          cloneElement(meanOfTransportToComponent[meanOfTransport], {
            key: idx
          })
        )}
        <Change count={changeCount} />
      </div>
    </>
  );
};

const meanOfTransportToComponent: PathMeansOfTransportMap<ReactElement> = {
  bus: (
    <Tooltip title="Trasa zawiera przejazd busem">
      <IconButton disableTouchRipple>
        <DirectionsBus fontSize={'small'} />
      </IconButton>
    </Tooltip>
  ),
  subway: (
    <Tooltip title="Trasa zawiera przejazd metrem">
      <IconButton disableTouchRipple>
        <Subway fontSize={'small'} />
      </IconButton>
    </Tooltip>
  ),
  train: (
    <Tooltip title="Trasa zawiera przejazd pociągiem">
      <IconButton disableTouchRipple>
        <Train fontSize={'small'} />
      </IconButton>
    </Tooltip>
  ),
  tram: (
    <Tooltip title="Trasa zawiera przejazd tramwajem">
      <IconButton disableTouchRipple>
        <Tram fontSize={'small'} />
      </IconButton>
    </Tooltip>
  ),
  walking: (
    <Tooltip title="Trasa zawiera przejście pieszo">
      <IconButton disableTouchRipple>
        <DirectionsWalk fontSize={'small'} />
      </IconButton>
    </Tooltip>
  )
};

interface Props {
  sourceTime: Date;
  destinationTime: Date;
  meansOfTransport: PathMeansOfTransport[];
  changeCount: number;
}

export default PathSummary;
