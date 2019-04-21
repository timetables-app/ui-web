import { withStyles, WithStyles } from '@material-ui/core';
// tslint:disable-next-line:no-submodule-imports
import { TextFieldProps } from '@material-ui/core/TextField';
import Downshift, { Actions, DownshiftProps, PropGetters } from 'downshift';
import React, { FunctionComponent, useState } from 'react';
import { WrappedFieldInputProps } from 'redux-form';
import AutocompleteInput from './AutocompleteInput';
import AutocompletePopper from './AutocompletePopper';
import styles from './styles';
import { Suggestion, SuggestionsFetcher } from './types';

const Autocomplete: FunctionComponent<Props> = ({
  classes,
  muiProps,
  reduxFormProps,
  fetchSuggestions
}) => {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [inputRef, setInputRef] = useState<HTMLDivElement | null>(null);

  const onChange = (v: Suggestion | null) =>
    reduxFormProps.onChange(v ? v.value : v);

  const onInputValueChange = (v: string) => {
    if (v) {
      fetchSuggestions(v).then(setSuggestions);
    }
  };

  const itemToString = (v: Suggestion | string | null) =>
    typeof v === 'object' ? (v ? v.label : '') : v;

  return (
    <Downshift
      onChange={onChange}
      onInputValueChange={onInputValueChange}
      itemToString={itemToString}
    >
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        highlightedIndex,
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
              isOpen={isOpen}
              popperNode={inputRef}
              selectedItem={selectedItem}
              suggestions={suggestions}
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

interface Props extends SuggestionsFetcher, WithStyles<typeof styles> {
  reduxFormProps: WrappedFieldInputProps;
  muiProps: TextFieldProps;
}

export default withStyles(styles, { withTheme: true })(Autocomplete);
