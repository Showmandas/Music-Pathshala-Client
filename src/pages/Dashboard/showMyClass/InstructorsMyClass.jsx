import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import useAddedClass from '../../../customHooks/useAddedClass';

const InstructorsMyClass = () => {
    const{user}=useContext(AuthContext)
    // const [mydata, setMyData] = useState([]);
    const [myAddClass,refetch] = useAddedClass();





     //show own user added toys
//   useEffect(() => {
//     fetch(`https://music-school-server-nine.vercel.app/myaddclass?email=${user?.email}`, {
//       method: "GET",
//     })
//       .then((res) => res.json())
//       .then((data) => console.log(data));
//   }, [user]);
    return (
        <div className="container my-5">
        
        <table className="table text-center  table-striped table-hover table-responsive">
          <tbody>
            <th>#id</th>
            <th>Class Name</th>
            <th>CLass Image</th>
            <th>Instructor Email</th>
            <th>Available Seat</th>
            <th>Price</th>
            <th colSpan={2}>#Actions</th>
            {user ? (myAddClass.length &&
              myAddClass?.map((data, index) => {
                console.log(data)
                return (
                  <tr key={data._id}>
                    <th scope="row">{index + 1}</th>
                    <td>
                      <img
                        src={data.photo}
                        alt="class image"
                        className="img-fluid w-25"
                      />
                    </td>
                    <td>{data.name}</td>
                    <td>{data.classname}</td>
                    <td>{data.price}</td>
                    <td>{data.seat}</td>
                    <td>
                      <button
                        className="btn"
                        // onClick={() => handleDeleteToy(data._id)}
                      >
                        <i className="fa-solid fa-trash-can fs-5 text-danger"></i>
                      </button>
                    </td>
                    <td>
                      {/* <Link to={`/update/${data._id}`}>
                        <button className="btn">
                          <i className="fa-regular fs-5 text-info fa-pen-to-square"></i>
                        </button>
                      </Link> */}
                    </td>
                  </tr>
                );
              })
            ) : (
              <h1 className="my-5">No data found</h1>
            )}
          </tbody>
        </table>
      </div>
  
    );
};

export default InstructorsMyClass;