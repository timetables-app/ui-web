// tslint:disable-next-line:no-submodule-imports
import { TextFieldProps } from '@material-ui/core/TextField';
import React, { FunctionComponent } from 'react';
import { Field, WrappedFieldProps } from 'redux-form';
import Autocomplete from '../Autocomplete/Autocomplete';

const AutocompleteField: FunctionComponent<Props> = ({ name, ...muiProps }) => {
  return <Field name={name} component={render(muiProps)} />;
};

type Props = TextFieldProps & {
  name: string;
};

const render = (muiProps: TextFieldProps) => ({
  input,
  meta: { touched, invalid, error }
}: WrappedFieldProps) => (
  <Autocomplete
    reduxFormProps={input}
    muiProps={{
      error: touched && invalid,
      helperText: touched && error
    }}
  />
);

export default AutocompleteField;
