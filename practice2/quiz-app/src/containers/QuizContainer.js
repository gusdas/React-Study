import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import QuizPage from '../Pages/QuizPage';
import { getQuizzes } from '../reducers/sample';

// const { useEffect } = React;

const QuizContainer = ({ getQuizzes, quizzes, loadingQuizzes }) => {
  useEffect(() => {
    getQuizzes();
  }, [getQuizzes]);
  return <QuizPage loadingQuizzes={loadingQuizzes} quizzes={quizzes} />;
};

export default connect(
  ({ sample }) => ({
    quizzes: sample.quizzes,
    loadingQuizzes: sample.loading.GET_QUIZZES,
  }),
  { getQuizzes }
)(QuizContainer);
