import { IconButton, InputAdornment, TextField } from '@material-ui/core';
// tslint:disable-next-line:no-submodule-imports
import { TextFieldProps } from '@material-ui/core/TextField';
import { Close } from '@material-ui/icons';
import { GetInputPropsOptions } from 'downshift';
import React, { FunctionComponent } from 'react';
import { WrappedFieldInputProps } from 'redux-form';

const AutocompleteInput: FunctionComponent<Props> = ({
  downshiftProps,
  reduxFormProps,
  muiProps,
  resetInput,
  inputRef
}) => {
  return (
    <div ref={inputRef}>
      <TextField
        InputProps={{
          endAdornment: downshiftProps.value && (
            <InputAdornment position="end">
              <IconButton onClick={resetInput}>
                <Close />
              </IconButton>
            </InputAdornment>
          ),
          ...(downshiftProps as any) // fixme incompatible mui & downshift types
        }}
        {...reduxFormProps}
        {...muiProps}
      />
    </div>
  );
};

interface Props {
  downshiftProps: GetInputPropsOptions;
  reduxFormProps: WrappedFieldInputProps;
  muiProps: TextFieldProps;
  resetInput: () => void;
  inputRef: (ref: HTMLDivElement | null) => void;
}

export default AutocompleteInput;
