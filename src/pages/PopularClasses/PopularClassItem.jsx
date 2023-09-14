import React from 'react';

const PopularClassItem = ({item}) => {
    const{_id,name,image,category,classPrice,numOfStudents}=item
    return (
        <div className="col">
  <div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={image} className="img-fluid rounded-start" alt="class image" id='classimg'/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title"><span className='fw-bold'>Name : </span>{name}</h5>
        <p className="card-text"><span className='fw-bold'>Category :</span> {category}</p>
        <p className="card-text"><span className='fw-bold'>Number Of Students : </span>{numOfStudents}</p>
        <p className="card-text"><span className='fw-bold'>Price : </span>{classPrice} /-</p>
      </div>
    </div>
  </div>
</div>
</div>

    );
};

export default PopularClassItem;