import { handleActions } from 'redux-actions';

const defaultState = {
  user: null,
  loading: false,
};

export default handleActions(
  {
    LOGIN_USER: (state, { payload: user }) => {
      return {
        ...state,
        loading: true,
        user
      };
    },
  },
  defaultState
);
