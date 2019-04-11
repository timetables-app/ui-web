import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { setAppBarTitleActionCreator } from '../../Layout';

const Timetable: FunctionComponent<Props> = ({ setAppBarTitle }) => {
  setAppBarTitle('Rozkłady');
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
)(Timetable);
