import {
  createStyles,
  ExpansionPanelDetails,
  Typography,
  withStyles,
  WithStyles
} from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import Line from './Line';

const PathDetails: FunctionComponent<Props> = ({ classes }) => (
  <ExpansionPanelDetails classes={classes}>
    <Line lineNumber="24" supportedCompany="MPK S.A" />
    <div
      style={{
        borderLeft: '1px solid rgb(196, 196, 196)',
        margin: '-6px 0 0 16px',
        padding: '10px 0'
      }}
    >
      <ul
        style={{
          padding: '0',
          margin: '0 0 0 17px',
          fontSize: '24px',
          color: 'rgb(117, 117, 117)'
        }}
      >
        <li>
          <Typography>10:02 Starowiślna</Typography>
        </li>
        <li>
          <Typography>10:02 Poczta główna</Typography>
        </li>
      </ul>
    </div>
    <Line lineNumber="24" supportedCompany="MPK S.A" />
    <div
      style={{
        borderLeft: '1px solid rgb(196, 196, 196)',
        margin: '-6px 0 0 16px',
        padding: '10px 0'
      }}
    >
      <ul
        style={{
          padding: '0',
          margin: '0 0 0 17px',
          fontSize: '24px',
          color: 'rgb(117, 117, 117)'
        }}
      >
        <li>
          <Typography>10:02 Starowiślna</Typography>
        </li>
        <li>
          <Typography>10:02 Poczta główna</Typography>
        </li>
      </ul>
    </div>
  </ExpansionPanelDetails>
);

interface Props extends WithStyles<typeof styles> {}

const styles = createStyles({
  root: {
    display: 'block'
  }
});

export default withStyles(styles)(PathDetails);
