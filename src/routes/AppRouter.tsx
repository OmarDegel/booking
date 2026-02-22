import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import Home from "../pages/Home";
import Login, { action as loginAction } from "../pages/auth/Login";
import Signup, { action as signupAction } from "../pages/auth/Signup";
import ForgetPassword from "../pages/auth/ForgetPassword";
import OtpPage from "../pages/auth/Otp";
import ResetPassword from "../pages/auth/ResetPassword";
import Trips from "../pages/Trips";
import TripDetails from "../pages/TripDetails";
import ProfileLayout from "../pages/profile/ProfileLayout";
import Favourites from "../pages/profile/Favourites";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Account, {
  action as accountAction,
  loader as accountLoader,
} from "../pages/profile/Account";
import CheckRegister, {
  action as checkRegisterAction,
} from "../pages/auth/CheckRegister";
import HomeLoader from "../loaders/HomeLoader";
import TripsLoader from "../loaders/TripsLoader";
import TripLoader from "../loaders/TripLoader";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: HomeLoader,
      },
      {
        path: "/trips",
        element: <Trips />,
        loader: TripsLoader,
      },
      {
        path: "/trips/:link",
        element: <TripDetails />,
        loader: TripLoader,
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
            loader: accountLoader,
            action: accountAction,
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
    path: "/login",
    element: <Login />,
    action: loginAction,
  },
  {
    path: "/signup",
    element: <Signup />,
    action: signupAction,
  },
  {
    path: "/check-email",
    element: <CheckRegister />,
    action: checkRegisterAction,
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
