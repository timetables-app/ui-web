import { createStyles, Theme } from '@material-ui/core';

export default (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex'
    },
    ...toolbar(theme),
    content: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      height: '100vh'
    },
    progress: {
      height: '3px',
      position: 'fixed',
      width: '100%',
      zIndex: 9999
    }
  });

const drawerWidth = 240;
const toolbar = (theme: Theme) => ({
  toolbar: {
    alignItems: 'center',
    display: 'flex',
    flex: 'none',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  }
});

export { drawerWidth, toolbar };
