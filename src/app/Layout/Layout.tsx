import {
  CssBaseline,
  MuiThemeProvider,
  WithStyles,
  withStyles
} from '@material-ui/core';
import React, { FunctionComponent, useState } from 'react';
import AppBar from './AppBar';
import Drawer from './Drawer';
import styles from './styles';
import theme from './theme';

const Layout: FunctionComponent<Props> = ({ classes, children }) => {
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar handleDrawerOpen={handleDrawerOpen} open={open} />
        <Drawer handleDrawerClose={handleDrawerClose} open={open} />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
        </main>
      </div>
    </MuiThemeProvider>
  );
};

type Props = WithStyles<typeof styles>;

export default withStyles(styles, { withTheme: true })(Layout);
