import React, { Component } from 'react';

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };
  myRef = null;

  //컴포넌트 생성시 처음 실행, 초기 state 정의
  constructor(props) {
    super(props);
    console.log('construct');
  }

  //마운트될때랑 업데이트 둘다 호출, props로 받아 온 값을 state에 동기화 시키는 용도
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }
  
  //마운트 후 호출, 비동기 작업 처리
  componentDidMount() {
    console.log('componentDidMount');
  }

  //업데이트 전 호출, props나 state가 변경됐을 때 리렌더링 여부 처리 false시 업데이트 중지
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    return nextState.number % 10 !== 4;
  }

  //컴포넌트 제거 될때 호출 , componentDidMount에서 등록한 이벤트, 타이머, DOM 제거해야함
  componentWillUnmount() {
    console.log('componentWillMount');
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };
  //render에서 만들어진 결과물이 보여지기 전 호출, 업데이트하기 직전 값 참고할때 사용(ex:스크롤 위치)
  getSnapshotBeforeUpdate(prevProps, PrevState) {
    console.log('getSnapshotBeforeUpdate');
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }
  //리렌더링 완료후 실행, getSnapshotBeforeUpdate에서 리턴한 값이 snpashot으로 들어옴 이전 state, props에 접근 가능
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, prevState);
    if (snapshot) {
      console.log('업데이트 되기 전 색상:', snapshot);
    }
  }

  // 컴포넌트 모양새를 정의 
  render() {
    console.log('render');
    const style = {
      color: this.props.color,
    };
    return (
      <div>
          {/* {this.props.missing.value} */}
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample