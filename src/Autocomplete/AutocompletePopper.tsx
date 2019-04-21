import { Paper, Popper } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import renderSuggestion from './renderSuggestion';
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
      open={!!isOpen}
      anchorEl={popperNode}
      style={{ zIndex: 1 }}
      modifiers={{ flip: { enabled: true } }}
    >
      <div {...(isOpen ? getMenuProps({}, { suppressRefError: true }) : {})}>
        <Paper
          square
          style={{
            marginTop: 8,
            width: popperNode ? popperNode.clientWidth : undefined
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
  popperNode: HTMLDivElement | null;
  getMenuProps: any;
  highlightedIndex?: number | null;
  getItemProps: any;
  selectedItem?: Suggestion | null;
  isOpen?: boolean;
  suggestions: Suggestion[];
}

export default AutocompletePopper;
