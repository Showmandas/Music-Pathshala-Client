import React, { useEffect, useState } from 'react';
import InstructorCard from '../popularInstructor/InstructorCard';
import InstructorItemCard from './InstructorItemCard';
// import InstructorCard from './InstructorCard';

const Instructors = () => {
    const[instructor,setInstructor]=useState([])
    useEffect(()=>{
        fetch('https://music-school-server-nine.vercel.app/instructors')
        .then(res=>res.json())
        .then(data=>{
            setInstructor(data)
            console.log(data)
        })
    },[])
    return (
        <div className='container my-5'>
        <h1 className='my-5'>Our Honourable Instructors</h1>
        <div className='row row-cols-1 row-cols-md-2 g-4'>

            {
                instructor.map(item=><InstructorItemCard key={item.instructor_id} item={item}/>)
            }
        </div>
        </div>
    );
};

export default Instructors;