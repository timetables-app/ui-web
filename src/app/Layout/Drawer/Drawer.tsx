import {
  Divider,
  Drawer as MuiDrawer,
  IconButton,
  Theme,
  WithStyles,
  withStyles
} from '@material-ui/core';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import classNames from 'classnames';
import React, { FunctionComponent } from 'react';
import { AdministratorList, AnonymousList, CompanyOwnerList } from './List';
import styles from './styles';

const Drawer: FunctionComponent<Props> = ({
  classes,
  theme,
  handleDrawerClose,
  open
}) => {
  return (
    <MuiDrawer
      variant="permanent"
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })
      }}
      open={open}
    >
      <div className={classes.toolbar}>
        <IconButton
          onClick={handleDrawerClose}
          classes={{ root: classes.chevron }}
        >
          {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
        </IconButton>
      </div>
      <Divider className={classes.divider} />
      <AnonymousList />
      <Divider className={classes.divider} />
      <CompanyOwnerList drawerOpen={open} />
      <Divider className={classes.divider} />
      <AdministratorList drawerOpen={open} />
    </MuiDrawer>
  );
};

interface Props extends WithStyles<typeof styles> {
  handleDrawerClose: () => void;
  open: boolean;
  theme: Theme;
}

export default withStyles(styles, { withTheme: true })(Drawer);
