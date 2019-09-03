import Actions from './actions';

const initState = {
  isSubmitRegister: false
}

export default function authReducer(
  state = initState, action
) {
  switch (action.type) {
    case Actions.CREATE_USER_REQUEST:
      return {
        ...initState,
        isSubmitRegister: true
      }
    case Actions.CREATE_USER_SUCCESS:
      return {
        ...initState,
        isSubmitLogin: false,
      }
    case Actions.CREATE_USER_ERROR:
      return {
        ...initState,
        isSubmitLogin: false
      };

    default:
      return state;
  }
}
