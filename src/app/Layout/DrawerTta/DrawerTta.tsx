import classNames from 'classnames';
import {
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText, ListSubheader, Theme, Typography,
    WithStyles,
    withStyles
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import ScheduleIcon from '@material-ui/icons/Schedule';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import BusinessIcon from '@material-ui/icons/Business';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import GestureIcon from '@material-ui/icons/Gesture';
import CommuteIcon from '@material-ui/icons/Commute';
import VerticalSplitIcon from '@material-ui/icons/VerticalSplit';
import NearMeIcon from '@material-ui/icons/NearMe';
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
                {text: 'Rozkłady', Icon: VerticalSplitIcon, key: 'timetable'},
                {text: 'Utrudnienia', Icon: ErrorOutlineIcon, key: 'impediment'},
                {text: 'Przewoźnicy', Icon: CommuteIcon, key: 'carrier'},
                {text: 'Zgubione', Icon: TrackChangesIcon, key: 'lostAndFound'}
            ].map(({text, Icon, key}) => (
                <ListItem button key={text}>
                    <ListItemIcon classes={{root: classes.listItemIcon}}><Icon/></ListItemIcon>
                    <ListItemText primary={text} classes={{primary: classes.listItemText}}/>
                </ListItem>
            ))}
        </List>
        <Divider className={classes.divider}/>
        <List>
            {open && (<ListSubheader disableSticky classes={{root: classes.listItemIcon}}>Właściciel firmy</ListSubheader>)}
            {[
                {text: 'Moja firma', Icon: BusinessCenterIcon, key: 'company'},
                {text: 'Pojazdy', Icon: AirportShuttleIcon, key: 'vehicle'},
                {text: 'Linie', Icon: GestureIcon, key: 'line'},
                {text: 'Rozkłady', Icon: ScheduleIcon, key: 'timetable'}
            ].map(({text, Icon, key}) => (
                <ListItem button key={text}>
                    <ListItemIcon classes={{root: classes.listItemIcon}}><Icon/></ListItemIcon>
                    <ListItemText primary={text} classes={{primary: classes.listItemText}}/>
                </ListItem>
            ))}
        </List>
        <Divider className={classes.divider}/>
        <List>
            {open && (<ListSubheader disableSticky classes={{root: classes.listItemIcon}}>Administrator</ListSubheader>)}
            {[
                {text: 'Firmy', Icon: BusinessIcon, key: 'company'},
                {text: 'Miejsca', Icon: NearMeIcon, key: 'place'},
            ].map(({text, Icon, key}) => (
                <ListItem button key={text}>
                    <ListItemIcon classes={{root: classes.listItemIcon}}><Icon/></ListItemIcon>
                    <ListItemText primary={text} classes={{primary: classes.listItemText}}/>
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
