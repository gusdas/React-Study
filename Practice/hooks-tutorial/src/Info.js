import React, { useReducer } from 'react';
import useInputs from './useInputs';


const Info = () => {
  const [state, onChange] = useInputs({ name: '', nickName: '' });

  const { name, nickName } = state;

  return (
    <div>
      <input name="name" value={name} onChange={onChange}></input>
      <input name="nickName" value={nickName} onChange={onChange}></input>
      <div>
        <b>이름:</b> {name}
      </div>
      <div>
        <b>닉네임:</b> {nickName}
      </div>
    </div>
  );
};
// import { useState, useEffect } from 'react';
// const Info = () => {
//   const [name, setName] = useState('');
//   const [nickName, setNickName] = useState('');
//   useEffect(() => {
//     console.log('렌더링완료');
//     console.log([name, nickName]);
//     // console.log('마운트하고싶으면 두번째 파라미터에 빈 배열'); //,[]);
//     // console.log('특정값이 업데이트 될때만 실행하고 싶을때  두번째 파라미터에 배열안에 검사하고 싶은 값'); //,[name]);
//     return() =>{
//         //컴포넌트가 언 마우트 되기 전이나 업데이트 되기 직전에 작업하고 싶으면 cleanup함수를 반환
//         //언 마운트 될 때만 이 함수를 호출하고 싶으면 useEffect에 두번째 파라마ㅣ터에 빈배열
//         console.log('cleanup');
//         console.log(name);
//     }
//   },[]);
//   const onChangeName = (e) => {
//     setName(e.target.value);
//   };
//   const onChangeNickName = (e) => {
//     setNickName(e.target.value);
//   };

//   return (
//     <div>
//       <input value={name} onChange={onChangeName}></input>
//       <input value={nickName} onChange={onChangeNickName}></input>
//       <div>
//         <b>이름:</b> {name}
//       </div>
//       <div>
//         <b>닉네임:</b> {nickName}
//       </div>
//     </div>
//   );
// };

export default Info;
