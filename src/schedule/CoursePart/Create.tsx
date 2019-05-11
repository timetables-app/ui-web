import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid
} from '@material-ui/core';
import axios from 'axios';
import moment from 'moment';
import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  FormSubmitHandler,
  InjectedFormProps,
  reduxForm,
  SubmissionError
} from 'redux-form';
import {
  decrementProgress,
  incrementProgress
} from '../../framework/LinearProgress/store';
import {
  AutocompleteField,
  submitFormError,
  submitFormStart,
  submitFormSuccess,
  TimeField
} from '../../framework/ReduxFormBridge';
import { setTitle } from '../../framework/title';

const Create: FunctionComponent<Props> = ({
  handleSubmit,
  submitting,
  setTitle: dispatchSetTitle,

  incrementProgress: dispatchIncrementProgress,
  decrementProgress: dispatchDecrementProgress
}) => {
  dispatchSetTitle('Dodaj element kursu');
  return (
    <Grid container style={{ padding: 24 }}>
      <Grid item xs={12} lg={6}>
        <Card>
          <CardHeader title="Dodaj element kursu" />
          <CardContent>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <AutocompleteField
                  fetchSuggestions={fetchPlaceSuggestion(
                    dispatchIncrementProgress,
                    dispatchDecrementProgress
                  )}
                  name="source"
                  variant="outlined"
                  label="Początek"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TimeField
                  label="Czas początku"
                  name="sourceTime"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <AutocompleteField
                  fetchSuggestions={fetchPlaceSuggestion(
                    dispatchIncrementProgress,
                    dispatchDecrementProgress
                  )}
                  name="destination"
                  variant="outlined"
                  label="Cel"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TimeField
                  label="Czas celu"
                  name="destinationTime"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <AutocompleteField
                  fetchSuggestions={fetchCourseSuggestion(
                    dispatchIncrementProgress,
                    dispatchDecrementProgress
                  )}
                  name="course"
                  variant="outlined"
                  label="Kurs"
                  fullWidth
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button
              color="primary"
              variant="outlined"
              onClick={handleSubmit}
              disabled={submitting}
            >
              Zapisz
            </Button>

            <Button
              variant="outlined"
              disabled={submitting}
              {...{ component: Link, to: '/course-parts' } as any}
            >
              Anuluj
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

interface Props extends InjectedFormProps<{}, {}> {
  setTitle: (title: string) => void;
  incrementProgress: () => void;
  decrementProgress: () => void;
}

const formSubmitHandler: FormSubmitHandler = (
  { sourceTime, destinationTime, ...restValues }: any,
  dispatch,
  props: any
) => {
  dispatch(submitFormStart());
  return axios
    .post('http://localhost:8080/courseParts', {
      destinationOnDemand: false,
      destinationTime: moment(destinationTime).format('LT'),
      sourceTime: moment(sourceTime).format('LT'),
      ...restValues
    })
    .then(() =>
      dispatch(
        submitFormSuccess({ path: '/course-parts', history: props.history })
      )
    )
    .catch(err => {
      dispatch(submitFormError());
      throw new SubmissionError(err.response.data);
    });
};

const fetchPlaceSuggestion = (
  dispatchIncrementProgress: () => void,
  dispatchDecrementProgress: () => void
) => (q: string) => {
  dispatchIncrementProgress();
  return axios
    .get('http://localhost:8080/places/search/q', {
      params: { q, size: 5 }
    })
    .then(response => {
      return response.data._embedded.places.map((v: any) => ({
        label: `${v.name}, ${v.locality}`,
        value: v._links.self.href
      }));
    })
    .finally(dispatchDecrementProgress);
};

const fetchCourseSuggestion = (
  dispatchIncrementProgress: () => void,
  dispatchDecrementProgress: () => void
) => (q: string) => {
  dispatchIncrementProgress();
  return axios
    .get('http://localhost:8080/courses/search/q', {
      params: { q, size: 5 }
    })
    .then(response => {
      return response.data._embedded.courses.map((v: any) => {
        return {
          label: `linia ${v.lineNumber} (id: ${v.id}, ${v.vehicleType}, ${
            v.supportedCompany
          })`,
          value: v._links.self.href
        };
      });
    })
    .finally(dispatchDecrementProgress);
};

const mapDispatchToProps = {
  decrementProgress,
  incrementProgress,
  setTitle
};

export default reduxForm({
  form: 'course-part-create',
  initialValues: {
    destinationTime: new Date(),
    sourceTime: new Date()
  },
  onSubmit: formSubmitHandler
})(
  connect(
    null,
    mapDispatchToProps
  )(Create)
);
