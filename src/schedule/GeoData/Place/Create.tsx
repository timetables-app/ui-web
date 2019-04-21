import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  TextField as MuiTextField
} from '@material-ui/core';
import axios from 'axios';
import React, { FunctionComponent } from 'react';
import {
  FormSubmitHandler,
  InjectedFormProps,
  reduxForm,
  SubmissionError,
  WrappedFieldProps,
  Field
} from 'redux-form';
import Autocomplete from '../../../Autocomplete';
import { TextField } from '../../../ReduxFormBridge';

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
                <Field
                  name="locality"
                  variant="outlined"
                  label="Miejscowość"
                  fullWidth
                  component={renderAutocompleteField}
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

const renderAutocompleteField = ({
  input,
  meta: { touched, invalid, error }
}: TextFieldRendererProps) => (
  <Autocomplete
    reduxFormProps={input}
    muiProps={{
      error: touched && invalid,
      helperText: touched && error
    }}
  />
);

export interface TextFieldRendererProps extends WrappedFieldProps {
  label: string;
}

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

export default reduxForm({ form: 'place-create', onSubmit: formSubmitHandler })(
  Create
);
