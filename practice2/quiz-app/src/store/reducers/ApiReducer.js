import { GET_QUIZZES, GET_LOADING } from '../actions/ApiAction'; //액션 가져오기

//state 기본값
const initialState = {
  isLoading: null,
  data: {},
};

export function API(state = initialState, action) {
  switch (action.type) {
    case GET_QUIZZES:
      return { ...state, data: action.payload };
    case GET_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
}
