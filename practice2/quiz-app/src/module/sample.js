import { handleActions } from 'redux-actions';
import * as api from '../lib/api';
import createRequestThunk from '../lib/createRequestThunk';
//액션타입 정의
const GET_QUIZZES = 'api/GET_QUIZZES';
const GET_QUIZZES_SUCCESS = 'api/GET_QUIZZES_SUCCESS';

export const getQuizzes = createRequestThunk(GET_QUIZZES, api.getQuizzes);

const initialState = {
  quizzes: null,
};

const sample = handleActions(
  {
    [GET_QUIZZES_SUCCESS]: (state, action) => ({
      ...state,
      quizzes: action.payload,
    }),
  },
  initialState
);

export default sample;
