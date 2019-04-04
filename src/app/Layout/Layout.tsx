import React, {FunctionComponent, useState} from 'react';
import {
    WithStyles,
    withStyles,
    CssBaseline,
    MuiThemeProvider,
    BottomNavigation,
    BottomNavigationAction,
} from '@material-ui/core';
import MapIcon from '@material-ui/icons/Map'
import PlaceIcon from '@material-ui/icons/Place'
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered'
import styles from './styles'
import AppBarTta from './AppBarTta';
import DrawerTta from './DrawerTta';
import theme from './theme';

const Layout: FunctionComponent<Props> = function Layout({classes, children, handleContent}) {
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
                <CssBaseline/>
                <AppBarTta handleDrawerOpen={handleDrawerOpen} open={open}/>
                <DrawerTta handleDrawerClose={handleDrawerClose} open={open} handleContent={handleContent}/>
                <main className={classes.content}>
                    <div className={classes.toolbar}/>
                    {children}
                </main>
            </div>
        </MuiThemeProvider>
    );
};

interface Props extends WithStyles<typeof styles> {
    handleContent: () => void
}

export default withStyles(styles, {withTheme: true})(Layout);