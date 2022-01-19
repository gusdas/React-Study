import styled from 'styled-components';
import { Link } from 'react-router-dom';

import axios from 'axios';
const StartPage = () => {
  const Template = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
  const Title = styled.div`
    padding-top: 10rem;
    font-size: 7rem;
    font-family: Dongle;
    cursor: default;
  `;
  const Button = styled(Link)`
    width: 112px;
    height: 44px;
    border-radius: 5px;
    background: #3ee035;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color &:hover {
      background: #42ed39;
      cursor: pointer;
    }
  `;
  // const onClick = () => {
  //   onSetData();
  // };
  return (
    <>
      <Template>
        <Title>상식 퀴즈</Title>
        <Button to="/quiz">START</Button>
      </Template>
    </>
  );
};

export default StartPage;
