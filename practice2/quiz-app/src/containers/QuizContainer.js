import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import QuizPage from '../Pages/QuizPage';
import { getQuizzes } from '../module/sample';

// const { useEffect } = React;

const QuizContainer = ({ getQuizzes, quizzes, loadingQuizzes }) => {
  useEffect(() => {
    const fn = async () => {
      try {
        await getQuizzes();
      } catch (e) {
        console.log(e);
      }
    };
    fn();
  }, [getQuizzes]);
  return <QuizPage loadingQuizzes={loadingQuizzes} quizzes={quizzes} />;
};

export default connect(
  ({ sample, loading }) => ({
    quizzes: sample.quizzes,
    loadingQuizzes: loading['api/GET_QUIZZES'],
  }),
  { getQuizzes }
)(QuizContainer);
