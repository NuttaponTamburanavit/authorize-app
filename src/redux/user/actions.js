const authActions = {
  CREATE_USER_REQUEST: 'CREATE_USER_REQUEST',
  CREATE_USER_SUCCESS: 'CREATE_USER_SUCCESS',
  CREATE_USER_ERROR: 'CREATE_USER_ERROR',

  create_user: (form) => ({
    type: authActions.CREATE_USER_REQUEST,
    form
  })
};

export default authActions;
