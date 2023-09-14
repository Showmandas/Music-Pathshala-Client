import { useQuery } from "@tanstack/react-query";
import React from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../customHooks/useAxiosSecure";

const Allusers = () => {
    const[axiosSecure]=useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });
  
  //   make admin
  const handleMakeAdmin = (user) => {
    fetch(`https://music-school-server-nine.vercel.app/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            icon: "success",
            title: `${user.name} is Admin now`,
          });
        }
      });
  };

  //   make admin
  const handleMakeInstructor = (user) => {
    fetch(`https://music-school-server-nine.vercel.app/users/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            icon: "success",
            title: `${user.name} is Instructor now`,
          });
        }
      });
  };

  const handleDelete = (user) => {
    // Swal.fire({
    //   title: "Are you sure?",
    //   text: "You won't be able to revert this!",
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#3085d6",
    //   cancelButtonColor: "#d33",
    //   confirmButtonText: "Yes, delete it!",
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     fetch(`https://music-school-server-nine.vercel.app/seats/${user._id}`, {
    //       method: "DELETE",
    //     })
    //       .then((res) => res.json())
    //       .then((data) => {
    //         if (data.deletedCount > 0) {
    //             refetch();
    //           Swal.fire("Deleted!", "Your file has been deleted.", "success");
    //         }
    //       });
    //   }
    // });
  };
  return (
    <>
      <div>
        <h4>Total Users : {users.length}</h4>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Role</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      className="btn btn-dark text-white"
                      onClick={() => handleMakeAdmin(user)}
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                  {user.role === "instructor" ? (
                    "Instructor"
                  ) : (
                    <button
                      className="btn btn-light text-dark"
                      onClick={() => handleMakeInstructor(user)}
                    >
                      Make Instructor
                    </button>
                  )}
                </td>
                <td>
                  <button className="btn" onClick={() => handleDelete(user)}>
                    <i className="fa-solid fa-trash text-danger"></i>
                  </button>
                </td>
                <td>
                  <button>Pay</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Allusers;
