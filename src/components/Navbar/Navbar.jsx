import { Link } from 'react-router-dom';
import s from "./Navbar.module.css"
import NavbarAuth from "./NavbarAuth/NavbarAuth";
import NavbarUser from "./NavbarUser/NavbarUser";

import useAuth from 'hooks/useAuth';


const Navbar = () => {
    const {isLoggedIn} = useAuth()

    return (
        <header className={s.header}>
            <Link className={s.link} to="/">Phonebook</Link>
            <nav>
                <div className={s.link}>
                    {isLoggedIn ? <NavbarUser /> : <NavbarAuth />}
                 </div> 
            </nav>
        </header>
    )
}

export default Navbar;