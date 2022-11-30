import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const singleQuiz = useLoaderData()
    const questions = singleQuiz.data.questions;
    console.log(questions)
    return (
        <div>
            <h1>{questions.length}</h1>
        </div>
    );
};

export default Quiz;