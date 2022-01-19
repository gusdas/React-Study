//액션타입 정의
export const GET_QUIZZES = 'api/GET_QUIZZES'; //api로 퀴즈 가져오기
export const GET_LOADING = 'api/GET_QUIZZES'; //api로 퀴즈 가져오
//액션객체 만드는 함수 정의
export const getQuizzes = (payload) => ({ type: GET_QUIZZES, payload }); //api로 퀴즈 가져오기

export const getLoading = (payload) => ({ type: GET_LOADING, payload }); //api로 퀴즈 가져오기
