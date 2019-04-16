import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  TextField
} from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import {
  Field,
  FormSubmitHandler,
  InjectedFormProps,
  reduxForm,
  SubmissionError,
  WrappedFieldProps
} from 'redux-form';
import Autocomplete from '../../../Autocomplete';

const Create: FunctionComponent<InjectedFormProps<{}, {}>> = ({
  handleSubmit
}) => {
  return (
    <Grid container style={{ padding: 24 }}>
      <Grid item xs={12} lg={6}>
        <Card>
          <CardHeader title="Dodaj miejsce" />
          <CardContent>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <TextField variant="outlined" fullWidth label="Nazwa" />
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  name="lat"
                  variant="outlined"
                  fullWidth
                  label="Szerokość geog."
                  type="number"
                  component={renderTextField}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Długość geog."
                  type="number"
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
                  variant="outlined"
                  fullWidth
                  label="Opis dodatkowy"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField variant="outlined" fullWidth label="Odpowiednik" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Pojemność"
                  type="number"
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button color="primary" variant="outlined" onClick={handleSubmit}>
              Zapisz
            </Button>
            <Button variant="outlined">Anuluj</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}: TextFieldRendererProps) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);

const renderAutocompleteField = (fieldProps: TextFieldRendererProps) => (
  <Autocomplete fieldProps={fieldProps} />
);

export interface TextFieldRendererProps extends WrappedFieldProps {
  label: string;
}

const formSubmitHandler: FormSubmitHandler = values => {
  throw new SubmissionError({
    lat: 'Niepoprawna szerokość geo.',
    locality: 'Miejscowość jest wymagana'
  });
};

export default reduxForm({ form: 'place-create', onSubmit: formSubmitHandler })(
  Create
);
