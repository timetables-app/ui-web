import { createStyles, Theme } from '@material-ui/core';

export default (theme: Theme) =>
  createStyles({
    chip: {
      margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`
    },
    container: {
      flexGrow: 1,
      position: 'relative'
    },
    divider: {
      height: theme.spacing.unit * 2
    },
    root: {
      flexGrow: 1,
      height: 250
    }
  });
