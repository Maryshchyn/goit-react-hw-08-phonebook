import { Navigate, Outlet } from "react-router-dom";
import useAuth from "hooks/useAuth";

export default function PrivateRoute() {
  const {isLoggedIn} = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/login" />
  }

  return <Outlet />
}