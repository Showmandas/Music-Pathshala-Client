import React from 'react';
import Slider from './Slider';
import ExtraSection from './ExtraSection';
import PopularClass from './PopularClasses/PopularClass';
import PopularInstructor from './popularInstructor/PopularInstructor';

const Home = () => {
    return (
        <div className='container mt-4'>
            <Slider/>
            <PopularClass/>
            <PopularInstructor/>
            <ExtraSection/>
        </div>
    );
};

export default Home;