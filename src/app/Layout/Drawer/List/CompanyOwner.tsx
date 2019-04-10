import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  withStyles,
  WithStyles
} from '@material-ui/core';
import {
  AirportShuttle,
  BusinessCenter,
  Gesture,
  Schedule
} from '@material-ui/icons';
import React, { FunctionComponent } from 'react';
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
        { text: 'Moja firma', Icon: BusinessCenter, key: 'company' },
        { text: 'Pojazdy', Icon: AirportShuttle, key: 'vehicle' },
        { text: 'Linie', Icon: Gesture, key: 'line' },
        { text: 'Rozkłady', Icon: Schedule, key: 'timetable' }
      ].map(({ text, Icon, key }) => (
        <ListItem button key={key}>
          <ListItemIcon classes={{ root: classes.listItemIcon }}>
            <Icon />
          </ListItemIcon>
          <ListItemText
            primary={text}
            classes={{ primary: classes.listItemText }}
          />
        </ListItem>
      ))}
    </List>
  );
};

interface Props extends WithStyles<typeof styles> {
  drawerOpen: boolean;
}

export default withStyles(styles)(CompanyOwner);
