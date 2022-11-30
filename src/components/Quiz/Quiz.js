import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuiz from '../SingleQuiz/SingleQuiz';

const Quiz = () => {
    const singleQuiz = useLoaderData()
    const questions = singleQuiz.data.questions;
    
    return (
        <div>
            <h1>{singleQuiz.data.name}</h1>
            {
                questions.map(quiz => <SingleQuiz key={quiz.id} quiz={quiz}></SingleQuiz>)
            }
        </div>
    );
};

export default Quiz;