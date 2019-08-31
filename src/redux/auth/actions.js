const authActions = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGOUT: 'LOGOUT',

  login: (form) => ({
    type: authActions.LOGIN_REQUEST,
    form
  }),
  logout: () => ({
    type: authActions.LOGOUT,
  }),
};

export default authActions;
