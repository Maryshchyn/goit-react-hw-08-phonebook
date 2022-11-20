import {Link} from "react-router-dom";
import s from "./NotFoundPage.module.css"

const NotFoundPage = () => {
    return (
        <div className={s.box}>
            <h1 className={s.title}>Welcome to your personal contact book</h1>
            <div>
                 <Link className={s.link} to="/register">Register</Link>
                 <Link className={s.link} to="/login">Login</Link>
            </div>
        </div>
    )
}

export default NotFoundPage;