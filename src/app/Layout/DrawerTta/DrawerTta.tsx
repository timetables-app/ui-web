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
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import ScheduleIcon from '@material-ui/icons/Schedule';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
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
            <IconButton onClick={handleDrawerClose} classes={{root: classes.listItemIcon}}>
                {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
            </IconButton>
        </div>
        <Divider className={classes.divider}/>
        <List>
            {[
                {text: 'Rozkłady', Icon: ScheduleIcon, key: 'timetable'},
                {text: 'Przewoźnicy', Icon: AirportShuttleIcon, key: 'carrier'},
                {text: 'Zgubione', Icon: TrackChangesIcon, key: 'lostAndFound'}
            ].map(({text, Icon, key}) => (
                <ListItem button key={text}>
                    <ListItemIcon classes={{root: classes.listItemIcon}}><Icon/></ListItemIcon>
                    <ListItemText primary={text} classes={{primary: classes.listItemText}}/>
                </ListItem>
            ))}
        </List>
        <Divider className={classes.divider}/>
    </Drawer>)
};

interface Props extends WithStyles<typeof styles> {
    handleDrawerClose: () => void,
    open: boolean,
    theme: Theme
}

export default withStyles(styles, {withTheme: true})(DrawerTta);
