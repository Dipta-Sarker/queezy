import React from 'react';
import image from '../../Images/side-img.png';
import './Home.css';
const Home = () => {
    return (
        <div className='home'>
            <div className='img'>
                <img src={image} alt="" />
                <h1>Trust Yourself, You Know More Than You Think You Do.</h1>
            </div>
        </div>
    );
};

export default Home;