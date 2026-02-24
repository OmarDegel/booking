import { Navigate, Outlet } from "react-router-dom";
import { getUser } from "../../util/auth";

function AuthMiddleware() {
  const user = getUser(); 
  if (user) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />; 
}

export default AuthMiddleware;