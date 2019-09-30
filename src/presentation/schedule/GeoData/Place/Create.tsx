import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  TextField
} from '@material-ui/core';
import axios from 'axios';
import { Form, Formik, FormikActions, FormikProps } from 'formik';
import { History } from 'history';
import React, { FunctionComponent } from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import Autocomplete from '../../../framework/Autocomplete';

const Create: FunctionComponent<RouteComponentProps> = ({ history }) => {
  return (
    <Grid container style={{ padding: 24 }}>
      <Grid item xs={12} lg={6}>
        <Card>
          <CardHeader title="Dodaj miejsce" />
          <Formik
            initialValues={{}}
            onSubmit={onSubmit(history)}
            component={FormCreate}
          />
        </Card>
      </Grid>
    </Grid>
  );
};

const FormCreate: FunctionComponent<FormikProps<Values>> = ({
  isSubmitting,
  values,
  handleBlur,
  handleChange,
  errors
}) => (
  <Form>
    <CardContent>
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <TextField
            label="Nazwa"
            name="name"
            variant="outlined"
            fullWidth
            value={values.name}
            onBlur={handleBlur}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Szerokość geog."
            name="lat"
            type="number"
            variant="outlined"
            fullWidth
            value={values.lat}
            onBlur={handleBlur}
            onChange={handleChange}
            error={!!errors.lat}
            helperText={errors.lat}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Długość geog."
            name="lng"
            type="number"
            variant="outlined"
            fullWidth
            value={values.lng}
            onBlur={handleBlur}
            onChange={handleChange}
            error={!!errors.lng}
            helperText={errors.lng}
          />
        </Grid>
        <Grid item xs={12}>
          <Autocomplete
            fetchSuggestions={fetchLocalitySuggestion}
            name="locality"
            variant="outlined"
            label="Miejscowość"
            fullWidth
            value={values.locality}
            onBlur={handleBlur}
            onChange={handleChange}
            error={!!errors.locality}
            helperText={errors.locality}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Opis dodatkowy"
            name="explanation"
            variant="outlined"
            fullWidth
            value={values.explanation}
            onBlur={handleBlur}
            onChange={handleChange}
            error={!!errors.explanation}
            helperText={errors.explanation}
          />
        </Grid>
        <Grid item xs={12}>
          <Autocomplete
            fetchSuggestions={fetchPlaceSuggestion}
            name="variantOf"
            variant="outlined"
            label="Odpowiednik"
            fullWidth
            value={values.variantOf}
            onBlur={handleBlur}
            onChange={handleChange}
            error={!!errors.variantOf}
            helperText={errors.variantOf}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Pojemność"
            name="capacity"
            type="number"
            variant="outlined"
            fullWidth
            value={values.capacity}
            onBlur={handleBlur}
            onChange={handleChange}
            error={!!errors.capacity}
            helperText={errors.capacity}
          />
        </Grid>
      </Grid>
    </CardContent>
    <CardActions>
      <Button
        color="primary"
        variant="outlined"
        type="submit"
        disabled={isSubmitting}
      >
        Zapisz
      </Button>

      <Button
        variant="outlined"
        disabled={isSubmitting}
        {...({ component: Link, to: '/geodata/places' } as any)}
      >
        Anuluj
      </Button>
    </CardActions>
  </Form>
);

interface Values {
  name?: string;
  lat?: number;
  lng?: number;
  locality?: string;
  explanation?: string;
  variantOf?: string;
  capacity?: number;
}

const onSubmit = (history: History) => (
  values: Values,
  formikActions: FormikActions<Values>
) => {
  return axios
    .post('http://localhost:8080/places', values)
    .then(() => history.push('/geodata/places'))
    .catch(err => {
      formikActions.setErrors(err.response.data);
    });
};

const fetchLocalitySuggestion = (q: string) => {
  return axios
    .get('http://localhost:8080/localities/search/q', {
      params: { q, size: 5 }
    })
    .then(response => {
      return response.data._embedded.localities.map((locality: any) => ({
        label: `${locality.name}, ${locality.region}, ${locality.state}, ${locality.country}`,
        value: locality._links.self.href
      }));
    });
};

const fetchPlaceSuggestion = (q: string) => {
  return axios
    .get('http://localhost:8080/places/search/q', {
      params: { q, size: 5 }
    })
    .then(response => {
      return response.data._embedded.places.map((place: any) => ({
        label: `${place.name}, ${place.locality}`,
        value: place._links.self.href
      }));
    });
};

export default withRouter(Create);
