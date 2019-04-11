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
import { NavLink } from 'react-router-dom';
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
        {
          Icon: BusinessCenter,
          key: 'company',
          link: (props: any) => (
            <NavLink
              to="/my-company"
              {...props}
              activeClassName={classes.active}
            />
          ),
          text: 'Moja firma'
        },
        {
          Icon: AirportShuttle,
          key: 'vehicle',
          link: (props: any) => (
            <NavLink
              to="/vehicles"
              {...props}
              activeClassName={classes.active}
            />
          ),
          text: 'Pojazdy'
        },
        {
          Icon: Gesture,
          key: 'line',
          link: (props: any) => (
            <NavLink to="/lines" {...props} activeClassName={classes.active} />
          ),
          text: 'Linie'
        },
        {
          Icon: Schedule,
          key: 'timetable',
          link: (props: any) => (
            <NavLink
              to="/timetables"
              {...props}
              activeClassName={classes.active}
            />
          ),
          text: 'Rozkłady'
        }
      ].map(({ text, Icon, key, link }) => (
        <ListItem button component={link} key={key}>
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
