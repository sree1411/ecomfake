import React from "react";
import { Formik, Form, Field} from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { useGetEmployeeQuery, useUpdateEmpMutation } from "../services/employeeApi";

const UpdateEmployee = () => {
    const {id } = useParams();
    const { isLoading, data } = useGetEmployeeQuery()

    const currentEmployee = data?.find((emp)=>emp._id === id)
    console.log(currentEmployee)
     var [addempFn] = useUpdateEmpMutation()
     const navigate = useNavigate()

  return (
    <div>
      {
        isLoading && <h1> Loading .....</h1>
      }
      <Formik
        initialValues={{ firstname: currentEmployee.firstname, lastname: currentEmployee.lastname,
           age: currentEmployee.age, gender: currentEmployee.gender }}
        onSubmit={(values) => {
            addempFn({id, emp:values}).then((res)=>navigate('/'));
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="firstname" />
            <Field type="text" name="lastname" />
            <Field type="text" name="age" />
            <Field type="text" name="gender" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UpdateEmployee;