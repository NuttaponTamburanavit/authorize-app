import { Map } from 'immutable';
import { getToken } from '../../helpers/auth';
import Actions from './actions';

const initState = {
  token: null,
  isSubmitLogin: false
}

export default function authReducer(
  state = { 
    ...initState, token: getToken()
  },
  action
) {
  switch (action.type) {
    case Actions.LOGIN_REQUEST:
      return {
        ...initState,
        isSubmitLogin: true
      }
    case Actions.LOGIN_SUCCESS:
      return {
        ...initState,
        isSubmitLogin: false,
        token: action.token
      }
    case Actions.LOGIN_ERROR:
      return {
        ...initState,
        isSubmitLogin: false
      };
    case Actions.LOGOUT:
      return initState;

    default:
      return state;
  }
}
