import { withStyles, WithStyles } from '@material-ui/core';
import { TextFieldProps } from '@material-ui/core/TextField';
import Downshift, { Actions, DownshiftProps, PropGetters } from 'downshift';
import React, {
  ChangeEvent,
  FocusEvent,
  FunctionComponent,
  useState
} from 'react';
import AutocompleteInput from './AutocompleteInput';
import AutocompletePopper from './AutocompletePopper';
import styles from './styles';
import { Suggestion, SuggestionsFetcher } from './types';

const Autocomplete: FunctionComponent<Props> = ({
  fetchSuggestions,
  classes,
  onChange: onChangeInjected,
  onBlur,
  ...muiProps
}) => {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [inputRef, setInputRef] = useState<HTMLDivElement | null>(null);

  const onInputValueChange = (v: string) => {
    if (v) {
      fetchSuggestions(v).then(setSuggestions);
    }
  };

  const itemToString = (v: Suggestion | string | null) =>
    typeof v === 'object' ? (v ? v.label : '') : v;

  return (
    <Downshift
      onChange={onChangeInjected}
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

type Props = SuggestionsFetcher &
  TextFieldProps &
  WithStyles<typeof styles> & {
    onChange: (e: ChangeEvent) => void;
    onBlur: (e: FocusEvent) => void;
  };

export default withStyles(styles, { withTheme: true })(Autocomplete);
