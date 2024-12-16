import React from "react";
import { Formik, Form, Field} from "formik";
import { useNavigate } from "react-router-dom";
import { useAddEmployeMutation } from "../services/employeeApi";

const AddEmployee = () => {

     var [addempFn] = useAddEmployeMutation()
     const navigate = useNavigate()

  return (
    <div>
      <Formik
        initialValues={{ firstname: "", lastname: "", age: "", gender: "" }}
        onSubmit={(values) => {
            addempFn(values).then((res)=>navigate('/'));
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

export default AddEmployee;
