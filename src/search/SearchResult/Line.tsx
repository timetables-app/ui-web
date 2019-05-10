import {
  Chip,
  createStyles,
  IconButton,
  Tooltip,
  Typography,
  withStyles,
  WithStyles
} from '@material-ui/core';
import {
  DirectionsBus,
  DirectionsWalk,
  Subway,
  Train,
  Tram
} from '@material-ui/icons';

import React, { cloneElement, FunctionComponent, ReactElement } from 'react';
import { VehicleType, VehicleTypeMap } from './types';

const Line: FunctionComponent<Props> = ({
  vehicleType,
  lineNumber,
  supportedCompany,
  classes
}) => (
  <div style={{ display: 'flex', alignItems: 'center', marginTop: '-7px' }}>
    <Chip
      label={lineNumber ? lineNumber : 'Przejdź pieszo'}
      variant="outlined"
    />
    {vehicleType ? (
      cloneElement(vehicleTypeToComponent[vehicleType])
    ) : (
      <IconButton disableTouchRipple style={{ margin: '0 4px' }}>
        <DirectionsWalk fontSize={'small'} />
      </IconButton>
    )}
    {supportedCompany && (
      <Typography classes={classes}>{supportedCompany}</Typography>
    )}
  </div>
);

const vehicleTypeToComponent: VehicleTypeMap<ReactElement> = {
  bus: (
    <Tooltip title="Linia autobusowa">
      <IconButton disableTouchRipple style={{ margin: '0 4px' }}>
        <DirectionsBus fontSize={'small'} />
      </IconButton>
    </Tooltip>
  ),
  subway: (
    <Tooltip title="Linia metra">
      <IconButton disableTouchRipple style={{ margin: '0 4px' }}>
        <Subway fontSize={'small'} />
      </IconButton>
    </Tooltip>
  ),
  train: (
    <Tooltip title="Linia pociąg">
      <IconButton disableTouchRipple style={{ margin: '0 4px' }}>
        <Train fontSize={'small'} />
      </IconButton>
    </Tooltip>
  ),
  tram: (
    <Tooltip title="Linia tramwajowa">
      <IconButton disableTouchRipple style={{ margin: '0 4px' }}>
        <Tram fontSize={'small'} />
      </IconButton>
    </Tooltip>
  )
};

interface Props extends WithStyles<typeof styles> {
  lineNumber?: string;
  supportedCompany?: string;
  vehicleType?: VehicleType;
}

const styles = createStyles({
  root: {
    display: 'inline'
  }
});

export default withStyles(styles)(Line);
