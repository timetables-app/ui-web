import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { setTitle } from '../../framework/title';

const Register: FunctionComponent<Props> = ({ setTitle: dispatchSetTitle }) => {
  dispatchSetTitle('Zarejestruj się');
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
)(Register);
