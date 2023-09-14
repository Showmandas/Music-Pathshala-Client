import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const InstructorCard = ({item}) => {
  const{user}=useContext(AuthContext)
    const{instructor_id,name,image,classes,numOfStudents,email}=item
    return (
        <div className="col-lg-4 col-12">
  <div className="card">
  <img src={image} className="card-img-top img-fluid" alt="instructors image" id='img'/>
  <div className="card-body">
    <h5 className="card-title">Instructor's Name : {name}</h5>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item"><span className='fw-bold'>Classes : </span>{classes}</li>
    <li className="list-group-item"><span className='fw-bold'>Enrolled Students : </span>{numOfStudents}</li>
    <li className="list-group-item"><span className='fw-bold'>Email : </span>{email}</li>
  </ul>
</div>
</div>

    );
};

export default InstructorCard;