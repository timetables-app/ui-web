import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { setTitle } from '../../framework/title';

const Impediment: FunctionComponent<Props> = ({
  setTitle: dispatchSetTitle
}) => {
  dispatchSetTitle('Utrudnienia');
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
)(Impediment);
