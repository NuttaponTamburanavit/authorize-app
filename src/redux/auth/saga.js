import { all, takeEvery, call, put, fork } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { clearToken, getToken } from '../../helpers/auth';

import actions from './actions';
// import { authAPI } from './api';

// import messageActions from '../message/actions';

// const { set_message } = messageActions;

export function* loginRequest() {
  yield takeEvery(actions.LOGIN_REQUEST, function* (data) {
    
    console.log('call login')
    // const api = yield call(authAPI.login, data.form);
    // if (api.status === "000") {
    //   // yield localStorage.setItem('token', JSON.stringify(api.data.token));
    //   // yield localStorage.setItem('role', JSON.stringify(api.data.role));

    //   // yield put(set_message('success', 'เข้าสู่ระบบสำเร็จ'));
    //   yield put({
    //     type: actions.LOGIN_SUCCESS,
    //     status: api.status,
    //     token: api.data.token,
    //   });
    // } else {
    //   yield put({
    //     type: actions.ERROR,
    //     status: api.status,
    //     token: api.data.token,
    //     role: api.data.role
    //   });
    // }
  });
}

export function* logout() {
  yield takeEvery(actions.LOGOUT, function* () {
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
