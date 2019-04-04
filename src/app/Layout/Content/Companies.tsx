import classNames from 'classnames';
import React, {FunctionComponent} from 'react';
import styles from './styles';
import {withStyles, WithStyles} from "@material-ui/core";
import {render} from "react-dom";

const Companies: FunctionComponent<Props> = function ({}) {
    return (<div>
        <h2>COMPANIEs</h2>
    </div>)
};

interface Props extends WithStyles<typeof styles> {
}

export default withStyles(styles, {withTheme: true})(Companies);