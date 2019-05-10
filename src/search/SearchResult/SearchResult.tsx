import {
  Card,
  CardContent,
  Chip,
  ExpansionPanel,
  ExpansionPanelSummary,
  Grid,
  IconButton,
  Tooltip,
  Typography,
  withStyles,
  WithStyles
} from '@material-ui/core';
import {
  ChevronRight,
  DirectionsBus,
  DirectionsWalk,
  ExpandMore,
  Subway,
  Train,
  Tram
} from '@material-ui/icons';
import moment from 'moment';
import React, { FunctionComponent } from 'react';
import dummySearchResult from './dummySearchResult';
import styles from './styles';
import Change from './Change';

const SearchResult: FunctionComponent<Props> = ({ classes }) => {
  return (
    <Grid container>
      <Grid item xs={12} lg={5} style={{ margin: 16 }}>
        {dummySearchResult.paths.length ? (
          dummySearchResult.paths.map((path, idx) => (
            <ExpansionPanel key={idx}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMore />}
                classes={classes}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant="subheading">
                    {moment(path.sourceTime).format('LT')}
                  </Typography>
                  <ChevronRight />
                  <Typography variant="subheading">
                    {moment(path.destinationTime).format('LT')}
                  </Typography>
                </div>
                <div>
                  <Tooltip title="Trasa zawiera przejście pieszo">
                    <IconButton disableTouchRipple>
                      <DirectionsWalk fontSize={'small'} />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Trasa zawiera przejazd metrem">
                    <IconButton disableTouchRipple>
                      <Subway fontSize={'small'} />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Trasa zawiera przejazd pociągiem">
                    <IconButton disableTouchRipple>
                      <Train fontSize={'small'} />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Trasa zawiera przejazd tramwajem">
                    <IconButton disableTouchRipple>
                      <Tram fontSize={'small'} />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Trasa zawiera przejazd busem">
                    <IconButton disableTouchRipple>
                      <DirectionsBus fontSize={'small'} />
                    </IconButton>
                  </Tooltip>
                  <Change />
                </div>
              </ExpansionPanelSummary>
            </ExpansionPanel>
          ))
        ) : (
          <Card>
            <CardContent>
              <Typography variant="h5">Brak wyników</Typography>
            </CardContent>
          </Card>
        )}
      </Grid>
    </Grid>
  );
};

interface Props extends WithStyles<typeof styles> {}

export default withStyles(styles)(SearchResult);
