import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Shared/Layout.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login";
import AuthProvider from "./Provider/AuthProvider";
import Register from "./pages/Registration";
import ErrorPage from "./pages/ErrorPage";
import Instructors from "./pages/InstructorPage/Instructors";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Classes from "./pages/Classes/Classes";
import Dashboard from "./Dashboard/DashboardLayout/Dashboard";
import MyClasses from "./pages/Dashboard/MyClasses";
import PrivateRoute from './PrivateRoute/PrivateRoute'
import Allusers from "./pages/Dashboard/Allusers/Allusers";
import AdminRoute from "./PrivateRoute/AdminRoute/AdminRoute";
import ManageClasses from "./pages/Dashboard/ManageClasses/ManageClasses";
import AddClass from "./pages/Dashboard/AddClass/AddClass";
import InstructorsMyClass from "./pages/Dashboard/showMyClass/InstructorsMyClass";
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/instructors",
        element: <Instructors />,
      },
      {
        path: "/classes",
        element: <Classes />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path:'dashboard',
    element:<PrivateRoute><Dashboard/></PrivateRoute>,
    children:[
      {
        path:'myclasses',
        element:<MyClasses/>
      },
      {
        path:'allusers',
        element:<AdminRoute><Allusers/></AdminRoute>
      },
      {
        path:'manageclasses',
        element:<AdminRoute><ManageClasses/></AdminRoute>
      },
      {
        path:'addclass',
        element:<AddClass/>
      },
      {
        path:'myaddclass',
        element:<InstructorsMyClass/>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
