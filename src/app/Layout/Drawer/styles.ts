import { createStyles, Theme } from '@material-ui/core';
import { drawerWidth, toolbar } from '../styles';

export default (theme: Theme) =>
  createStyles({
    divider: {
      background: '#101025'
    },
    drawer: {
      flexShrink: 0,
      whiteSpace: 'nowrap',
      width: drawerWidth
    },
    drawerClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        duration: theme.transitions.duration.leavingScreen,
        easing: theme.transitions.easing.sharp
      }),
      width: theme.spacing.unit * 7 + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing.unit * 8 + 1
      }
    },
    drawerOpen: {
      transition: theme.transitions.create('width', {
        duration: theme.transitions.duration.enteringScreen,
        easing: theme.transitions.easing.sharp
      }),
      width: drawerWidth
    },
    listItemIcon: {
      color: '#d8d8d8'
    },
    listItemText: {
      color: '#fff'
    },
    ...toolbar(theme)
  });
