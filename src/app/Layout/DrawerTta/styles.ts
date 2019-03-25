import {Theme, createStyles} from "@material-ui/core";
import {drawerWidth, toolbar} from '../styles';

export default (theme: Theme) => createStyles({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing.unit * 7 + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 8 + 1,
        },
    },
    divider: {
        background: '#101025'
    },
    listItemIcon: {
        color: '#d8d8d8'
    },
    listItemText: {
        color: '#fff'
    },
    ...toolbar(theme),
});
