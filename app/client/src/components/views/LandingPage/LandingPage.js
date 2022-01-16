import React from 'react';
import './LandingPage.css';
import Winery from '../../../images/winery.jpg';

const LandingPage = () => {
    return (
        <div className='main-image'>
            <img src={Winery} alt='A'/>
        </div>
    );
}

export default LandingPage