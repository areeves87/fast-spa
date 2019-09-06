import { connect } from 'react-redux';
import BodyPanel from './BodyPanel';
// redux action
import { 
  setBodyType,
  updateFormData,
  setFormDataRowsSelected,
  updateRawBody,
  updateUrlEncoded,
  setUrlEncodedRowsSelected,
 } from 'actions/ApiInterfaceAction';

// map state to props
const mapStateToProps = ({ apiInterface }) => {
  return { apiInterface };
};
const mapDispatchToProps = dispatch => {
  return {
    setBodyType: type => {
      dispatch(setBodyType(type));
    },
    updateFormData: (fromRow, toRow, updated) => {
      dispatch(updateFormData(fromRow, toRow, updated));
    },
    setFormDataRowsSelected: selectedIndexes => {
      dispatch(setFormDataRowsSelected(selectedIndexes));
    },
    updateRawBody: data => {
      dispatch(updateRawBody(data));
    },
    updateUrlEncoded: (fromRow, toRow, updated) => {
      dispatch(updateUrlEncoded(fromRow, toRow, updated));
    },
    setUrlEncodedRowsSelected: selectedIndexes => {
      dispatch(setUrlEncodedRowsSelected(selectedIndexes));
    },
  };
};

const BodyPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BodyPanel);

export default BodyPanelContainer;
