import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  withStyles,
  WithStyles
} from '@material-ui/core';
import { Business, NearMe } from '@material-ui/icons';
import React, { FunctionComponent } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './styles';

const Administrator: FunctionComponent<Props> = ({ classes, drawerOpen }) => {
  return (
    <List>
      {drawerOpen && (
        <ListSubheader disableSticky classes={{ root: classes.listItemIcon }}>
          Administrator
        </ListSubheader>
      )}
      {[
        {
          Icon: Business,
          key: 'company',
          link: (props: any) => (
            <NavLink
              to="/companies"
              {...props}
              activeClassName={classes.active}
            />
          ),
          text: 'Firmy'
        },
        {
          Icon: NearMe,
          key: 'place',
          link: (props: any) => (
            <NavLink
              to="/geodata"
              {...props}
              activeClassName={classes.active}
            />
          ),
          text: 'GeoDane'
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

export default withStyles(styles)(Administrator);
