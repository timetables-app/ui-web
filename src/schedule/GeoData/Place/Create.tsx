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
} from '../../../framework/LinearProgress';
import {
  AutocompleteField,
  submitFormError,
  submitFormStart,
  submitFormSuccess,
  TextField
} from '../../../framework/ReduxFormBridge';

const Create: FunctionComponent<Props> = ({
  handleSubmit,
  submitting,
  incrementProgress: dispatchIncrementProgress,
  decrementProgress: dispatchDecrementProgress
}) => {
  return (
    <Grid container style={{ padding: 24 }}>
      <Grid item xs={12} lg={6}>
        <Card>
          <CardHeader title="Dodaj miejsce" />
          <CardContent>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <TextField
                  label="Nazwa"
                  name="name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Szerokość geog."
                  name="lat"
                  type="number"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Długość geog."
                  name="lng"
                  type="number"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <AutocompleteField
                  fetchSuggestions={fetchLocalitySuggestion(
                    dispatchIncrementProgress,
                    dispatchDecrementProgress
                  )}
                  name="locality"
                  variant="outlined"
                  label="Miejscowość"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Opis dodatkowy"
                  name="explanation"
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
                  name="variantOf"
                  variant="outlined"
                  label="Odpowiednik"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Pojemność"
                  name="capacity"
                  type="number"
                  variant="outlined"
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
              {...{ component: Link, to: '/geodata/places' } as any}
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
  incrementProgress: () => void;
  decrementProgress: () => void;
}

const formSubmitHandler: FormSubmitHandler = (values, dispatch, props: any) => {
  dispatch(submitFormStart());
  return axios
    .post('http://localhost:8080/places', values)
    .then(() =>
      dispatch(
        submitFormSuccess({ path: '/geodata/places', history: props.history })
      )
    )
    .catch(err => {
      dispatch(submitFormError());
      throw new SubmissionError(err.response.data);
    });
};

const fetchLocalitySuggestion = (
  dispatchIncrementProgress: () => void,
  dispatchDecrementProgress: () => void
) => (q: string) => {
  dispatchIncrementProgress();
  return axios
    .get('http://localhost:8080/localities/search/q', {
      params: { q, size: 5 }
    })
    .then(response => {
      return response.data._embedded.localities.map((locality: any) => ({
        label: `${locality.name}, ${locality.region}, ${locality.state}, ${
          locality.country
        }`,
        value: locality._links.self.href
      }));
    })
    .finally(dispatchDecrementProgress);
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
      return response.data._embedded.places.map((place: any) => ({
        label: `${place.name}, ${place.locality}`,
        value: place._links.self.href
      }));
    })
    .finally(dispatchDecrementProgress);
};

const mapDispatchToProps = {
  decrementProgress,
  incrementProgress
};

export default reduxForm({ form: 'place-create', onSubmit: formSubmitHandler })(
  connect(
    null,
    mapDispatchToProps
  )(Create)
);
