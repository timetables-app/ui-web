import {
  createStyles,
  ExpansionPanelDetails,
  Typography,
  withStyles,
  WithStyles
} from '@material-ui/core';
import moment from 'moment';
import React, { FunctionComponent } from 'react';
import { Course, isCourseTransit, isPlacePoint } from '../types';
import Line from './Line';

const PathDetails: FunctionComponent<Props> = ({ classes, courses }) => (
  <ExpansionPanelDetails classes={{ root: classes.root }}>
    {courses.map((course, idx) => (
      <React.Fragment key={idx}>
        {isCourseTransit(course) ? (
          <Line
            lineNumber={course.line.number}
            supportedCompany={course.timetable.supportedCompany.name}
            vehicleType={course.line.vehicleType}
          />
        ) : (
          <Line />
        )}
        <div className={classes.placeLine}>
          <ul className={classes.placeList}>
            {course.points.filter(isPlacePoint).map((point, idxx) => (
              <li key={idxx}>
                <Typography>
                  {moment(point.time).format('LT')} {point.place.name}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </React.Fragment>
    ))}
  </ExpansionPanelDetails>
);

interface Props extends WithStyles<typeof styles> {
  courses: Course[];
}

const styles = createStyles({
  placeLine: {
    borderLeft: '1px solid rgb(196, 196, 196)',
    margin: '-6px 0 0 16px',
    padding: '10px 0'
  },
  placeList: {
    color: 'rgb(117, 117, 117)',
    fontSize: '24px',
    margin: '0 0 0 17px',
    padding: '0'
  },
  root: {
    display: 'block'
  }
});

export default withStyles(styles)(PathDetails);
