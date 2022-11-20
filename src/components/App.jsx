import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { selectCurrent } from "redux/auth/authSelectors";
import { userCurrent } from "redux/auth/operation";
import UserRoutes from "./UserRoutes";

/* import Contacts  from "./Contacts/Contacts"; */
import Loader from "./Loader/Loader";
import Navbar from "./Navbar/Navbar";

export const App = () => {
    const dispatch = useDispatch();
    const isCurrent = useSelector(selectCurrent);

    useEffect(() => {
        dispatch(userCurrent());
      },[dispatch])

 return (
    <div>
        {isCurrent ? <Loader /> : (
        <>
            <Navbar />
            <UserRoutes />
        </>
        )}
    </div>
    );
};