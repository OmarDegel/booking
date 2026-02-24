import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import Home from "../pages/Home";
import Login, { action as loginAction } from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
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

import TripLoader from "../loaders/TripLoader";
import WishlistLoader from "../loaders/WishlistLoader";
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
            loader: WishlistLoader,
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
        action: loginAction,
      },
      {
        path: "/signup",
        element: <Signup />,
      },

      {
        path: "/reset-password",
        element: <ResetPassword />,
      }
    ],
  },
]);
const AppRouter = () => {
  return <RouterProvider router={router} />;
};
export default AppRouter;
