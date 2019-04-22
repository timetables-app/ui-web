import { Button, Typography, WithStyles, withStyles } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import styles from './styles';

const Popover: FunctionComponent<Props> = ({ classes, x = 0, y = 0 }) => {
  return (
    <div className={classes.container} style={{ left: x, top: y }}>
      <div className={classes.content}>
        <Typography variant="subheading" className={classes.placeName}>
          AGH \ UR
        </Typography>
        <Button
          size="small"
          color="primary"
          variant="outlined"
          className={classes.sourceBtn}
        >
          Start
        </Button>
        <Button size="small" color="secondary" variant="outlined">
          Cel
        </Button>
      </div>
      <div className={classes.arrow} />
    </div>
  );
};

interface Props extends WithStyles<typeof styles> {
  x?: number;
  y?: number;
}

export default withStyles(styles)(Popover);
