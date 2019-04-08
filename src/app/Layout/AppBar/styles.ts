import { createStyles, Theme } from '@material-ui/core';
import { drawerWidth } from '../styles';

export default (theme: Theme) =>
  createStyles({
    appBar: {
      background: '#fff',
      borderBottom: '1px solid #d8d8d8',
      color: '#3f3f3f',
      transition: theme.transitions.create(['width', 'margin'], {
        duration: theme.transitions.duration.leavingScreen,
        easing: theme.transitions.easing.sharp
      }),
      zIndex: theme.zIndex.drawer + 1
    },
    appBarShift: {
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['width', 'margin'], {
        duration: theme.transitions.duration.enteringScreen,
        easing: theme.transitions.easing.sharp
      }),
      width: `calc(100% - ${drawerWidth}px)`
    },
    hide: {
      display: 'none'
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 36
    }
  });
