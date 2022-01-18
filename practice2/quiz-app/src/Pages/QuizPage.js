import styled from 'styled-components';
import Result from '../components/Result';
const QuizPage = () => {
  const StartTemplate = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
  `;
  const Title = styled.div`
    margin: 5rem;
    font-size: 3rem;
    font-family: NotoSans;
    overflow-y: auto;
    max-height: 12.5rem;
    min-width: 10rem;
    cursor: default;
    background: rgb(240, 232, 194, 0.5);
  `;
  const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
  `;
  const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: NotoSans;
    font-size: 1.5rem;
    height: 6rem;
    width: 20rem;
    border: 1px solid red;
    margin: 2rem;
    padding: 0.5rem;
  `;
  return (
    <>
      <StartTemplate>
        <Title>
          In the Harry In the Harry Potter universe, who does Draco Malfoy end
          up marrying?
        </Title>

        <Wrapper>
          <Button>Millicent Bulstrode Astoria Greengrass</Button>
          <Button>Hermione Granger</Button>
        </Wrapper>
        <Wrapper>
          <Button>Pansy Parkinson</Button>
          <Button>Astoria Greengrass</Button>
        </Wrapper>
      </StartTemplate>

      <Result correctCnt="1" />
    </>
  );
};

export default QuizPage;
