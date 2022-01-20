//액션타입 정의
const ADD_DATA = 'api/ADDDATA';
const DATA_STATUS = 'api/DATA_STATUS';

const ADD_NUM = 'api/ADD_NUM';
//액션객체 만드는 함수 정의
export const addData = (data) => ({ type: ADD_DATA, data });

export const setDataStatus = (status) => ({ type: DATA_STATUS, status });

export const addNum = () => ({ type: ADD_NUM });

//state 기본값
const initialState = {
  status: '',
  data: [],
  num: 0,
};

export default function API(state = initialState, action) {
  switch (action.type) {
    case ADD_DATA:
      return { ...state, data: action.data };
    case DATA_STATUS:
      return { ...state, status: action.status };
    case ADD_NUM:
      return { ...state, num: state.num + 1 };
    default:
      return state;
  }
}
