import {createMuiTheme} from '@material-ui/core';

export default createMuiTheme({
    mixins: {
        toolbar: {
            '@media (min-width:600px)': {
                minHeight: 56
            }
        }
    },
    palette: {
        primary: {
            light: '#3e50a2',
            main: '#292f72',
            dark: '#202047',
            contrastText: '#fff'
        },
        secondary: {
            light: '#d52b28',
            main: '#ba1a15',
            dark: '#9e1a15',
            contrastText: '#fff'
        }
    },
    typography: {
        fontSize: 12
    },
    overrides: {
        MuiToolbar: {
            root: {
                color: '#3f3f3f',
                background: '#fff',
                borderBottom: '1px solid #d8d8d8'
            }
        },
        MuiDivider: {
            root: {
                background: '#d8d8d8'
            }
        },
        MuiDrawer: {
            paper: {
                background: '#202047'
            }
        }
    }
});