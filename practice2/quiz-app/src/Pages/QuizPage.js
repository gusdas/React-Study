import styled from 'styled-components';
const QuizPage = ({ loadingQuiz, quizzes }) => {
  const StartTemplate = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
  `;
  const Question = styled.div`
    margin: 4rem;
    font-size: 3rem;
    font-family: NotoSans;
    overflow-y: auto;
    max-height: 12.5rem;
    min-width: 10rem;
    cursor: default;
    background: rgb(240, 232, 194, 0.5);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
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
    border-radius: 10px;
    margin: 2rem;
    overflow-y: auto;
    background: #c4e0b4;
  `;

  return (
    <div>
      <StartTemplate>
        <Question>
          In the Harry In the Harry Potter universe, who does Draco Malfoy end
          up marrying?
        </Question>

        <Wrapper>
          <Button>Routing Information Protocol</Button>
          <Button>Hermione Granger</Button>
        </Wrapper>
        <Wrapper>
          <Button>Pansy Parkinson</Button>
          <Button>Astoria Greengrass</Button>
        </Wrapper>
      </StartTemplate>
    </div>
  );
};

export default QuizPage;
