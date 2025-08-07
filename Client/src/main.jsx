import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LandingPage from "./LandingPage.jsx";
import Login from "./Login.jsx";
import Registration from "./Registration.jsx";
import Dashboard from "./Dashboard.jsx";
import CourseDetail from "./CourseDetail.jsx";
import AdminUpload from "./AdminUpload.jsx";
import NotFound from "./NotFound.jsx";

import Error404 from './assets/Image/404.png';
import AuthProvide from './Auth/AuthProvide.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import AuthContext from './Auth/AuthContext.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <div>
        <img src={Error404} className='mx-auto w-[30rem]' alt="404" />
        <p className='text-center text-xl text-black font-bold'>Page Not Found</p>
      </div>
    ),
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/login", element: <Login /> },
      { path: "/registration", element: <Registration /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/course/:id", element: <CourseDetail /> },
      { path: "/admin/upload", element: <AdminUpload /> }, // Optional
      { path: "/about", element: <div>About</div> },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvide>
      <RouterProvider router={router} />
    </AuthProvide>
  </StrictMode>,
)
