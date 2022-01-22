import { combineReducers } from 'redux';

// import apiReducer from './ApiReducer';
// import quizReducer from './QuizReducer';
import sample from './sample';
import loading from './loading';
const rootReducer = combineReducers({
  sample,
  loading,
});

export default rootReducer;
