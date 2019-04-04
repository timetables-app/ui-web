import {Theme, createStyles} from "@material-ui/core";
import index from "../theme";

export default (theme: Theme) => createStyles({
    defaultStyle: {
        'z-index': 99999,
        position: 'absolute',
        height: '100vh',
        top: 56,
        'background-image': 'linear-gradient(rgb(255, 255, 255), rgb(247, 247, 247))'
    },
    contentOpen: {
        width: 800,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    contentClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        [theme.breakpoints.up('sm')]: {
            width: 0,
        },
    },

});
