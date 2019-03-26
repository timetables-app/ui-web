import classNames from 'classnames';
import {AppBar, IconButton, Theme, Toolbar, Typography, withStyles, WithStyles} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import React, {FunctionComponent} from 'react';
import styles from './styles';

const AppBarTta: FunctionComponent<Props> = function ({classes, handleDrawerOpen, open}) {
    return (
        <AppBar
            position="fixed"
            className={classNames(classes.appBar, {
                [classes.appBarShift]: open,
            })}
            elevation={0}
        >
            <Toolbar disableGutters={!open} style={{backgroundImage: 'linear-gradient(#fff, #f7f7f7)'}}>
                <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={handleDrawerOpen}
                    className={classNames(classes.menuButton, {
                        [classes.hide]: open,
                    })}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" color="inherit" noWrap style={{flexGrow: 1}}>
                    Mini variant drawer
                </Typography>
                <IconButton>
                    <AccountCircleIcon/>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
};


interface Props extends WithStyles<typeof styles> {
    handleDrawerOpen: () => void,
    open: boolean
}

export default withStyles(styles)(AppBarTta);