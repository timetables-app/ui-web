import classNames from 'classnames';
import React, {FunctionComponent} from 'react';
import styles from './styles';
import {withStyles, WithStyles} from "@material-ui/core";

const Content: FunctionComponent<Props> = function ({classes, contentOpen}) {
    return (<div
        className={classNames(classes.defaultStyle, {
            [classes.contentOpen]: contentOpen,
            [classes.contentClose]: !contentOpen,
        })}>
        <span>Test</span>
    </div>)
};

interface Props extends WithStyles<typeof styles> {
    contentOpen: boolean
}

export default withStyles(styles, {withTheme: true})(Content);