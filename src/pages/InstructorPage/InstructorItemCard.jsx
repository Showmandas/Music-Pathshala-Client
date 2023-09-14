import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const InstructorItemCard = ({item}) => {
  const {user}=useContext(AuthContext);
    
        const{instructor_id,name,image,classes,numOfStudents,bio}=item

    return (
        <div className="col">
        <div className="card mb-3 shadow-lg" id='instructorCards'>
        <div className="row g-0">
          <div className="col-md-6">
            <img src={image} className="img-fluid rounded-start img-fluid w-100" alt="instructors image" id='instrImg'/>
          </div>
          <div className="col-md-6 my-5">
            <div className="card-body">
              <h5 className="card-title">Name : {name}</h5>
              <p className="card-text">Classes Taken : {classes}</p>
              <p className="card-text">Number Of Students : {numOfStudents}</p>
              <p className="card-text fs-5 fw-bold text-body-secondary"> {bio}</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
};

export default InstructorItemCard;