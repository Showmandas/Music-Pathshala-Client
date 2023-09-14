import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useSelectItem from "../../customHooks/useSelectItem";

const ClassesCard = ({ item }) => {
  console.log(item)
    const {user}=useContext(AuthContext);
    const[,refetch]=useSelectItem();
    const navigate=useNavigate()
    const location=useLocation()
  const { _id, instructor_name, image, seat, numOfStudents, name, classPrice } =
    item;


    const handleSelectSeat=item=>{
        console.log(item)
        if(user && user.email){
            const selectItem={selectItemId:_id,name,image,classPrice,email:user.email,userName:user.displayName}
            fetch('https://music-school-server-nine.vercel.app/seats',{
                method:"POST",
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(selectItem)
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.insertedId){
                    refetch();  //for updating the selected class value
                    Swal.fire({
                        icon: "success",
                        title: "Class Selected.",
                      });
                }
            })
        }else{
            Swal.fire({
                title: 'Please Log in First',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Log in now'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login',{state:{from:location}})
                }
              })
        }
    }

  return (
    <div className="col">
      <div className="card mb-3 shadow-lg" id="instructorCards">
        <div className="row g-0">
          <div className="col-md-6">
            <img
              src={image}
              className="rounded-start img-fluid w-100"
              alt="class image"
              id="classImg"
            />
          </div>
          <div className="col-md-6 my-5">
            <div className="card-body">
              <h5 className="card-title">Instructor : {instructor_name}</h5>
              <p className="card-text">Classes Taken : {name}</p>
              <p className="card-text">Number Of Students : {numOfStudents}</p>
              <p className="card-text fs-5 fw-bold text-body-secondary">
                Price : {classPrice} /-
              </p>
              <p className="card-text fw-bold text-body-secondary">
                Available Seats : <span className="bg-success-subtle text-dark p-1 fs-5">{seat}</span>
              </p>
              <button className="btn btn-light" onClick={()=>handleSelectSeat(item)}>Select Class</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;
