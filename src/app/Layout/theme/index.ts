import { createMuiTheme } from '@material-ui/core';

export default createMuiTheme({
  mixins: {
    toolbar: {
      '@media (min-width:600px)': {
        minHeight: 56
      }
    }
  },
  overrides: {
    MuiDivider: {
      root: {
        background: '#d8d8d8'
      }
    },
    MuiDrawer: {
      paper: {
        background: '#202047',
        backgroundImage: 'linear-gradient(#202047, #131325)'
      }
    }
  },
  palette: {
    primary: {
      contrastText: '#fff',
      dark: '#202047',
      light: '#3e50a2',
      main: '#292f72'
    },
    secondary: {
      contrastText: '#fff',
      dark: '#9e1a15',
      light: '#d52b28',
      main: '#ba1a15'
    }
  },
  typography: {
    fontSize: 12
  }
});
