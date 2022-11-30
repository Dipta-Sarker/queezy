import React from 'react';
import { useLoaderData } from 'react-router-dom';
import image from '../../Images/side-img.png';
import SingleCard from '../../components/SingleCard/SingleCard';
import './Home.css';
const Home = () => {
    const quiz = useLoaderData()
    
    const quizs = quiz.data;
    
    return (
        <div className='home'>
            <div className='img'>
                <img src={image} alt="" />
                <h1>Trust Yourself, You Know More Than You Think You Do.</h1>
            </div>
            <div className='quiz-card'>
            
              {
                quizs.map(item => <SingleCard key={item.id} quiz={item}></SingleCard>)
               }
              
            </div>
        </div>
    );
};

export default Home;