import { NavLink } from "react-router-dom";
import s from "./NavbarAuth.module.css"

const NavbarAuth = () => {
    return (
        <div>
            <NavLink className={s.link} to="/register">Register</NavLink>
            <NavLink  className={s.link} 
             to="/login">Login</NavLink>
        </div>
      )
}
export default NavbarAuth