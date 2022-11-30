import React from 'react';
import './SingleQuiz.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SingleQuiz = ({quiz}) => {
    const addToClickHandler = (id) =>{
        const correctAnswer = quiz.correctAnswer;
        
        if(id === correctAnswer){
            
            toast('It Is The Correct Answer !!',{position: "top-center"});
        }
        else{
            
            toast('It Is The Wrong Answer !!',{position: "top-center"});
        }
        

    }
    return (
        <div className='quiz'>
            <h4 className='title'>Quiz:  {quiz.question}</h4>
            <div className='quiz-option'>
                    <button onClick={()=>addToClickHandler(quiz.options[0])} className='btn-quiz'>
                    {quiz.options[0]}
                    </button>
                    <button onClick={()=>addToClickHandler(quiz.options[1])} className='btn-quiz'>
                    {quiz.options[1]}
                    </button>
                    <button onClick={()=>addToClickHandler(quiz.options[2])} className='btn-quiz'>
                    {quiz.options[2]}
                    </button>
                    <button onClick={()=>addToClickHandler(quiz.options[3])} className='btn-quiz'>
                    {quiz.options[3]}
                    </button>
                    <ToastContainer />
              
            </div>
        </div>
    );
};

export default SingleQuiz;
