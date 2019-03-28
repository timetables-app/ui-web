import {Theme, createStyles} from "@material-ui/core";

export default (theme: Theme) => createStyles({
    root: {
        display: 'flex',
    },
    ...toolbar(theme),
    content: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        height: '100vh'
    },
});

const drawerWidth = 240;
const toolbar = (theme: Theme) => ({
    toolbar: {
        display: 'flex',
        flex: 'none',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    }
});

export {drawerWidth, toolbar};