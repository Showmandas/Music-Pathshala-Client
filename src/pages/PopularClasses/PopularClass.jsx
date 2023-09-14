import React, { useEffect, useState } from 'react';
import PopularClassItem from './PopularClassItem';
import Anime, { anime } from 'react-anime';

const PopularClass = () => {
    const[classes,setClasses]=useState([])
    useEffect(()=>{
        fetch('https://music-school-server-nine.vercel.app/classes')
        .then(res=>res.json())
        .then(data=>{
            const popularClass=data.filter(item=>item.category ==='popular' && item.numOfStudents > 200)
            setClasses(popularClass)
        })
    },[])
    return (
        <>
        <h1 className='mb-5 my-5'>Popular Classes</h1>
        <div className='row row-cols-1 row-cols-md-2 g-4'>
        <Anime opacity={[0, 1]} translateY={'1em'} delay={(e, i) => i * 1000}>

            {
                classes.map(item=><PopularClassItem key={item._id} item={item}/>)
            }
            </Anime>

        </div>
        </>
    );
};

export default PopularClass;