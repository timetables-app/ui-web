import { IconButton, InputAdornment, TextField } from '@material-ui/core';
// tslint:disable-next-line:no-submodule-imports
import { TextFieldProps } from '@material-ui/core/TextField';
import { Close } from '@material-ui/icons';
import React, { FunctionComponent } from 'react';
import { WrappedFieldInputProps } from 'redux-form';

const AutocompleteInput: FunctionComponent<Props> = ({
  inputRef,
  downshiftProps,
  resetInput,
  reduxFormProps,
  muiProps
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
          ...downshiftProps
        }}
        {...reduxFormProps}
        {...muiProps}
      />
    </div>
  );
};

interface Props {
  downshiftProps: any;
  reduxFormProps: WrappedFieldInputProps;
  muiProps: TextFieldProps;
  resetInput: () => void;
  inputRef: (ref: HTMLDivElement | null) => void;
}

export default AutocompleteInput;
