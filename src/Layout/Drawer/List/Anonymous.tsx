import { List } from '@material-ui/core';
import {
  Commute,
  ErrorOutline,
  TrackChanges,
  VerticalSplit
} from '@material-ui/icons';
import React from 'react';
import ListItem from './ListItem';

const Anonymous = () => {
  return (
    <List>
      {[
        {
          Icon: VerticalSplit,
          exact: true,
          text: 'Rozkłady',
          to: '/'
        }
        // {
        //   Icon: ErrorOutline,
        //   text: 'Utrudnienia',
        //   to: '/impediments'
        // },
        // {
        //   Icon: Commute,
        //   text: 'Przewoźnicy',
        //   to: '/carriers'
        // },
        // {
        //   Icon: TrackChanges,
        //   text: 'Zgubione',
        //   to: '/lost-and-found'
        // }
      ].map((props, idx) => (
        <ListItem key={idx} {...props} />
      ))}
    </List>
  );
};

export default Anonymous;
