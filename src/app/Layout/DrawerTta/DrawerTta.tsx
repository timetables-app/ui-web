import classNames from 'classnames';
import {
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText, Theme,
    WithStyles,
    withStyles
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import React, {FunctionComponent} from 'react';
import styles from './styles';

const DrawerTta: FunctionComponent<Props> = function ({classes, theme, handleDrawerClose, open}) {
    return (<Drawer
        variant="permanent"
        className={classNames(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
        })}
        classes={{
            paper: classNames({
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            }),
        }}
        open={open}
    >
        <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
            </IconButton>
        </div>
        <Divider/>
        <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
                    <ListItemText primary={text}/>
                </ListItem>
            ))}
        </List>
        <Divider/>
        <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
                <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
                    <ListItemText primary={text}/>
                </ListItem>
            ))}
        </List>
    </Drawer>)
};

interface Props extends WithStyles<typeof styles> {
    handleDrawerClose: () => void,
    open: boolean,
    theme: Theme
}

export default withStyles(styles, {withTheme: true})(DrawerTta);
