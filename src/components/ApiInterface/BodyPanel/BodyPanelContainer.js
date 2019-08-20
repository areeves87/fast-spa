import { connect } from 'react-redux';
import BodyPanel from './BodyPanel';
// redux action
import { setBodyType } from 'actions/ApiInterfaceAction';

// map state to props
const mapStateToProps = ({ apiInterface }) => {
  return { apiInterface };
};
const mapDispatchToProps = dispatch => {
  return {
    setBodyType: type => {
      dispatch(setBodyType(type));
    },
  };
};

const BodyPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BodyPanel);

export default BodyPanelContainer;
