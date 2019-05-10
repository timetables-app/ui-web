import {
  Card,
  CardContent,
  createStyles,
  ExpansionPanel,
  ExpansionPanelSummary,
  Grid,
  Typography,
  withStyles,
  WithStyles
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import {
  decrementProgress,
  incrementProgress
} from '../../framework/LinearProgress/store';
import { setTitle } from '../../framework/title';
import dummySearchResult from './dummySearchResult';
import PathDetails from './PathDetails';
import PathSummary from './PathSummary';

const SearchResult: FunctionComponent<Props> = ({
  classes,
  setTitle: dispatchSetTitle,
  incrementProgress: dispatchIncrementProgress,
  decrementProgress: dispatchDecrementProgress
}) => {
  dispatchSetTitle('Wyniki wyszukiwania');
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
                <PathSummary
                  sourceTime={path.sourceTime}
                  destinationTime={path.destinationTime}
                  meansOfTransport={path.meansOfTransport}
                  changeCount={path.changeCount}
                />
              </ExpansionPanelSummary>
              <PathDetails />
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

interface Props extends WithStyles<typeof styles> {
  setTitle: (title: string) => void;
  incrementProgress: () => void;
  decrementProgress: () => void;
}

const styles = createStyles({
  content: {
    display: 'block'
  }
});

const mapDispatchToProps = {
  decrementProgress,
  incrementProgress,
  setTitle
};

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(SearchResult));
