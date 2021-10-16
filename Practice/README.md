# 1장 리액트 시작

### 이전 DOM과 Virtual DOM을 비교하여 변경 된 부분만 실제 DOM에 업데이트 하는 방식이다.

### 프레임 워크가 아닌 라이브러리로 뷰만 담당하기 때문에 개발자에 맞게 라우팅, Ajax, 상태관리, 데이터 모델링 등등 원하는 라이브러리를 사용해야 된다.

# 2장 JSX

### JSX는 일반 자바스크립트로 사용한 코드 보다 JSX가 가독성이 높고 쉽다.

    JSX 문법 :
    ```
    function App(){  return (
        <div> Hello World! </div>
        );
    }
    ```

    JS문법:
    ```
    function App() {
        return React.createElement("div", null, "Hello World");
    }
    ```

### JSX 문법은 요소 여러개 일때 한 개로 감싸주어야한다.

    ```
    return(
        <div>             <--------------------------------!!
            <h1>Hi</h1>
            <h2>Hello</h2>
        </div>            <---------------------------------!!
    )
    ```

### JSX 문법 내에서 자바스크립트를 사용하고 싶으면 {}로 감싸면 된다.

    ```
    const name = "리액트"
    return(
        <div>
            <h1>Hi{name}</h1>  <--------------------------------!!
            <h2>Hello</h2>
        </div>
    )

    ```

### JSX문법 내에서 IF문 대신 조건부연산자(삼항연산자)를 사용해야한다.

     ```
    const name = "리액트"
    return(
        <div>
        {name === '리액트' ? ('ture') :('false')}<--------------------------------!!
            <h1>Hi{name}</h1>
            <h2>Hello</h2>
        </div>
    )
    ```
        &&연산자로도 사용가능하다
        {naem === '리액트' && 'true'}

        or연산자를 사용하면 underfined를 대신 보여줄 문구나 코드를 작성할 수 있다.
        {naem || 'true'}

```
### 인라인 스타일링은 "-"을 빼고 카멜케이스로 작성해야한다

    background-color => backgroundColor

### class 대신 className

    <div className = 'react'> </div>

### 주석

    {*/ 여기가 주석 */}

# 3장 컴포넌트

### 클래스형 컴포넌트와 함수형 컴포넌트가 있다.

클래스형 컴포넌트는 state 기능 과 라이프사이클 기능 사용할 수 있고 임의 메서드를 정의할 수 있다.
render함수가 꼭 있어야하고 JSX를 반환 해야한다.

함수형컴포넌트는 클래스형 컴포넌트에 비해 선언하기가 훨씬 편하고 메모리 자원도 덜 사용한다.
하지만 state와 라이프 사이클 API를 사용하지 못하지만 Hooks의 도입으로 해결 되었다.

### props

    props는 properties를 줄인 말로 번역하자면 속성이다.
      부모컴포넌트에서 자식의 props를 지정하여 줄수 있다.
      return <Component name='React'/>; <----name이라는 속성을 지정하여 값을 넘겨 준 것

      자식에서 받을때는 아래와 같이 사용한다.
    const Component = (props) => {
        return <div>내이름은 {props.name} </div>
    }

      Component.defaultProps = {
        name: '기본이름'              <-----------props default(name의 값을 지정안해줘도 나옴 ) 지정하는 방법
    }

### 컴포넌트 사이의 값을 보여주는 props는 children으로 정해져있다.

무슨말이냐면 부모컴포넌트에서 자식컴포넌트를 선언할때 <Component> 안녕 </Component>
위와 같이 선언하면 자식컴포넌트에서 {props.children} 하면 안녕이란 값이 나옵니다.

### 비구조화 할당 문법 사용하기

비구조화 할당 문법은 배열이나 객체의 속성을 해체하여 그 값을 개별변수에 담을 수 있게하는 표현식이다.

const {name, children} = props <----------ES6의 비구조화 할당 문법

{name},{children}하면 값이 {props.name},{props,children} 과 같음

### state

컴포넌트 내부에서 바꿀수 있는 값이다. 클래스형 컴포넌트에서는 state를 함수형 컴포넌트에서느 useState라는 함수를 통해서 사용합니다.
state 값을 변경할 때에는 setState 혹은 useState를 통해 세터함수를 사용해야한다
배열이나 객체를 업데이트를 할때는 또 객체를 복사(C)하여 복사된 객체(C)에 값을 업데이트 후 복사된 객체(C)를 setState 혹은 useState를 합니다.

### state와 props의 차이

props는 부모에서 설정한 값이고 state는 자기 자신 내부에서 설정한 값이다.

## 4장 이벤트 핸들링

### 리액트의 이벤트 시스템

이벤트 이름은 카멜 표기법으로 작성
이벤트에 실행할 코드를 전달하는 것이 아니라, 함수형태의 값으 전달
DOM요소에만 이벤트를 설정할 수 있다. 직접만든 컴포넌트에는 사용 불가
state = {name: ''}
<input value={this.state.name} onChange={ (e) => { this.setState({name: e.target.value)}}

이벤트는 직접 실습을 통해 배우자

## 5장 ref:DOM에 이름 달기

### ref사용이유

HTML에서 id를 사용한것처럼 ref를 다는 이유는 컴포넌트는 여러개를 사용 할 수 있기 때문에 id사용시 중복될 수 있다. ref는 전역적으로 작동하지않고 컴포넌트 내부에서만 작동하기 때문에
중복되지 않는다.

### ref 사용법

DOM에 직접적으로 접근해야 할때 사용해야한다 - 특정 input에 포커스 주기(작업이 끝난 후 input에 포커싱) - 스크롤 박스 조작하기 - Canvas 요소에 그림 그리기 등

컴포넌트에 ref 달때는 부모 컴포넌트에서 자식컴포넌트의 요소를 사용할때 사용한다
이러한 흐름은 많이 사용 사용하지 않아야합니다. 리액트 설계와 다르다.

## 6장 컴포넌트 반복

map()함수를 사용하여 컴포넌트를 반복할 수 있고 key값을 설정하여 반복된 요소를 찾을 수 있도록 해야한다.

    const [names, setName] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
      ]);
      const [inputText, setInputText] = useState('');
      const [nextId, setNextId] = useState(5);
      const onChange = (e) => setInputText(e.target.value);
      const onClick = () => {
        const nextName = names.concat({ id: nextId, text: inputText });
        setName(nextName);
        setNextId(nextId + 1);
        setInputText('');
      };
      const onDelete = (id) => {
        const nextName = names.filter((name) => name.id !== id);
        setName(nextName);
      };
      const namesList = names.map((name) => (
        <li onDoubleClick={() => onDelete(name.id)} key={name.id}>
          {name.text}
        </li>
      ));
      return (
        <>
          <ul>{namesList}</ul>
          <input value={inputText} onChange={onChange} />
          <button onClick={onClick}>추가</button>
        </>
      );

## 7장 라이프 사이클 메서드

라이프 사이클메서드는 클래스형 컴포넌트에서만 사용 할 수 있고 함수형 컴포넌트는 HOOKS를 이용하여 비슷한 작업을 처리 할 수 있습니다.
라이프 사이클은 3가지 카테고리로 나뉩니다.

### 1.마운트

DOM이 생성되고 웹 브라우저에 나타나는 것이 마운트입니다.

- constructor : 컴포넌트를 새로 만들 때마다 호출되는 클래스 생성자 메서드입니다.
- getDerivedStateFromProps: props에 있는 값을 state에 널을 때 사용하는 메서드입니다.
- render : 우리가 준비한 UI를 렌더링하는 메서드입니다.
- ComponentDidMount: 컴포넌트가 웹 브라우저상에 나타난 후 호출하는 메서드입니다.

### 2. 업데이트

업데이트가 되는 경우 1. props가 바뀔 때 2. state가 바뀔 때 3. 부모 컴포넌트가 리렌더링될 때 4. this.forceUpdate로 강제로 렌더링을 트리거할 때

- getDerivedStateFromProps : 마운트될때랑 업데이트 둘다 호출, props로 받아 온 값을 state에 동기화 시키는 용도
- shouldComponentUpdate : 업데이트 전 호출, props나 state가 변경됐을 때 리렌더링 여부 처리 false시 업데이트 중지
- render : 컴포넌트 리렌더링
- getSnapshotBeforeUpdate : render에서 만들어진 결과물이 보여지기 전 호출, 업데이트하기 직전 값 참고할때 사용(ex:스크롤 위치)
- componentDidUpdate : 리렌더링 완료후 실행, getSnapshotBeforeUpdate에서 리턴한 값이 snpashot으로 들어옴 이전 state, props에 접근 가능

### 3. 언마운트

- componentWillUnmount : 컴포넌트 제거 될때 호출 , componentDidMount에서 등록한 이벤트, 타이머, 직접만든 DOM 제거해야함

## 8장 HOOKS

### useState

함수 컴포넌트에서 상태를 관리해야할 때 사용

### useEffect

컴포넌트가 렌더링 될때마다 특정 작업을 수행해야 할 때 사용 componentDidMount, componentDidUpdate를 합친 형태로 보아도 됌

### useReducer

useState보다 더 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트해 주고 싶을때 사용하는 HOOK이다.

### useMemo

함수 컴포넌트에서 발생하는 연산을 최적화 할 수 있다. 특정 값이 변했을때만 연산을 실행하고 아니었으면 이전 연산결과 값을 다시 사용하는 방법이다.

### useCallback

useMemo와 비슷하지만 만들어놨던 함수를 재사용하여 렌더링 성능을 최적화하는데 사용한다.

### useRef

ref를 쉽게 사용할 수 있도록 해줍니다.

### 커스텀HOOKS

커스텀 HOOKS를 만들면 각 요소마다 다른 함수, state를 안 만들어 줘 편리하다.

## 9장 컴포넌트 스타일링

### CSS

기본적인 방식

### Sass

확장된 CSS문법으로 CSS코드를 더욱 쉽게 작성할 수 있다.
기존 CSS보다 코드의 재활용성이 더 높고 가독성이 높아 유지보수에 도움이 된다.

### CSS Module

CSS클래스가 다른 CSS클래스의 이름과 충돌하지 않도록 고유한 이름을 자동으로 생성해주는 옵션

### styled-components

스타일을 자바스크립트 파일에 내장 시키는 방식으로 스타일이 바로 적용 된 컴포넌트를 만들 수 있게해준다.
props값을 스타일에 쉽게 적용할 수 있다.

## 10장 일정 관리 웹 애플리케이션 만들기

### 사용 컴포넌트 설명

TodoTemplate: 화면을 가운데 정렬시키고, 앱 타이틀을 보여준다 children으로 내부 JSX를 props로 받아와서 렌더링 해줍니다.
TodoInsert: 새로운 항목을 입력하고 추가할 수 있는 컴포넌트 입니다. state를 통해 인풋의 상태를 관리합니다.
TodoListLtem: 각 할 일 항목에 대한 정보를 보여 주는 컴포넌트입니다. todo객체를 props로 받아 와서 상태에 따라 다른 스타일의 UI를 보여 줍니다.
TodoList: todos 배열을 props로 받아 온 후, 이를 배열 내장 함수 map을 사용해서 여러 개의 TodoListItem 컴포넌트로 변환하여 보여 줍니다.

## 11장 컴포넌트 성능최적화방법

### 크롬 개발자 도구를 통한 성능 모니터링

React DevTools를 사용해야 성능분석을 자세히 할 수 있습니다.
크롬 웹스토어에서 확장프로그램으로 설치 후 개발자도구를 보면 componets, profiler가 추가 됩니다.

### React.memo로 리렌더링 성능 최적화하기

리렌더링을 방지 할 때는 should ComponentUpdate라는 라이프 사이클을 사용하면 되지만
함수형 컴포넌트에서는 React.memo함수로 컴포넌트의 props가 바뀌지 않았다면, 리렌더링하지 않도록 설정하여 성능을 최적 할 수 있습니다.

### onToggle과 onRemove가 새로워지는 현상 방지하기

onToggle과 onRemove 함수는 배열 상태를 업데이트하는 과정에서 최신상태의 todos를 참조하기때문에 todos 배열이 바뀔 때마다 함수가 새로 만들어집니다.
이때 두 가지 방법이 있는데
useState의 함수형 업데이트기능을 사용하거나 useReducer를 사용하는 것이ㅏㄷ.

1.useState의 함수형 업데이트
기존의 setTodos를 사용할 때 새로운 상태의 파라미터로 넣는대신, 상태 업데이트를 어떻게 할지 정의해 주는 업데이트 함수를 넣어주는 방법입니다.
아래 코드와 같이 setTodos( todos => ... 이렇게 추가만 해주면 됩니다
기존코드

```

const onRemove = useCallback(
(id) => {
setTodos(todos.filter((todo) => todo.id !== id));
},
[todos],
);

```

변경된 코드

```

const onRemove = useCallback(
(id) => {
setTodos((todos)=> todos.filter((todo) => todo.id !== id)); <------ setTodos( todos => ... 여기가 변경
}, []);

```

2. useReducer 사용하기
   아래와 같이 변경

```

function todoReducer(todos, action) {
switch (action.type) {
case 'INSERT':
return todos.concat(action.todo);
case 'DELETE':
return todos.filter((todo) => todo.id !== action.id);
case 'TOGGLE':
return todos.map((todo) =>
todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
);
default:
return todos;
}
}
const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);
const onInsert = useCallback((text) => {
const todo = {
id: nextId.current,
text,
checked: false,
};
dispatch({ type: 'INSERT', todo });
nextId.current += 1;
}, []);

const onRemove = useCallback((id) => {
dispatch({ type: 'DELETE', id });
}, []);
const onToggle = useCallback((id) => {
dispatch({ type: 'TOGGLE', id });
}, []);

```

### 리스트 관련 컴포넌트 최적화할땐 리스트 내부에서 사용하는 컴포넌트도 최적화하고 리스트로 사용되는 컴포넌트자체도 최적화해야한다.

TodoList, TodoListItem 두개 다 React.memo를 사용

### react-virtuarlized를 사용한 렌더링 최적화

실제 보이는 항목은 9개 뿐이지만 현재는 전체를 렌더링하기 때문에 비효율적이지만 react-virtuarlized를 사용하면 스크롤 되기 전에 보이지 않는 컴포넌트는 렌더링 하지 않고 크기만 차지하게끔 할 수 있습니다.

### 불변성의 중요성
기존의 값을 직접 수정하지 않으면서 새로운 값을 만들어 내는 것을 불변성을 지킨다고 한다.
불변성이 지켜지지 않으면 객체 내부의 값이 새로워져도 바뀐 것을 감지하지 못합니다.

## 12장 immer를 사용하여 불변성 유지
immer 라이브러리를 사용하는 경우는 전개연산자와 배열내장함수로 불변성을 유지하는게 가독성이 떨어질때 사용가능하다.

```

import produce from 'immer';
const nextState = produce(originalState, draft => {
draft.somewhere.deep.inside = 5;
}

```

produce라는 함수에 첫번째 파라미터는 수정하고 싶은 상태이고 두 번째 파라미터는 상태를 어떻게 업데이트할지 정의하는 함수 이다.

## 13장 리액트 라우터로 SPA 개발하기

### SPA란

SPA는 Single Page Aplication의 약자이다.
한개의 페이지로 이루어진 애플리케이션이란 뜻으로 기존에는 사용자가 다른 페이지로 이동할 때마다 새로운 html을 받아오고, 페이지를 로딩할 때마다 서버에서 리소스를 전달받아 해석한 뒤 화면에 보여주었습니다.
하지만 리액트를 사용 한다면 전체가 아닌 필요한 부분만 업데이트를 해주면 해결됩니다.

싱글페이지라고 화면이 한종류가 아닙니다.
다른 주소에 다른 화면을 보여주는 것이 라우팅이라고 하고 오늘은 리액트 라우터를 다뤄 보겠습니다.

SPA의 단점은 앱의 규모가 커지면 페이지 로딩 시 사용자가 실제로 방문하지 않을 수도 있는 페이지의 스크립트도 불러오기 때문에 비효율적이죠
하지만 나중에 배울 코드스플리팅을 사용하면 라우트별로 파일들을 나누어서 트래픽과 로딩속도를 개선할 수 있습니다.
또 리액트 라우터처럼 브라우저에서 자바 스크립트를 사용하여 라우팅을 관리하는 것은 자바 스크립트를 사용하지 않는 일반 크롤러에서 페이지의 정보를 제대로 수집 못하는 단점이 있고 자바스크립트가 실행될 때까지 페이지가 비어 보일 수 있지만 나중에 배우게 될 서버 사이드 렌더링을 통해 해결할 수 있습니다. ###리액트 라우터 사용법
일단 사용하는 프로젝트에 yarn add react-router-dom을 설치 해주세요
컴포넌트에 import하고 <Route path='/' component='컴포넌트명'/> 사용

```

<Route path="/" component={Home}/>
<Route path="/profiles" component={Profiles} />
/profiles 로 들어가면 두 컴포넌트가 보인다
/가 두 컴포넌트다 들어가서 그렇다
해결방법
<Route path="/" component={Home} exact={true} />
exact={true}로 설정
```

### Link 컴포넌트로 다른 주소로 이동하기

a태그를 직접 사용하면 안됩니다. a태그는 페이지를 전환할때 페이지를 새로 불러오기 때문에 애플리케이션이 들고있던 상태들을 모두 날려버리게 됩니다.

import {Route, Link} from 'react-route-dom';

<Link to='주소'>내용</Link>

### Route 하나에 여러개 path 설정하기

<Route path={['/','/home']} component ={Home} />

###URL에 파라미터와 쿼리
파라미터 예시: /profile/velopert
쿼리 예시: /about?details=true

####파라미터 사용
Profile.js

```
const data = {
  velopert: {
    name: '김민준',
    description: '리액트를 좋아하는 개발자',
  },
  gildong: {
    name: '홍길동',
    description: '고전 소설 홍길동전의 주인공',
  },
};

const Profile = ({match}) => {
    const {username}= match.params;
    const profile = data[username];

    return(
    <div>
     {profile.name}
    {profile.discription}
    </div>
    )
    }

```

App.js

```
 <Route path="/profile/:username" component={Profile} />
```

#### URL 쿼리

쿼리 사용시 주의 사항 결과값은 언제나 문자열로 숫자를 받아야한다면 parseInt로 숫자로 변환해주고 논리 자료형일때도 'true'로 문자열이랑 일치하는지 비교해주세요

yarn add qs

```
onst query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const showDetail = query.detail === 'true';
  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트입니다.</p>
      {showDetail && <p>detail 값을 true로 설정 하셨군요!</p>}
    </div>
  );
```

/home?detail=true 으로 확인

### 서브 라우트

서브 라우트는 라우트 내부에 또 라우트를 정의하는 것입니다.
profiles.js

```
import Profiles from './Profile';

<Route path="/profiles" exact render={() => <div>사용자를 선택해 주세요. </div>} />
component 대신 render라는 porps를 넣어 주었고 JSX를 넣어주고 exact만 써주면 exact={true}와 동일한 뜻이다.

<Route path="/profiles/:username" component={Profile} />
```

App.js

```
<Route path="/profiles" component={Profiles} />
```

### 리액트 라우터 부가기능

#### history

history 객체는 라우트로 사용된 컴포넌트에 match, location과 함께 전달되는 props중 하나로 이 객체를 통해 컴포넌트 내에 구현하는 메서드에서 라우터 API를 호출할 수 있습니다.

HistorySample.js

```
import React, { Component } from 'react';

class HistorySample extends Component {
  //뒤로가기
  handleGoBack = () => {
    this.props.history.goBack();
  };

  //홈으로 이동
  handleGoHome = () => {
    this.props.history.push('/');
  };

  componentDidMount() {
    //이것을 설정하고나면 페이지에 변화가 생기려고 할 때마다 나갈지 물어봄
    this.unblock = this.props.history.block('정말 떠나실 건가요?');
  }

  componentWillUnmount() {
    //컴포넌트가 언마운트되면 질문이 멈춤
    if (this.unblock) {
      this.unblock();
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.handleGoBack}>뒤로</button>
        <button onClick={this.handleGoHome}>홈으로</button>
      </div>
    );
  }
}

```

#### withRouter

withRouter 함수는 Hoc(Higher-order-Component)입니다. 라우트로 사용된 컴포넌트가 아니어도 match, location, history객체를 접근할 수 있게 해줍니다.

withRouter.js

```
import {withRouter} from 'react-router-dom';

const WithRouterSample = ({location, match, history}) => {
    console.log(location);
    console.log(match);
    return (
        <div>
            <h4>location</h4>
            <textarea
            value={JSON.stringify(location, null , 2)}
            rows={7}
            readonly={true}
            />
            <h4>match</h4>
            <textarea
            value={JSON.stringify(match, null,2)}
            rows={7}
            readonly={true}
            />
            <button onClick={()=> history.push('/')}>홈으로</button>
        </div>
    )
}

export default withRouter(WithRouterSample)
```

location 객체
{pathname: '/profiles/gildong', search: '', hash: '', state: null, key: '6wtuqj'}
hash: ""
key: "6wtuqj"
pathname: "/profiles/gildong"
search: ""
state: null

match 객체
{path: '/profiles/:username', url: '/profiles/gildong', isExact: true, params: {…}}
isExact: true
params: {username: 'gildong'}
path: "/profiles/:username"
url: "/profiles/gildong"

#### Switch

Switch컴포넌트는 여러 Route를 감싸서 그중 일치하는 단 하나의 라우트만을 렌더링 시켜줍니다.
규칙과 일치하지 않을 때 Not Found 페이지를 구현 할 수 있습니다.

```
<Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path={['/about', '/info']} component={About} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={History} />
        <Route render={({ location }) =>
        <div>
          <h2>이 페이지는 존재하지 않습니다.</h2>
          <p>{location.pathname}</p>
        </div>} />
      </Switch>
```

#### NavLink

NavLink는 현재 경로와 Link에서 사용하는 경로가 일치하는 경우 특정 스타일 혹인 CSS클래스를 적용할 수 있는 컴포넌트 입니다.

```
const Profiles = () => {
 const activeStyle = {
     background: 'black',
     color: 'white'
 }
 (...)
    <NavLink activeStyle={activeStyle} to="/profiles/velopert">velopert</NavLink>
```

## 14장 뉴스api 사용하기

### 비동기 작업

서버쪽 데이터가 필요 할때 Ajax 기법을 이용하여 서버의 API를 호출하여 데이터를 수신하는데 네트워크 송수신 과정에서 시간이 걸리므로 비 동기로 처리 한다.
동기적으로 처리하면 작업 하나가 끝날 때까지 기다려야하므로 비효율적이다.

#### 콜백 함수

Promise를 활용해 콜백지옥을 방지한다.
async/await는 Promise를 더욱 쉽게 사용할 수 있게 해 준다.

#### axios로 api 호출하기

http요청을 Promise 기반으로 처리 한다.
axios.get(
`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=apikey`,
);

### 개발시 주의 사항

useEffect에 등록하는 함수는 async로 작성하면 안 된다. 그 대신 함수 내부에 async 함수를 따로 만들어 주어야 한다.
왜냐하면 useEffect에서 반환해야 하는 값은 뒷정리 함수이기 때문이다. 따라서 useEffect 내부에서 async/await를 사용하고 싶으면 함수 내부에 async 키워드가 붙은 또 다른 함수를 만들어서 사용해야한다.

## 15장 Context API 사용하기

### Context API

프로젝트 내에서 환경 설정, 사용자 정보와 같은 전역적으로 필요한 상태를 관리해야 할 때 Context API를 사용한다.
Context를 만들어 단 한번에 원하는 값을 가져올 수 있다.

### Render Props

컴포넌트의 children이 있어야 할 자리에 일반 JSX 혹은 함수를 전달하는것

```
const RenderPropsSample  = ({children}) => {
  return <div> 결과: {children(5)}</div>
}


...

<RenderPropsSample>{value => 2 * value} </RenderPropsSample>


결과: 10
```

### Context.Consumer

consuber이라는 컴포넌트로 색상을 조회

```
<ColorContext.Consumer>
      {(value) => (
        <div
          style={{
            width: '64px',
            height: '64px',
            background: value.color,
          }}
        />
      )}
    </ColorContext.Consumer>

```

### Context.Provider

Provider를 사용하면 Context의 value를 변경가능
Provider 사용시 반드시 value를 명시해야한다.

```
 <ColorContext.Provider value={{ color: 'red' }}>
      <div>
        <ColorBox />
      </div>
    </ColorContext.Provider>
```

## 16장 리덕스 라이브러리

리덕스는 리액트 상태 관리 라이브러리이다.

리덕스를 사용하면 컴포넌트의 상태 업데이트 관련 로직을 다른 파일로 분리시켜서 더욱 효율적으로 관리할 수 있습니다.
또한, 컴포넌트끼리 똑같은 상태를 공유해야 할 때도 여러 컴포넌트를 거치지 않고 손쉽게 상태 값을 전달하거나 업데이트할 수 있습니다.
리덕스를 사용하면 전역 상태를 관리 할 때도 효과적이다 Context API를 사용해도 되지만 코드의 유지 보수성도 높여 주고 효율도 극대화시킨다.

### 리덕스 개념

1. 액션
   상태에 변화가 필요하면 액션이 발생하고 액션은 하나의 객체이다.

액션 객체는 type필드를 반드시 가져야 한다. type필드는 액션의 이름 같은거다

2. 액션 생성함수
   액션 개체를 만들어 주는 함수로 변화를 일으킬 때마다 액션 객체를 만들어야하는데 계속 직접 작성하면 실수로 정보를 놓칠 수 있어 함수로 만들어 관리

3. 리듀서
   리듀서는 변화를 일으키는 함수입니다. 액션을 만들어서 발생시키면 리듀서가 현재 상태와 전달받은 액션 객체를 파라미터로 받아 옵니다.

4. 스토어
   프로젝트에 리덕스를 적용하기 위해 스토어를 만듭니다. 한개의 프로젝트에는 한개의 스토어만 가질 수 있습니다.
   스토어 안에는 현재 애플리케이션의 상태와 리듀서가 들어가 있습니다.

5. 디스패치
   디스패치는 스토어의 내장 함수 중 하나입니다. 디스패치는 액션을 발생 시키는 것
   이 함수가 호출되면 스토어는 리듀서 함수를 실행 시켜 새로운 상태를 만들어줍니다.

6. 구독
   구독도 스토의 내장 함수 중 하나입니다. subscribe 함수 안에 리스너 함수를 파라미터로 넣어서 호출해 주면, 이 리스너 함수가 액션이 디스패치되어 상태를 업데이트될 때 마다 호출됩니다.

### 리덕스 사용 규칙

1. 단일 스토어
   하나의 애플리케이션 안에는 하나의 스토어가 들어 있습니다. 여러 개를 만들 수 있지만 상태 관리가 복잡하니 권장하지 않습니다.

2. 읽기 전용 상태
   리덕스 상태는 읽기 전용입니다. 기존에 리액트에서 setState를 사용하여 state를 업데이트할 때도 객체나 배열을 업데이트하는 과정에서 불변성을 지켜 주기 위해 spread연산자를 사용하거나 immer와 같은 불변성 관리 라이브러리를 사용 한거 같이 리덕스 또한 상태를 업데이트 할때 기존 객체를 건드지 않고 새로운 객체를 생성해 주어야 한다.
   리덕스에서 불변성을 유지해야하는 이유는 내부적으로 데이터가 변경되는 것을 감지하기 위해 얕은 비교검사를 하기 때문이다. 객체 변화를 감지하기 위해 얄은 비교검사를 해야 좋은 성능을 유지할 수 있다.

3. 리듀서는 순수한 함수
   순수한 함수 조건을 만족해야 합니다.

- 리듀서 함수는 이전 상태와 액션 객체를 파라미터로 받습니다.
- 파라미터 외의 값에는 의존하면 안 됩니다.
- 이전 상태는 절대로 건드리지 않고, 변화를 준 새로운 상태 객체를 만들어서 반환합니다.
- 똑같은 파라미터로 호출된 리듀서 함수는 언제나 똑같은 결과 값을 반환해야 합니다.
  리듀서를 작성할때 함수내부에서 랜덤 값생성, 다른 함수 사용, 네트워크요청을 한다면 파라미터가 같아도 다른 결과를 만들 수 있기 때문에 사용하면 안됩니다. 리듀서 함수 밖인 액션을 만들때나 리덕스 미들웨어 에서 처리해주세요 네트워크 요청 같은 비동기 작업은 미들웨어를 통해 관리합니다.

## 17장 리덕스를 사용하여 리액트 애플리케이션 상태 관리하기

UI와 관련된 컴포넌트는 components에 저장하고, 리덕스와 연동된 컴포넌트는 containers 에 저장

리덕스는 actions, constants, reducers라는 폴더로 종류 별로 나누고 기능별로 각각 파일을 만들 수 있고, ducks패턴으로 기능별 하나씩 파일을 생성하는 패턴도 있다.

## 18장 리덕스 미들웨어를 통한 비동기 작업관리

## 19장 코드 스플리팅

### 코드 스플리팅이란

A,B,C페이지로 구성된 SPA 개발 시 A페이지 방문했을때 B,C페이지를 모두 불러와서 파일이 커지는데 코드 스플리팅으로 해결 가능하다

### 코드 스플리팅 중 코드 비동기 로딩

React.lazy와 Suspense는 서버 사이드 렌더링을 지원 하지않는다

Loadable Components는 서버 사이드 렌더링을 지원한다.

## 20장 서버 사이드 렌더링

### 서버 사이드 렌더링

페이지 이동할 때마다 서버에 페이지 요청(페이지 새로고침 발생)
서버 사이드 렌더링이란 페이지를 서버측에서 먼저 간단하게 띄워주고, 완전하게 렌더링된 페이지를 클라이언트에게 다시 보내주는 기법

#### 장점

1. 검색 엔진 최적화(SEO)가능
   검색 엔진 관련없이 크롤러가 데이터를 수집할 수 있게 함

2. 성능개선
   첫 렌더링된 html을 클라이언트에게 전달해주기 때문에 초기 로딩 속도를 많이 줄여줄 수 있다.
   렌더링 완료되기전에 사용자가 사이트컨테츠를 이용할 수 있다.

#### 단점

1. 프로젝트 복잡도(코드 스플리팅 충돌)
   React에서 서버사이드렌더링을 구현할 경우 Router와 Redux와 함께 사용하다보면 복잡해질 수 있다.
   코드 스플리팅과 같이 사용시 서로 충돌로 페이지에 깜박임이 발생한다.

2. 성능 악화 가능성
   서버 사이드 렌더링 할때 ReactDOMServer.renderToString 함수를 사용한다. 이 함수는 동기적으로 작동하기 때문에 렌더링하는 동안 이벤트루프가 막히게 된다. 하지만 라이브러리를 통하여 비동기식으로 작동하게끔 코드를 작성 할 수 있다.

#### 대안

1. 코드 스플리팅 충돌
   라우트 경로마다 코드 스플리팅된 파일 중에서 필요한 모든 파일을 브라우저에서 렌더링하기 전에 미리 불러와야 합니다.
   Loadable Components 라이브러리를 사용하여 서버 사이드 렌더링 후 필요한 파일의 경로를 추출하여 렌더링 결과에 스크립트/ 스타일 태그를 삽입해주는 방법

2. 메타태그만 넣어주기
   서버쪽에서 라우트에 따라 필요한 메타태그만 넣어주는 것 그러면 크롤러에서 해당 페이지에 대한 기본 정보를 얻어 갈 수 있다.

3. Prernder
   검색엔진 최적화를 위해서 사용

### 클라이언트 사이드 렌더링

첫 요청할때 한페이지만 불러온 후 사용자 행동에 따라 필요한 부분만 다시 읽어 갱신한다.

#### 장점

1. 트래픽 감소
   필요한, 변경된 데이터만 받아와서 그림

2. 사용자 경험
   새로고침이 발생하지 않아 사용자가 네이티브 앱과 비슷한 경험을 할 수 있다.

#### 단점

1. 검색엔진
   크롬에서 react로 만든 웹앱의 소스를 확인하면 비어 있다. 그렇기 때문에 검색엔진 크롤러가 데이터들을 제대로 수집하지 못한다.

2. 초기 로딩이 오래걸림

## 21장 백엔드 프로그래밍

### 서버: node.js

### 미들웨어: koa

미들웨어 함수는 두개의 파라미터를 받습니다.
(ctx,next) => {}
ctx는 cotext의 줄임말로 웹 요청과 응답에 관한 정보를 지니고 있습니다.

next는 현재 처리중인 미들웨어의 다음 미들웨어를 호출하는 함수 입니다.
미들웨어를 등록하고 next 함수를 호출하지 않으면 그 다음 미들웨어를 처리하지 않습니다.
next함수를 호출하면 Promise를 반환합니다. 이는 koa가 Express와 다른점입니다.
next함수가 반환하는 Promise는 다음에 처리해야 할 미들웨어가 끝나야 완료됩니다.

koa는 async/await를 정식으로 지원합니다.

### REST API

데이터베이스에서 데이터를 입력하고 읽어 와야하는데 웹브라우저에서 직접 접속하면 보안상 문제가 발생하여 REST API를 통해서 가져옴

#### HTTP 메서드 종류

GET: 데이터 조회
POST: 데이터 등록, 인증
DELETE: 데이터 삭제
PUT: 데이터를 새 정보로 통째로 교체할 때 사용(사용시 기존내용 변경 가능)
PATCH: 특정 필드 수정

사용할 REST API
POST /posts : 포스트 작성
GET /posts : 포스트 목록 조회
GET /posts/:id : 특정 포스트 조회
DELETE /posts/:id : 특정 포스트 삭제
PATCH /posts/:id : 특정 포스트 업데이트
POST /posts/:id/comments : 특정 포스트에 댓글
GET /posts/:id/comments : 특정 포스트의 덧글 목록 조회
DELETE /posts/:id/comments/:commentId : 특정포스트의 특정덧글 삭제

## 22장 mongoose를 이용한 MongoDB 연동 실습

### MonggoDB

NoSQL로 문서지향적 데이터베이스입니다.
유동적인 스키마를 지닐 수 있고 데이터 구조가 자주 바뀐다면 NoSQL이 유리하다
까다로운 조건으로 데이터를 필터링하더나 ACID특성을 지켜야 한다면 RDBMS가 더 유리 할 수 있습니다.

#### 문서란?

RDBMS의 레코드와 개념이 비슷합니다. BSON(바이너리형태의 JSON)으로 저장 되어 JSON형태의 객체를 데이터 베이스에 저장할때 쉽게 등록 가능합니다.

여러 문서가 들어 있는 곳을 컬렉션이라고 합니다. 기존에는 테이블 개념을 사용하여 테이블 마다 같은 스키마를 가지고 있어야 합니다.
새로 등록해야할 데이터가 다른 스키마를 가지고 있다면 기존 데이터들의 스키마도 바꿔주어야 하지만 MongoDB는 다른 스키마를 가지고 있는 문서들이 한 컬렉션에서 공존할 수 있습니다.

문서 내부에 또 다른 문서를 가질 수있는데 이를 서브다큐먼트라고 합니다.

문서 하나에는 최대 16MB만큼 데이터를 넣을 수 있습니다.

#### 스키마

스키마는 컬렉션에 들어가는 문서 내부의 각 필드가 어떤 형식으로 되어 있는지 정의하는 객체입니다.

스키마에서 지원하는 타입
String : 문자열
Number : 숫자
Date : 날짜
Buffer : 파일을 담을 수 있는 버퍼
Boolean : true 또는 false 값
Mixed(Schema.Types.Mixed) : 어떤 데이터도 넣을 수 있는 형식
ObjectId(Schema.Types.ObjectId) :객체 아이디, 주로 다른 객체를 참조할 때 넣음
Array: 배열 형태의 값으로 []감싸서 사용

#### 모델

모델은 스키마를 사용하여 만드는 인스턴스로, 데이터베이스에서 실제 작업을 처리 할 수 있는 함수들을 지니고있는 객체

model(스키마 이름, 스키마 객체,[원하는이름])함수는 기본적으로 두개의 파라미터가 필요함 첫 번째, 스키마 이름, 두 번째 스키마 객체
DB는 스키마이름(post)을 정해주면 그 이름의 복수 형태(Posts)로 DB에 컬렉션 이름을 생성합니다.
컬렉션 이름을 만들 때 권장되는 컨벤션은 구분자를 사용하지않고 복수 형태로 사용하는 것입니다. 이게 싫으면 세번째에 원하는이름 이 경우 첫 번째 파라미터로 넣어 준 이름은 나중에 다른 스키마에서 참조 할때 사용합니다.

## 23장 JWT의 이해

JWT는 JSON Web Token의 약자로 데이터가 JSON으로 이루어져 있는 토큰을 말하고 두 개체가 서로 안전하게 정보를 주고받을 수 있도록 웹 표준으로 정의된 기술입니다.

### 세션기반 인증

서버가 사용자가 로그인 중임을 기억한다는 뜻으로 사용자가 로그인 하면 서버는 세션 저장소에서 사용자의 정보를 조회하고 세션 id를 발급합니다.
발급된 id는 주로 브라우저의 쿠키에 저장합니다. 그 다음에 사용자가 다른 요청을 보낼 때마다 서버는 세션 저장소에서 세션을 조회한 후 로그인 여부를 결정하여 작업을 처리하고 응답을 합니다. 세션 저장소는 주로 메모리, 디스크, 데이터 베이스 등을 사용합니다.

단점은 서버를 확장하기가 번거러울 수 있다 서버의 인스턴스가 여러 개가 된다면 모든 서버끼리 같은 세션을 공유해야 하므로 세션 전용 데이터베이스를 만들어야하고 신경 써야할게 많다.

### 토큰기반 인증

토큰은 로그인 이후 서버가 만들어 주는 문자열입니다. 토큰에는 사용자의 로그인 정보가 들어 있고, 해당 정보가 서버에서 발급되었음을 증명하는 서명이 들어있습니다. 서명이 있기에 무결성이 보장이 됩니다.
장점은 사용자 로그인 정보를 기억하기 위해 사용하는 리소스가 적고 서버 확장성이 높다
