import React from "react";
import useSelectItem from "../../customHooks/useSelectItem";
import Swal from "sweetalert2";

const MyClasses = () => {
  const [seatData,refetch] = useSelectItem();
  console.log(seatData);

  //sum total price through reduce
  // const total = seatData.reduce((sum, item) => item.classPrice + sum, 0);

  //handle delete
  const handleDelete = (classItem) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://music-school-server-nine.vercel.app/seats/${classItem._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
                refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <>
      <div>
        <h2>My Selected Classes : {seatData.length}</h2>
        {/* <h2>Total price : {total}</h2> */}
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Classes Image</th>
              <th scope="col">Selected Class</th>
              <th scope="col">Price</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {seatData?.length && seatData?.map((classItem, index) => (
              <tr key={classItem._id}>
                <th scope="row">{index + 1}</th>
                <td>{classItem.userName}</td>
                <td>
                  <img src={classItem.image} className="img-fluid itemImg" />
                </td>
                <td>{classItem.name}</td>
                <td>{classItem.classPrice}</td>
                <td>
                  <button
                    className="btn"
                    onClick={() => handleDelete(classItem)}
                  >
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

export default MyClasses;
