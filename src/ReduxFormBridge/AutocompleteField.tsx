// tslint:disable-next-line:no-submodule-imports
import { TextFieldProps } from '@material-ui/core/TextField';
import React, { FunctionComponent } from 'react';
import { Field, WrappedFieldProps } from 'redux-form';
import Autocomplete from '../Autocomplete/Autocomplete';

const AutocompleteField: FunctionComponent<Props> = ({ name, ...muiProps }) => {
  // fixme muiProps spread not as any?
  return <Field name={name} component={render} {...muiProps as any} />;
};

type Props = TextFieldProps & {
  name: string;
};

const render = ({
  input,
  meta: { touched, invalid, error },
  ...muiProps
}: WrappedFieldProps) => (
  <Autocomplete
    reduxFormProps={input}
    muiProps={{
      error: touched && invalid,
      helperText: touched && error,
      ...muiProps
    }}
  />
);

export default AutocompleteField;
