import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';
// import { useNavigate } from 'react-router-dom';


const img_hosting_token=import.meta.env.VITE_IMAGE_TOKEN;
const img_hosting_url=`https://api.imgbb.com/1/upload?key=${img_hosting_token}`
const AddClass = () => {
    const{user}=useContext(AuthContext)
    // const navigate = useNavigate();
    const handleAddClass=(e)=>{
        e.preventDefault();
        const form = e.target;
        const classname = form.name.value;
        const price = parseFloat(form.classPrice.value);
        const photo = form.image.value;
        const seats = form.seat.value;
        const email = user.email;
        const name = user.displayName;
        const classData = {
          classname,
          email,
          photo,
          price,
          seats
        };
        console.log(classData);
    
        const formData=new FormData()
        formData.append('photo',form.photo[0])

        fetch(img_hosting_url,{
          method:"POST",
          body:formData
        })
        .then(res=>res.json())
        .then(imgResponse=>{
          console.log(imgResponse)
        })

        fetch("https://music-school-server-nine.vercel.app/classes", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(classData),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              Swal.fire({
                title: "New class successfully Added",
                icon: "success",
              });
            //   navigate("/dashboard/addclass");
            }
          });
    
    }

    return (
       <div className='container'>
        <form className="mb-5 p-2" onSubmit={handleAddClass}>
  <div className="mb-3">
    <label  className="form-label">Class Name</label>
    <input type="text" className="form-control" id="name" name='name' required/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Class Image</label>
  <input className="form-control" type="file" id="formFile" name='image' required></input>
  </div>
  <div className="mb-3">
    <label  className="form-label">Instructor Name</label>
    <input type="text" className="form-control" id="instname" defaultValue={user && user?.displayName} readOnly/>
  </div>
  <div className="mb-3">
  <label  className="form-label">Instructor Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" defaultValue={user && user?.email} readOnly/>
  </div>
  
  <div className="mb-3">
    <label  className="form-label">Available Seats</label>
    <input type="number" className="form-control" id="seats" name='seat' required/>
  </div>
  
  <div className="mb-3">
    <label  className="form-label">Price</label>
    <input type="number" className="form-control" id="price" name='classPrice' required/>
  </div>
  <button type="submit" className="btn btn-primary mt-3 m-auto">Add Classes</button>
</form>

       </div>
    );
};

export default AddClass;