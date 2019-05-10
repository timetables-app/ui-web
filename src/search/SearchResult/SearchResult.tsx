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
import axios from 'axios';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import {
  decrementProgress,
  incrementProgress
} from '../../framework/LinearProgress/store';
import { setTitle } from '../../framework/title';
import dummySearchResult from './dummySearchResult';
import PathDetails from './PathDetails';
import PathSummary from './PathSummary';
import { CourseType, PointType, SearchResultType } from './types';

const SearchResult: FunctionComponent<Props> = ({
  classes,
  setTitle: dispatchSetTitle,
  incrementProgress: dispatchIncrementProgress,
  decrementProgress: dispatchDecrementProgress,
  match: {
    params: { srcPlaceId, destPlaceId }
  }
}) => {
  dispatchSetTitle('Wyniki wyszukiwania');

  const [searchResult, setSearchResult] = useState<SearchResultType>();
  const [searchPerformed, setSearchPerformed] = useState(false);

  useEffect(() => {
    if (+srcPlaceId === 0 || +destPlaceId === 0) {
      setSearchResult(dummySearchResult);
      setSearchPerformed(true);
    } else {
      dispatchIncrementProgress();
      axios
        .get(
          `http://localhost:8080/courses/search?startPlace=${srcPlaceId}&endPlace=${destPlaceId}`
        )
        .then(r => {
          const mappedResult: any = Object.values(r.data.courses).map(
            (v: any) => {
              const course: any = (Object.values(v.parts)[0] as any).course;
              const places: any[] = (Object.values(v.parts)[0] as any).places;
              const sourceTimeSplit = places[0].time.split(':');
              const destinationTimeSplit = places[places.length - 1].time.split(
                ':'
              );
              return {
                changeCount: 0,
                courses: [
                  {
                    id: course.id,
                    line: course.line,
                    points: places.map((vv: any) => ({
                      onDemand: false,
                      place: vv.place,
                      time: new Date(
                        2019,
                        5,
                        1,
                        vv.time.split(':')[0],
                        vv.time.split(':')[1]
                      ),
                      type: PointType.place
                    })),
                    timetable: course.timetable,
                    type: CourseType.transit
                  }
                ],
                destinationTime: new Date(
                  2019,
                  5,
                  1,
                  destinationTimeSplit[0],
                  destinationTimeSplit[1]
                ),
                meansOfTransport: [course.line.vehicleType],
                sourceTime: new Date(
                  2019,
                  5,
                  1,
                  sourceTimeSplit[0],
                  sourceTimeSplit[1]
                )
              };
            }
          );
          setSearchResult(mappedResult as SearchResultType);
        })
        .finally(() => {
          dispatchDecrementProgress();
          setSearchPerformed(true);
        });
    }
  }, []);

  return (
    <Grid container>
      <Grid item xs={12} lg={5} style={{ margin: 16 }}>
        {searchResult && searchResult.length ? (
          searchResult.map((path, idx) => (
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
              <PathDetails courses={path.courses} />
            </ExpansionPanel>
          ))
        ) : searchPerformed ? (
          <Card>
            <CardContent>
              <Typography variant="h5">Brak wyników</Typography>
            </CardContent>
          </Card>
        ) : null}
      </Grid>
    </Grid>
  );
};

interface Props
  extends WithStyles<typeof styles>,
    RouteComponentProps<{ srcPlaceId: string; destPlaceId: string }> {
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
