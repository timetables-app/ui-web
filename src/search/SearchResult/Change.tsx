import {
  createStyles,
  Typography,
  withStyles,
  WithStyles
} from '@material-ui/core';
import React, { FunctionComponent } from 'react';

const Change: FunctionComponent<Props> = ({ classes }) => {
  return (
    <Typography variant="overline" classes={classes}>
      2 przesiadki
    </Typography>
  );
};

interface Props extends WithStyles<typeof styles> {}

const styles = createStyles({
  root: {
    display: 'inline',
    padding: '0 4px'
  }
});

export default withStyles(styles)(Change);
