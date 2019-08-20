import { connect } from 'react-redux';
import UrlEncodedPanel from './UrlEncodedPanel';
// redux action
import {
  updateUrlEncoded,
  setUrlEncodedRowsSelected,
} from 'actions/ApiInterfaceAction';

// map state to props
const mapStateToProps = ({ apiInterface }) => {
  return { apiInterface };
};
const mapDispatchToProps = dispatch => {
  return {
    updateUrlEncoded: (fromRow, toRow, updated) => {
      dispatch(updateUrlEncoded(fromRow, toRow, updated));
    },
    setUrlEncodedRowsSelected: selectedIndexes => {
      dispatch(setUrlEncodedRowsSelected(selectedIndexes));
    },
  };
};

const UrlEncodedPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UrlEncodedPanel);

export default UrlEncodedPanelContainer;
