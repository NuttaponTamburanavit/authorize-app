import { all, takeEvery, call, put, fork } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { message } from 'antd';

import { clearToken, getToken } from '../../helpers/auth';

import actions from './actions';
import { authAPI } from './api';

// import messageActions from '../message/actions';

// const { set_message } = messageActions;

export function* loginRequest() {
  yield takeEvery(actions.LOGIN_REQUEST, function* (data) {
    
    const api = yield call(authAPI.login, data.form);
    
    if (api.status === 200) {
      yield localStorage.setItem('token', JSON.stringify(api.token));
      
      message.success('Login complete');

      yield put({
        type: actions.LOGIN_SUCCESS,
        status: api.status,
        token: api.token,
      });
    } else {
      message.error('Email or Password incorrect');

      yield put({
        type: actions.ERROR,
        status: api.status
      });
    }
  });
}

export function* logout() {
  yield takeEvery(actions.LOGOUT, function* () {
    message.success('Logout');
    clearToken();
    yield put(push('/'));
  });
}

export default function* rootSaga() {
  yield all([
    fork(loginRequest),
    fork(logout),
  ]);
}
