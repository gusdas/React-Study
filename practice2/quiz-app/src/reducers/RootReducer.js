import { combineReducers } from 'redux';
import apiReducer from './ApiReducer';
import quizReducer from './QuizReducer';

const rootReducer = combineReducers({
  apiReducer,
  quizReducer,
});

export default rootReducer;
