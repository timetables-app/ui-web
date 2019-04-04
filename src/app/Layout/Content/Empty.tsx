import React, {FunctionComponent} from 'react';
import styles from './styles';
import {withStyles, WithStyles} from "@material-ui/core";

const Empty: FunctionComponent<Props> = function ({}) {
    return (<div>
        <h2>Empty</h2>
    </div>)
};

interface Props extends WithStyles<typeof styles> {
}

export default withStyles(styles, {withTheme: true})(Empty);