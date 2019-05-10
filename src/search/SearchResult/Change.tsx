import {
  createStyles,
  Typography,
  withStyles,
  WithStyles
} from '@material-ui/core';
import React, { FunctionComponent } from 'react';

const Change: FunctionComponent<Props> = ({ classes, count }) => {
  return count ? (
    <Typography variant="overline" classes={classes}>
      {count} przesiadki
    </Typography>
  ) : null;
};

interface Props extends WithStyles<typeof styles> {
  count: number;
}

const styles = createStyles({
  root: {
    display: 'inline',
    padding: '0 4px'
  }
});

export default withStyles(styles)(Change);
