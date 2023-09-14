import React, { useEffect, useState } from 'react';
import InstructorCard from './InstructorCard';

const PopularInstructor = () => {
    const[instructor,setInstructor]=useState([])
    useEffect(()=>{
        fetch('https://music-school-server-nine.vercel.app/instructors')
        .then(res=>res.json())
        .then(data=>{
            const popularinstructor=data.filter(item=> item.numOfStudents > 60)
            setInstructor(popularinstructor)
            console.log(popularinstructor)
        })
    },[])
    return (
        <>
        <h1 className='mb-5 my-5'>Popular Instructors</h1>
        <div className='row row-cols-1 row-cols-md-2 g-4'>

            {
                instructor.map(item=><InstructorCard key={item.instructor_id} item={item}/>)
            }
        </div>
        </>
    );
};

export default PopularInstructor;