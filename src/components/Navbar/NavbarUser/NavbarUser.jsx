import { useDispatch} from "react-redux";
import { logOut } from "redux/auth/operation";
import useAuth from "hooks/useAuth"
import s from "./NavbarUser.module.css"


 const NavbarUser = () => {
   const dispatch = useDispatch();
  const { user } = useAuth();
  
  const onLogout = () => {
    dispatch(logOut());
  }

  return (
    <div className={s.box}>
      <p className={s.text}>{`Вітаю, ${user.email}`}</p>
      <button className={s.button} onClick={onLogout}>Logout</button>
      </div>
  )
}
export default NavbarUser