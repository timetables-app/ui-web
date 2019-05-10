import {
  Chip,
  createStyles,
  IconButton,
  Tooltip,
  Typography,
  withStyles,
  WithStyles
} from '@material-ui/core';
import { Tram } from '@material-ui/icons';
import React, { FunctionComponent } from 'react';

const Line: FunctionComponent<Props> = ({
  lineNumber,
  supportedCompany,
  classes
}) => (
  <div style={{ display: 'flex', alignItems: 'center', marginTop: '-7px' }}>
    <Chip label={lineNumber} variant="outlined" />
    <Tooltip title="Linia tramwajowa">
      <IconButton disableTouchRipple style={{ margin: '0 4px' }}>
        <Tram fontSize={'small'} />
      </IconButton>
    </Tooltip>
    <Typography classes={classes}>{supportedCompany}</Typography>
  </div>
);

interface Props extends WithStyles<typeof styles> {
  lineNumber: string;
  supportedCompany: string;
}

const styles = createStyles({
  root: {
    display: 'inline'
  }
});

export default withStyles(styles)(Line);
