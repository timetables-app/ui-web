import {
  Divider,
  Drawer as MUIDrawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Theme,
  WithStyles,
  withStyles
} from '@material-ui/core';
import {
  AirportShuttle,
  Business,
  BusinessCenter,
  ChevronLeft,
  ChevronRight,
  Commute,
  ErrorOutline,
  Gesture,
  NearMe,
  Schedule,
  TrackChanges,
  VerticalSplit
} from '@material-ui/icons';
import classNames from 'classnames';
import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles';

const Drawer: FunctionComponent<Props> = ({
  classes,
  theme,
  handleDrawerClose,
  open
}) => {
  return (
    <MUIDrawer
      variant="permanent"
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })
      }}
      open={open}
    >
      <div className={classes.toolbar}>
        <IconButton
          onClick={handleDrawerClose}
          classes={{ root: classes.listItemIcon }}
        >
          {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
        </IconButton>
      </div>
      <Divider className={classes.divider} />
      <List>
        {[
          {
            Icon: VerticalSplit,
            key: 'timetable',
            link: '/',
            text: 'Rozkłady'
          },
          {
            Icon: ErrorOutline,
            key: 'impediment',
            link: '/impediments',
            text: 'Utrudnienia'
          },
          {
            Icon: Commute,
            key: 'carrier',
            link: '/carriers',
            text: 'Przewoźnicy'
          },
          {
            Icon: TrackChanges,
            key: 'lostAndFound',
            link: '/lost-and-found',
            text: 'Zgubione'
          }
        ].map(({ text, Icon, key, link }) => (
          <Link to={link} key={key}>
            <ListItem button>
              <ListItemIcon classes={{ root: classes.listItemIcon }}>
                <Icon />
              </ListItemIcon>
              <ListItemText
                primary={text}
                classes={{ primary: classes.listItemText }}
              />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider className={classes.divider} />
      <List>
        {open && (
          <ListSubheader disableSticky classes={{ root: classes.listItemIcon }}>
            Właściciel firmy
          </ListSubheader>
        )}
        {[
          { text: 'Moja firma', Icon: BusinessCenter, key: 'company' },
          { text: 'Pojazdy', Icon: AirportShuttle, key: 'vehicle' },
          { text: 'Linie', Icon: Gesture, key: 'line' },
          { text: 'Rozkłady', Icon: Schedule, key: 'timetable' }
        ].map(({ text, Icon, key }) => (
          <ListItem button key={key}>
            <ListItemIcon classes={{ root: classes.listItemIcon }}>
              <Icon />
            </ListItemIcon>
            <ListItemText
              primary={text}
              classes={{ primary: classes.listItemText }}
            />
          </ListItem>
        ))}
      </List>
      <Divider className={classes.divider} />
      <List>
        {open && (
          <ListSubheader disableSticky classes={{ root: classes.listItemIcon }}>
            Administrator
          </ListSubheader>
        )}
        {[
          { text: 'Firmy', Icon: Business, key: 'company' },
          { text: 'Miejsca', Icon: NearMe, key: 'place' }
        ].map(({ text, Icon, key }) => (
          <Link to="/countries" key={key}>
            <ListItem button>
              <ListItemIcon classes={{ root: classes.listItemIcon }}>
                <Icon />
              </ListItemIcon>
              <ListItemText
                primary={text}
                classes={{ primary: classes.listItemText }}
              />
            </ListItem>
          </Link>
        ))}
      </List>
    </MUIDrawer>
  );
};

interface Props extends WithStyles<typeof styles> {
  handleDrawerClose: () => void;
  open: boolean;
  theme: Theme;
}

export default withStyles(styles, { withTheme: true })(Drawer);
