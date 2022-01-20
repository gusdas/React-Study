const initialState = {
  correct_Cnt: 0,
};

const CORRECT_COUNT = 'CORRECT_COUNT';

export const correct_Count = () => {
  return {
    type: CORRECT_COUNT,
  };
};

export default function quizReducer(state = initialState, action) {
  switch (action.type) {
    case CORRECT_COUNT:
      return {
        ...state,
        CORRECT_COUNT: state.correct_Cnt + 1,
      };
    default:
      return state;
  }
}
