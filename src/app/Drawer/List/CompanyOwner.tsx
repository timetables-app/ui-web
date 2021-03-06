import { List, ListSubheader, withStyles, WithStyles } from '@material-ui/core';
import { CompareArrows, Gesture, Schedule, Timeline } from '@material-ui/icons';
import React, { FunctionComponent } from 'react';
import ListItem from './ListItem';
import styles from './styles';

const CompanyOwner: FunctionComponent<Props> = ({ classes, drawerOpen }) => {
  return (
    <List>
      {drawerOpen && (
        <ListSubheader disableSticky classes={{ root: classes.listItemIcon }}>
          Właściciel firmy
        </ListSubheader>
      )}
      {[
        // {
        //   Icon: BusinessCenter,
        //   text: 'Moja firma',
        //   to: '/my-company'
        // },
        // {
        //   Icon: AirportShuttle,
        //   text: 'Pojazdy',
        //   to: '/vehicles'
        // },
        {
          Icon: Gesture,
          text: 'Linie',
          to: '/lines'
        },
        {
          Icon: Schedule,
          text: 'Rozkłady',
          to: '/timetables'
        },
        {
          Icon: CompareArrows,
          text: 'Kursy',
          to: '/courses'
        },
        {
          Icon: Timeline,
          text: 'Elementy kursów',
          to: '/course-parts'
        }
      ].map((props, idx) => (
        <ListItem key={idx} {...props} />
      ))}
    </List>
  );
};

interface Props extends WithStyles<typeof styles> {
  drawerOpen: boolean;
}

export default withStyles(styles)(CompanyOwner);
