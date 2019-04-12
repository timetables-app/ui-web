import { List, ListSubheader, withStyles, WithStyles } from '@material-ui/core';
import { Business, NearMe } from '@material-ui/icons';
import React, { FunctionComponent } from 'react';
import ListItem from './ListItem';
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
          text: 'Firmy',
          to: '/companies'
        },
        {
          Icon: NearMe,
          text: 'GeoDane',
          to: '/geodata'
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

export default withStyles(styles)(Administrator);
