import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import ForgetPassword from "../pages/auth/ForgetPassword";
import OtpPage from "../pages/auth/Otp";
import ResetPassword from "../pages/auth/ResetPassword";
import Trips from "../pages/Trips";
import TripDetails from "../pages/TripDetails";
import ProfileLayout from "../pages/profile/ProfileLayout";
import Favourites from "../pages/profile/Favourites";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
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
        path: "/trips/:id",
        element: <TripDetails />,
      },
      {
        path: "/profile",
        element: <ProfileLayout />,
        children: [
          {
            index: true,
            element: <div>hi</div>,
          },
          {
            path: "favourites",
            element: <Favourites />,
          }
        ],
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword />,
  },
  {
    path: "/otp",
    element: <OtpPage />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
]);
const AppRouter = () => {
  return <RouterProvider router={router} />;
};
export default AppRouter;
