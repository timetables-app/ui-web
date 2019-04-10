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
import { Link } from 'react-router-dom';
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
        { text: 'Firmy', Icon: Business, key: 'company' },
        { text: 'Miejsca', Icon: NearMe, key: 'place' }
      ].map(({ text, Icon, key }) => (
        <Link to="/countries" key={key}>
          <ListItem button>
            <ListItemIcon classes={{ root: classes.listItemIcon }}>
              <Icon />
            </ListItemIcon>
            <ListItemText
              primary={text}
              classes={{ primary: classes.listItemText }}
            />
          </ListItem>
        </Link>
      ))}
    </List>
  );
};

interface Props extends WithStyles<typeof styles> {
  drawerOpen: boolean;
}

export default withStyles(styles)(Administrator);
