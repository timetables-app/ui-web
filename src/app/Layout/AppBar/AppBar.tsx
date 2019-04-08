import {
  AppBar as MUIAppBar,
  IconButton,
  Toolbar,
  Typography,
  withStyles,
  WithStyles
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import classNames from 'classnames';
import React, { FunctionComponent } from 'react';
import styles from './styles';

const AppBar: FunctionComponent<Props> = ({
  classes,
  handleDrawerOpen,
  open
}) => {
  return (
    <MUIAppBar
      position="fixed"
      className={classNames(classes.appBar, {
        [classes.appBarShift]: open
      })}
      elevation={0}
    >
      <Toolbar
        disableGutters={!open}
        style={{ backgroundImage: 'linear-gradient(#fff, #f7f7f7)' }}
      >
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={handleDrawerOpen}
          className={classNames(classes.menuButton, {
            [classes.hide]: open
          })}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" noWrap style={{ flexGrow: 1 }}>
          Rozkłady mapa
        </Typography>
      </Toolbar>
    </MUIAppBar>
  );
};

interface Props extends WithStyles<typeof styles> {
  handleDrawerOpen: () => void;
  open: boolean;
}

export default withStyles(styles)(AppBar);
