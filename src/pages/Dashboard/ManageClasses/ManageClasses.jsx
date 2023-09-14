import React from 'react';
import useClasses from '../../../customHooks/useClasses';

const ManageClasses = () => {
    const[classes]=useClasses()
    return (
        <div>
            <h2>Manage Classes</h2>
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
            {classes.map((classItem, index) => (
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

        </div>
    );
};

export default ManageClasses;