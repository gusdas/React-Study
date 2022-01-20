import { handleActions } from 'redux-actions';
import * as api from '../api';
//액션타입 정의
const GET_QUIZZES = 'api/GET_QUIZZES';
const GET_QUIZZES_SUCCESS = 'api/GET_QUIZZES_SUCCESS';
const GET_QUIZZES_FAIL = 'api/GET_QUIZZES_FAIL';

//액션객체 만드는 함수 정의
export const getQuizzes = () => async (dispatch) => {
  dispatch({ type: GET_QUIZZES }); //시작을 알려주고
  try {
    const res = await api.getQuizData();
    dispatch({ type: GET_QUIZZES_SUCCESS, payload: res.data });
  } catch (e) {
    dispatch({ type: GET_QUIZZES_FAIL, payload: e, error: true });
    console.error('error' + e);
    throw e; //컴포넌트단에서 error확인할수있게 해줌
  }
};

const initialState = {
  loading: false,
  quizzes: null,
};

const sample = handleActions(
  {
    [GET_QUIZZES]: (state) => ({
      ...state,
      loading: true, //요청시작
    }),
    [GET_QUIZZES_SUCCESS]: (state, action) => ({
      ...state,
      loading: false,
      quizzes: action.payload,
    }),
    [GET_QUIZZES_FAIL]: (state, action) => ({
      ...state,
      loading: true,
    }),
  },
  initialState
);

export default sample;
