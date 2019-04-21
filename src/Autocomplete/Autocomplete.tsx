import { withStyles, WithStyles } from '@material-ui/core';
// tslint:disable-next-line:no-submodule-imports
import { TextFieldProps } from '@material-ui/core/TextField';
import Downshift, { Actions, DownshiftProps, PropGetters } from 'downshift';
import React, { FunctionComponent, useState } from 'react';
import { WrappedFieldInputProps } from 'redux-form';
import AutocompleteInput from './AutocompleteInput';
import AutocompletePopper, { Suggestion } from './AutocompletePopper';
import styles from './styles';

const Autocomplete: FunctionComponent<Props> = ({
  classes,
  muiProps,
  reduxFormProps
}) => {
  const onChange = (v: Suggestion | null) =>
    reduxFormProps.onChange(v ? v.value : v);

  const itemToString = (v: Suggestion | string | null) =>
    typeof v === 'object' ? (v ? v.label : '') : v;

  const [inputRef, setInputRef] = useState<HTMLDivElement | null>(null);

  return (
    <Downshift onChange={onChange} itemToString={itemToString}>
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        highlightedIndex,
        inputValue,
        isOpen,
        selectedItem,
        reset,
        clearSelection
      }: RenderPropProps) => {
        const resetInput = () => {
          reset();
          clearSelection();
        };

        return (
          <div className={classes.container}>
            <AutocompleteInput
              resetInput={resetInput}
              downshiftProps={getInputProps()}
              reduxFormProps={reduxFormProps}
              muiProps={muiProps}
              inputRef={setInputRef}
            />
            <AutocompletePopper
              getItemProps={getItemProps}
              getMenuProps={getMenuProps}
              highlightedIndex={highlightedIndex}
              inputValue={inputValue}
              isOpen={isOpen}
              popperNode={inputRef}
              selectedItem={selectedItem}
            />
          </div>
        );
      }}
    </Downshift>
  );
};

type RenderPropProps = DownshiftProps<Suggestion> &
  Actions<Suggestion> &
  PropGetters<Suggestion>;

interface Props extends WithStyles<typeof styles> {
  reduxFormProps: WrappedFieldInputProps;
  muiProps: TextFieldProps;
}

export default withStyles(styles, { withTheme: true })(Autocomplete);
