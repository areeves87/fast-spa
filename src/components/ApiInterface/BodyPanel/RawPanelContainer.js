import { connect } from 'react-redux';
import RawPanel from './RawPanel';
// redux action
import {
  updateHeaders,
  setHeadersRowsSelected,
} from 'actions/ApiInterfaceAction';

// map state to props
const mapStateToProps = ({ apiInterface }) => {
  return { apiInterface };
};
const mapDispatchToProps = dispatch => {
  return {
    updateHeaders: (fromRow, toRow, updated) => {
      dispatch(updateHeaders(fromRow, toRow, updated));
    },
    setHeadersRowsSelected: selectedIndexes => {
      dispatch(setHeadersRowsSelected(selectedIndexes));
    },
  };
};

const RawPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RawPanel);

export default RawPanelContainer;
