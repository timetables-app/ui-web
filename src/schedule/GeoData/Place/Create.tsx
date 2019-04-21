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
import {
  FormSubmitHandler,
  InjectedFormProps,
  reduxForm,
  SubmissionError
} from 'redux-form';
import { AutocompleteField, TextField } from '../../../ReduxFormBridge';

const Create: FunctionComponent<InjectedFormProps<{}, {}>> = ({
  handleSubmit,
  submitting
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
                  fetchSuggestions={fetchData}
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
                {/*<TextField variant="outlined" fullWidth label="Odpowiednik" />*/}
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
            <Button variant="outlined" disabled={submitting}>
              Anuluj
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

const formSubmitHandler: FormSubmitHandler = values => {
  return axios
    .post('http://localhost:8080/places', values)
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      throw new SubmissionError(err.response.data);
    });
};

const fetchData = (q: string) => {
  // incrementProgress();
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
    });
  // .finally(decrementProgress);
};

export default reduxForm({ form: 'place-create', onSubmit: formSubmitHandler })(
  Create
);
