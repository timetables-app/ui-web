import {
  ListItem as MuiListItem,
  ListItemIcon,
  ListItemText,
  withStyles,
  WithStyles
} from '@material-ui/core';
import React, { ComponentType, FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles';

const ListItem: FunctionComponent<Props> = ({
  to,
  Icon,
  classes,
  text,
  exact = false
}) => {
  return (
    <MuiListItem
      button
      {...{
        activeClassName: classes.active,
        component: NavLink,
        exact,
        to
      } as any}
    >
      <ListItemIcon classes={{ root: classes.listItemIcon }}>
        <Icon />
      </ListItemIcon>
      <ListItemText
        primary={text}
        classes={{ primary: classes.listItemText }}
      />
    </MuiListItem>
  );
};

interface Props extends WithStyles<typeof styles> {
  to: string;
  Icon: ComponentType;
  text: string;
  exact?: boolean;
}

export default withStyles(styles)(ListItem);
