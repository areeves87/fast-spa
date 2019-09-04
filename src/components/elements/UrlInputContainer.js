import { connect } from 'react-redux';
import UrlInput from './UrlInput';
// redux action
import {
  updateMethod,
  setUrlAddress,
  sendRequest,
  selectAPI,
} from 'actions/ApiInterfaceAction';

// map state to props
const mapStateToProps = ({ apiInterface }) => {
  return { apiInterface };
};
const mapDispatchToProps = dispatch => {
  return {
    updateMethod: method => {
      dispatch(updateMethod(method));
    },
    setUrlAddress: urlAddress => {
      dispatch(setUrlAddress(urlAddress));
    },
    sendRequest: () => {
      dispatch(sendRequest());
    },
    selectAPI: (item, subItem, data) => {
      dispatch(selectAPI(item, subItem, data));
    },
  };
};

const UrlInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UrlInput);

export default UrlInputContainer;
