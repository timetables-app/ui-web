import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { setTitle } from '../../framework/title';

const LogIn: FunctionComponent<Props> = ({ setTitle: dispatchSetTitle }) => {
  dispatchSetTitle('Zaloguj się');
  return <div />;
};

interface Props {
  setTitle: (title: string) => void;
}

const mapDispatchToProps = {
  setTitle
};

export default connect(
  null,
  mapDispatchToProps
)(LogIn);
