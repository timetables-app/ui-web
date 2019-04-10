import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  withStyles,
  WithStyles
} from '@material-ui/core';
import {
  Commute,
  ErrorOutline,
  TrackChanges,
  VerticalSplit
} from '@material-ui/icons';
import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles';

const Anonymous: FunctionComponent<Props> = ({ classes }) => {
  return (
    <List>
      {[
        {
          Icon: VerticalSplit,
          key: 'timetable',
          link: (props: any) => (
            <NavLink to="/" {...props} activeClassName={classes.active} exact />
          ),
          text: 'Rozkłady'
        },
        {
          Icon: ErrorOutline,
          key: 'impediment',
          link: (props: any) => (
            <NavLink
              to="/impediments"
              {...props}
              activeClassName={classes.active}
            />
          ),
          text: 'Utrudnienia'
        },
        {
          Icon: Commute,
          key: 'carrier',
          link: (props: any) => (
            <NavLink
              to="/carriers"
              {...props}
              activeClassName={classes.active}
            />
          ),
          text: 'Przewoźnicy'
        },
        {
          Icon: TrackChanges,
          key: 'lostAndFound',
          link: (props: any) => (
            <NavLink
              to="/lost-and-found"
              {...props}
              activeClassName={classes.active}
            />
          ),
          text: 'Zgubione'
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

interface Props extends WithStyles<typeof styles> {}

export default withStyles(styles)(Anonymous);
