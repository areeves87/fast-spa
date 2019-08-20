import { connect } from 'react-redux';
import ParamsPanel from './ParamsPanel';
// redux action
import { updateParams, setRowsSelected } from 'actions/ApiInterfaceAction';

// map state to props
const mapStateToProps = ({ apiInterface }) => {
  return { apiInterface };
};
const mapDispatchToProps = dispatch => {
  return {
    updateParams: (fromRow, toRow, updated) => {
      dispatch(updateParams(fromRow, toRow, updated));
    },
    setRowsSelected: selectedIndexes => {
      dispatch(setRowsSelected(selectedIndexes));
    },
  };
};

const ParamsPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ParamsPanel);

export default ParamsPanelContainer;
