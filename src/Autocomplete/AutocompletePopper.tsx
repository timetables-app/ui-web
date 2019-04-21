import { MenuItem, Paper, Popper } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import { Suggestion } from './types';

const AutocompletePopper: FunctionComponent<Props> = ({
  popperNode,
  getMenuProps,
  highlightedIndex,
  getItemProps,
  selectedItem,
  isOpen,
  suggestions
}) => {
  return (
    <Popper
      open={isOpen}
      anchorEl={popperNode}
      style={{ zIndex: 1 }}
      modifiers={{ flip: { enabled: true } }}
    >
      <div {...(isOpen ? getMenuProps({}, { suppressRefError: true }) : {})}>
        <Paper
          square
          style={{
            marginTop: 8,
            width: popperNode ? popperNode.clientWidth : null
          }}
        >
          {suggestions.map((suggestion, index) =>
            renderSuggestion({
              highlightedIndex,
              index,
              itemProps: getItemProps({
                item: suggestion
              }),
              selectedItem,
              suggestion
            })
          )}
        </Paper>
      </div>
    </Popper>
  );
};

interface Props {
  popperNode: any;
  getMenuProps: any;
  highlightedIndex: any;
  getItemProps: any;
  selectedItem: any;
  isOpen: any;
  suggestions: Suggestion[];
}

function renderSuggestion({
  suggestion,
  index,
  itemProps,
  highlightedIndex,
  selectedItem
}: any) {
  const isHighlighted = highlightedIndex === index;
  const isSelected = false; // (selectedItem.label || '').indexOf(suggestion.label) > -1;

  return (
    <MenuItem
      {...itemProps}
      key={suggestion.label}
      selected={isHighlighted}
      component="div"
      style={{
        fontWeight: isSelected ? 500 : 400
      }}
    >
      {suggestion.label}
    </MenuItem>
  );
}

export default AutocompletePopper;
