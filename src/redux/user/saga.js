import { all, takeEvery, call, put, fork } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { message } from 'antd';

import actions from './actions';
import { userAPI } from './api';

export function* create_user_request() {
  yield takeEvery(actions.CREATE_USER_REQUEST, function* (data) {
    
    const api = yield call(userAPI.create_user, data.form);
    
    if (api.status === 200) {
      message.success(`Register account complete. your email is ${api.email}`);

      yield put({
        type: actions.CREATE_USER_SUCCESS,
        email: api.email
      });

      yield put(push('/'));
    } else {
      message.error('Email exists');

      yield put({
        type: actions.CREATE_USER_ERROR,
        status: api.status
      });
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(create_user_request)
  ]);
}
