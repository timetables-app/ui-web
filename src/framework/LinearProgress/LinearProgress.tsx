import {
  LinearProgress as MuiLinearProgress,
  withStyles,
  WithStyles
} from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { ProgressAppStateSubset } from './store';
import styles from './styles';

const LinearProgress: FunctionComponent<Props> = ({ classes, counter }) => {
  if (counter < 1) {
    return null;
  }
  return <MuiLinearProgress color="secondary" className={classes.progress} />;
};

interface Props extends WithStyles<typeof styles> {
  counter: number;
}

const mapStateToProps = (state: ProgressAppStateSubset) => ({
  counter: state.linearProgress
});

export default connect(
  mapStateToProps,
  {}
)(withStyles(styles)(LinearProgress));
