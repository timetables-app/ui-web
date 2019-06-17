import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid
} from '@material-ui/core';
import axios from 'axios';
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
  DateTimeField,
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
  dispatchSetTitle('Dodaj rozkład jazdy');
  return (
    <Grid container style={{ padding: 24 }}>
      <Grid item xs={12} lg={6}>
        <Card>
          <CardHeader title="Dodaj rozkład jazdy" />
          <CardContent>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <DateTimeField
                  label="Ważny od"
                  name="validFrom"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <DateTimeField
                  label="Ważny do"
                  name="validUntil"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <AutocompleteField
                  fetchSuggestions={fetchCompanySuggestion(
                    dispatchIncrementProgress,
                    dispatchDecrementProgress
                  )}
                  name="supportedCompany"
                  variant="outlined"
                  label="Firma obsługująca"
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
              {...{ component: Link, to: '/timetables' } as any}
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
    .post('http://localhost:8080/timetables', values)
    .then(() =>
      dispatch(
        submitFormSuccess({ path: '/timetables', history: props.history })
      )
    )
    .catch(err => {
      dispatch(submitFormError());
      throw new SubmissionError(err.response.data);
    });
};

const fetchCompanySuggestion = (
  dispatchIncrementProgress: () => void,
  dispatchDecrementProgress: () => void
) => (q: string) => {
  dispatchIncrementProgress();
  return axios
    .get('http://localhost:8080/companies/search/q', {
      params: { q, size: 5 }
    })
    .then(response => {
      return response.data.content.map((company: any) => {
        return {
          label: `${company.name} (id: ${company.id})`,
          value: 'http://localhost:8080/companies/' + company.id
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
