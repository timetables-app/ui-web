import classNames from 'classnames';
import React, {FunctionComponent} from 'react';
import styles from './styles';
import {withStyles, WithStyles} from "@material-ui/core";

const Content: FunctionComponent<Props> = function ({classes, contentOpen, contentComponent}) {
    return (<div
        className={classNames(classes.defaultStyle, {
            [classes.contentOpen]: contentOpen,
            [classes.contentClose]: !contentOpen,
        })}>
        <h2>Test</h2>
        {contentComponent}
    </div>)
};

interface Props extends WithStyles<typeof styles> {
    contentOpen: boolean
    contentComponent: JSX.Element
}

export default withStyles(styles, {withTheme: true})(Content);