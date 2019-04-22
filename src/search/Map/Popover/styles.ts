import { createStyles } from '@material-ui/core';

const arrowSize = 12;
const borderColor = '#d8d8d8';
const backgroundColor = '#fff';
const arrowCommon = {
  borderColor: 'transparent',
  borderStyle: 'solid',
  display: 'block',
  height: 0,
  width: 0
};

export default createStyles({
  arrow: {
    '&:after': {
      borderBottomWidth: 0,
      borderTopColor: backgroundColor,
      borderWidth: arrowSize,
      bottom: '1px',
      content: '" "',
      marginLeft: arrowSize * -1,
      ...arrowCommon,
      position: 'absolute' // not in arrowCommon, because ts complains
    },
    borderBottomWidth: 0,
    borderTopColor: borderColor,
    borderWidth: arrowSize,
    bottom: arrowSize * -1,
    left: '50%',
    marginLeft: arrowSize * -1,
    ...arrowCommon,
    position: 'absolute'
  },
  container: {
    position: 'absolute',
    zIndex: 9999
  },
  content: {
    background: '#fff',
    border: '1px solid',
    borderColor,
    borderRadius: '5px',
    boxShadow: '0 1px 10px 0 rgba(0,0,0,.2)',
    padding: '12px 16px'
  },
  placeName: {
    marginBottom: '12px'
  },
  sourceBtn: {
    marginRight: '12px'
  }
});
