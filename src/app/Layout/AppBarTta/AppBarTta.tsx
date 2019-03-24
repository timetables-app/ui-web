import classNames from 'classnames';
import {AppBar, IconButton, Theme, Toolbar, Typography, withStyles, WithStyles} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React, {FunctionComponent} from 'react';
import styles from './styles';

const AppBarTta: FunctionComponent<Props> = function ({classes, handleDrawerOpen, open}) {
    return (
        <AppBar
            position="fixed"
            className={classNames(classes.appBar, {
                [classes.appBarShift]: open,
            })}
        >
            <Toolbar disableGutters={!open}>
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
                <Typography variant="h6" color="inherit" noWrap>
                    Mini variant drawer
                </Typography>
            </Toolbar>
        </AppBar>
    )
};


interface Props extends WithStyles<typeof styles> {
    handleDrawerOpen: () => void,
    open: boolean
}

export default withStyles(styles)(AppBarTta);