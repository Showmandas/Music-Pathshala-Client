import React, { useEffect, useState } from 'react';
import ClassesCard from './ClassesCard';
import Anime, { anime } from 'react-anime';


const Classes = () => {
    const[classes,setClasses]=useState([])
    useEffect(()=>{
        fetch('https://music-school-server-nine.vercel.app/classes')
        .then(res=>res.json())
        .then(data=>{
            setClasses(data)
            console.log(data)
        })
    },[])
    return (
        <div className='container my-5'>
        <h1 className='my-5'>Our Approved Classes</h1>
        <div className='row row-cols-1 row-cols-md-2 g-4'>
        <Anime opacity={[0, 1]} translateX={'1em'} delay={(e, i) => i * 1000}>

            {
                classes.map(item=><ClassesCard key={item._id} item={item}/>)
            }
            </Anime>
        </div>
        </div>
    );
    
};

export default Classes;