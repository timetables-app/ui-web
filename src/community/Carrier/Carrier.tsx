import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { setAppBarTitleActionCreator } from '../../Layout';

const Carrier: FunctionComponent<Props> = ({ setAppBarTitle }) => {
  setAppBarTitle('Przewoźnicy');
  return <div />;
};

interface Props {
  setAppBarTitle: (appBarTitle: string) => void;
}

const mapDispatchToProps = {
  setAppBarTitle: setAppBarTitleActionCreator
};

export default connect(
  null,
  mapDispatchToProps
)(Carrier);
