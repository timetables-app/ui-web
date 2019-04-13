import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { setAppBarTitleActionCreator } from '../../Layout';

const MyCompany: FunctionComponent<Props> = ({ setAppBarTitle }) => {
  setAppBarTitle('Moja firma');
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
)(MyCompany);