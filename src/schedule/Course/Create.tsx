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
  submitFormSuccess
} from '../../framework/ReduxFormBridge';
import { setTitle } from '../../framework/title';

const Create: FunctionComponent<Props> = ({
  handleSubmit,
  submitting,
  setTitle: dispatchSetTitle,

  incrementProgress: dispatchIncrementProgress,
  decrementProgress: dispatchDecrementProgress
}) => {
  dispatchSetTitle('Dodaj kurs');
  return (
    <Grid container style={{ padding: 24 }}>
      <Grid item xs={12} lg={6}>
        <Card>
          <CardHeader title="Dodaj kurs" />
          <CardContent>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <AutocompleteField
                  fetchSuggestions={fetchTimetableSuggestion(
                    dispatchIncrementProgress,
                    dispatchDecrementProgress
                  )}
                  name="timetable"
                  variant="outlined"
                  label="Rozkład jazdy"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <AutocompleteField
                  fetchSuggestions={fetchLineSuggestion(
                    dispatchIncrementProgress,
                    dispatchDecrementProgress
                  )}
                  name="line"
                  variant="outlined"
                  label="Linia"
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
              {...{ component: Link, to: '/courses' } as any}
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

const formSubmitHandler: FormSubmitHandler = (values, dispatch, props: any) => {
  dispatch(submitFormStart());
  return axios
    .post('http://localhost:8080/courses', values)
    .then(() =>
      dispatch(submitFormSuccess({ path: '/courses', history: props.history }))
    )
    .catch(err => {
      dispatch(submitFormError());
      throw new SubmissionError(err.response.data);
    });
};

const fetchTimetableSuggestion = (
  dispatchIncrementProgress: () => void,
  dispatchDecrementProgress: () => void
) => (q: string) => {
  dispatchIncrementProgress();
  return axios
    .get('http://localhost:8080/timetables/search/q', {
      params: { q, size: 5 }
    })
    .then(response => {
      return response.data._embedded.timetables.map((v: any) => {
        return {
          label: `${v.supportedCompany} (${moment(v.validFrom).format(
            'l'
          )} - ${moment(v.validUntil).format('l')}) (id: ${v.id})`,
          value: v._links.self.href
        };
      });
    })
    .finally(dispatchDecrementProgress);
};

const fetchLineSuggestion = (
  dispatchIncrementProgress: () => void,
  dispatchDecrementProgress: () => void
) => (q: string) => {
  dispatchIncrementProgress();
  return axios
    .get('http://localhost:8080/lines/search/q', {
      params: { q, size: 5 }
    })
    .then(response => {
      return response.data._embedded.lines.map((v: any) => {
        return {
          label: `${v.number} (${v.vehicleType})`,
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
  form: 'timetable-create',
  initialValues: {
    validFrom: new Date(),
    validUntil: new Date()
  },
  onSubmit: formSubmitHandler
})(
  connect(
    null,
    mapDispatchToProps
  )(Create)
);
