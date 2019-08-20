import { connect } from 'react-redux';
import FormDataPanel from './FormDataPanel';
// redux action
import {
  updateFormData,
  setFormDataRowsSelected,
} from 'actions/ApiInterfaceAction';

// map state to props
const mapStateToProps = ({ apiInterface }) => {
  return { apiInterface };
};
const mapDispatchToProps = dispatch => {
  return {
    updateFormData: (fromRow, toRow, updated) => {
      dispatch(updateFormData(fromRow, toRow, updated));
    },
    setFormDataRowsSelected: selectedIndexes => {
      dispatch(setFormDataRowsSelected(selectedIndexes));
    },
  };
};

const FormDataPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormDataPanel);

export default FormDataPanelContainer;
