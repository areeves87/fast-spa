import { connect } from 'react-redux';
import Response from './Response';
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

const ResponseContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Response);

export default ResponseContainer;
