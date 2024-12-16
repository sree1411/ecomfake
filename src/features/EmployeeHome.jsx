import React from 'react';
// import { useGetEmployeeQuery, useDeleteEmployeMutation } from '../services/employeeApi';
import { Link } from 'react-router-dom';
import { useGetEmployeeQuery } from '../services/employeeApi';

const EmployeeHome = () => {
  const { isLoading, data } = useGetEmployeeQuery()
 

  return (
    <div>
      <h1>Employee Home</h1>
      <Link to="/addemployee" className="btn btn-primary">
        Add Employee
      </Link>
      {isLoading && <h1>Loading .......</h1>}
      {!isLoading && data.map((user, i) => (
        <li key={i}>
          {user.firstname} {user.lastname}
          {/* <button onClick={() => handleDelete(user._id)}>Delete</button> */}
          <Link to={`/updateemployee/${user._id}`}>
            <button>Edit</button>
          </Link>
        </li>
      ))}
    </div>
  );
};

export default EmployeeHome;
