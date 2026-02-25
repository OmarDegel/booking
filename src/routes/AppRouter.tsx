import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import ResetPassword from "../pages/auth/ResetPassword";
import Trips from "../pages/Trips";
import TripDetails from "../pages/TripDetails";
import ProfileLayout from "../pages/profile/ProfileLayout";
import Favourites from "../pages/profile/Favourites";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Account from "../pages/profile/Account";

import { Error } from "../pages/Error";
import AuthMiddleware from "../pages/middleware/AuthMiddleware";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/trips",
        element: <Trips />,
      },
      {
        path: "/trips/:link",
        element: <TripDetails />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/profile",
        element: <ProfileLayout />,
        children: [
          {
            index: true,
            element: <Account />,
          },
          {
            path: "favourites",
            element: <Favourites />,
          },
        ],
      },
    ],
  },
  {
    element: <AuthMiddleware />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },

      {
        path: "/reset-password",
        element: <ResetPassword />,
      },
    ],
  },
]);
const AppRouter = () => {
  return <RouterProvider router={router} />;
};
export default AppRouter;
