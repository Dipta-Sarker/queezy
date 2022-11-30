import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuiz from '../SingleQuiz/SingleQuiz';

const Quiz = () => {
    const singleQuiz = useLoaderData()
    const questions = singleQuiz.data.questions;
    console.log(questions)
    return (
        <div>
            {
                questions.map(quiz => <SingleQuiz key={quiz.id} quiz={quiz}></SingleQuiz>)
            }
        </div>
    );
};

export default Quiz;