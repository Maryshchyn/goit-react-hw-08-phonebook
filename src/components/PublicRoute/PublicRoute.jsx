import { Navigate, Outlet } from "react-router-dom";
import useAuth from "hooks/useAuth";

export default function PublicRoute() {
  const {isLoggedIn} = useAuth();

  if (isLoggedIn) {
    return <Navigate to="/contacts" />
  }

  return <Outlet />
}