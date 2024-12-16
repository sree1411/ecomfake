import React from 'react'
import { useGetEmployeeQuery } from '../services/employeeApi'

const EmployeeHome = () => {

  const {isLoading, data} =  useGetEmployeeQuery()
  

  return (
    <div>
           <h1> EmployeeHome </h1>
           <button className='btn btn-primary'> Add Employee</button>
          {
            isLoading && <h1> Loading .......</h1>
          }

          {
            !isLoading && (data.map((user)=>(
                <li>{user.firstname}</li>
            )))
          }

           
    </div>
  )
}

export default EmployeeHome