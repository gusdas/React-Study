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
   ### JSX문법  내에서 IF문 대신 조건부연산자(삼항연산자)를 사용해야한다.
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
   DOM에 직접적으로 접근해야 할때 사용해야한다 
    - 특정 input에 포커스 주기(작업이 끝난 후 input에 포커싱)
    - 스크롤 박스 조작하기
    - Canvas 요소에 그림 그리기 등
   
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
    업데이트가 되는 경우
    1. props가 바뀔 때
    2. state가 바뀔 때 
    3. 부모 컴포넌트가 리렌더링될 때
    4. this.forceUpdate로 강제로 렌더링을 트리거할 때
    
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
    스타일을 자바스크립트 파일에 내장 시키는 방식으로  스타일이 바로 적용 된 컴포넌트를 만들 수 있게해준다.
    props값을 스타일에 쉽게 적용할 수 있다.
    
    
