import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  MenuItem
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
  SelectField,
  submitFormError,
  submitFormStart,
  submitFormSuccess,
  TextField
} from '../../framework/ReduxFormBridge';
import { setTitle } from '../../framework/title';
import { VehicleType } from '../../search/SearchResult/types';

const Create: FunctionComponent<Props> = ({
  handleSubmit,
  submitting,
  setTitle: dispatchSetTitle
}) => {
  dispatchSetTitle('Dodaj linię');
  return (
    <Grid container style={{ padding: 24 }}>
      <Grid item xs={12} lg={6}>
        <Card>
          <CardHeader title="Dodaj linię" />
          <CardContent>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <TextField
                  label="Numer (nazwa)"
                  name="number"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <SelectField label="Typ pojazdu" name="vehicleType">
                  <MenuItem value="">Wybierz</MenuItem>
                  {Object.keys(VehicleType).map((type, idx) => (
                    <MenuItem key={idx} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </SelectField>
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
              {...{ component: Link, to: '/lines' } as any}
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
}

const formSubmitHandler: FormSubmitHandler = (values, dispatch, props: any) => {
  dispatch(submitFormStart());
  return axios
    .post('http://localhost:8080/lines', values)
    .then(() =>
      dispatch(submitFormSuccess({ path: '/lines', history: props.history }))
    )
    .catch(err => {
      dispatch(submitFormError());
      throw new SubmissionError(err.response.data);
    });
};

const mapDispatchToProps = {
  setTitle
};

export default reduxForm({ form: 'line-create', onSubmit: formSubmitHandler })(
  connect(
    null,
    mapDispatchToProps
  )(Create)
);
