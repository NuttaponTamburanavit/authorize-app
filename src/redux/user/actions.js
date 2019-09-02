const authActions = {
  CREAT_USER_REQUEST: 'CREAT_USER_REQUEST',
  CREAT_USER_SUCCESS: 'CREAT_USER_SUCCESS',
  CREAT_USER_ERROR: 'CREAT_USER_ERROR',

  create_user: (form) => ({
    type: authActions.CREAT_USER_REQUEST,
    form
  })
};

export default authActions;
