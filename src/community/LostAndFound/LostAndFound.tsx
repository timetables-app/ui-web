import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { setTitle } from '../../framework/title';

const LostAndFound: FunctionComponent<Props> = ({
  setTitle: dispatchSetTitle
}) => {
  dispatchSetTitle('Zgubione & znalezione');
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
)(LostAndFound);
