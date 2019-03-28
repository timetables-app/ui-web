import classNames from 'classnames';
import {
    AppBar,
    IconButton,
    Menu,
    MenuItem,
    Theme,
    Toolbar,
    Typography,
    withStyles,
    WithStyles
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import React, {FunctionComponent, useState} from 'react';
import styles from './styles';

const AppBarTta: FunctionComponent<Props> = function ({classes, handleDrawerOpen, open}) {
    const [anchorEl, setAnchorEl] = useState<HTMLInputElement | null>(null);

    const handleMenu = (e: React.MouseEvent<HTMLInputElement>) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

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
                    Rozkłady mapa
                </Typography>
                <IconButton onClick={handleMenu}>
                    <AccountCircleIcon/>
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={!!anchorEl}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Zaloguj</MenuItem>
                    <MenuItem onClick={handleClose}>Zarejestruj</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    )
};


interface Props extends WithStyles<typeof styles> {
    handleDrawerOpen: () => void,
    open: boolean
}

export default withStyles(styles)(AppBarTta);