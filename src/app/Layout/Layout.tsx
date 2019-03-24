import React, {FunctionComponent, useState} from 'react';
import {
    WithStyles,
    withStyles,
    CssBaseline,
} from '@material-ui/core';
import styles from './styles'
import AppBarTta from './AppBarTta';
import DrawerTta from './DrawerTta';

const Layout: FunctionComponent<Props> = function Layout({classes, children}) {
    const [open, setOpen] = useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBarTta handleDrawerOpen={handleDrawerOpen} open={open}/>
            <DrawerTta handleDrawerClose={handleDrawerClose} open={open}/>
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                {children}
            </main>
        </div>
    );
};

type Props = WithStyles<typeof styles>;

export default withStyles(styles, {withTheme: true})(Layout);