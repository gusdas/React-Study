// import { createAction, handleActions } from 'redux-actions';
// import { call, put, takeLatest } from 'redux-saga/effects';
// import * as api from '../api';
// import { startLoading, finishLoading } from './loading';
// //액션타입 정의
// const GET_QUIZZES = 'api/GET_QUIZZES';
// const GET_QUIZZES_SUCCESS = 'api/GET_QUIZZES_SUCCESS';
// const GET_QUIZZES_FAIL = 'api/GET_QUIZZES_FAIL';

// //액션객체 만드는 함수 정의
// export const getQuizzes = createAction(GET_QUIZZES);

// function* getQuizzesSaga(action) {
//   yield put(startLoading(GET_QUIZZES));
//   try {
//     const quiz = yield call(api.getQuizzes, action.payload);
//     yield put({ type: GET_QUIZZES_SUCCESS, payload: quiz.data });
//   } catch (e) {
//     yield put({ type: GET_QUIZZES_FAIL, payload: e, error: true });
//   }
//   yield put(finishLoading(GET_QUIZZES));
// }
// export function* sampleSaga() {
//   yield takeLatest(GET_QUIZZES, getQuizzesSaga);
// }

// //state 기본값
// const initialState = {
//   quizzes: null,
// };

// const quizzes = (state = initialState, action) => {
//   switch (action.type) {
//     case GET_QUIZZES_SUCCESS:
//       return { ...state, quizzes: action.quizzes };
//     case GET_QUIZZES_FAIL:
//       return { ...state, error: action.error };

//     default:
//       return state;
//   }
// };

// const apiReducer = handleActions({
//   [GET_QUIZZES_SUCCESS]: (state, action) => ({
//     ...state,
//     quizzes: action.payload,
//   }),
//   initialState,
// });
// export default apiReducer;
