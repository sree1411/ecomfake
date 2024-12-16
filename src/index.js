import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import EmployeeHome from "./features/EmployeeHome";
import AddEmployee from "./features/AddEmployee";
import UpdateEmployee from "./features/UpdateEmployee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
       {
        path:"/",
        element: <EmployeeHome/>
       },
       {
        path:"/addemployee",
        element: <AddEmployee/>
       },
       {
          path:"/updateemployee",
          element: <UpdateEmployee/>
       }
      
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
