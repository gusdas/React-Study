import { createStore } from 'redux';

const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

//액션이름정의
const TOGGLE_SWITCH = 'TOGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

//액션
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = (difference) => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

//초기 값 설정
const initialState = {
  toggle: false,
  counter: 0,
};

//리듀서(변화일으키는 함수) 설정 state가 undefined일 때는 initalSate를 기본으로 사용
function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state,
        toggle: !state.toggle,
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}

//스토어(프로젝트에 리덕스 적용)
const store = createStore(reducer);

//상태가 업데이트 될 때마다 호출 리액트와 다르게 이미 html을 사용하여 만들어진 UI의 속성을 상태에 따라 변경
const render = () => {
  const state = store.getState();

  if (state.toggle) {
    divToggle.classList.add('active');
  } else {
    divToggle.classList.remove('active');
  }
  counter.innerText = state.counter;
};

render();
//구독(스토어의 상태가 바뀔 때마다 render함수 호출)
store.subscribe(render);

divToggle.onclick = () => {
  store.dispatch(toggleSwitch());
};
btnIncrease.onclick = () => {
  store.dispatch(increase(1));
};
btnDecrease.onclick = () => {
  store.dispatch(decrease());
};
