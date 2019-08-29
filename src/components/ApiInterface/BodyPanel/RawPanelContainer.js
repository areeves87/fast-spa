import { connect } from 'react-redux';
import RawPanel from './RawPanel';
// redux action
import {
  updateRawBody,
} from 'actions/ApiInterfaceAction';

// map state to props
const mapStateToProps = ({ apiInterface }) => {
  return { apiInterface };
};
const mapDispatchToProps = dispatch => {
  return {
    updateRawBody: data => {
      dispatch(updateRawBody(data));
    }
  };
};

const RawPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RawPanel);

export default RawPanelContainer;
