import { logIn } from "redux/auth/operation"
import { useDispatch } from "react-redux"
import s from "./LoginForm.module.css"

const LoginForm = () => {
    const dispatch = useDispatch()

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        dispatch(
          logIn({
            email: form.elements.email.value,
            password: form.elements.password.value,
          })
        );
        form.reset();
      };
    
      return (
        <form className={s.form} onSubmit={handleSubmit} autoComplete="off">
          <label className={s.label}>
            Email
            <input 
            className={s.input}
                type="email" 
                name="email"
                placeholder="Enter user email"
                required 
                />
          </label>
          <label className={s.label}>
            Password
            <input 
            className={s.input}
                type="password" 
                name="password"
                placeholder="Enter user password"
                required  
                />
          </label>
          <button className={s.button} type="submit">Log In</button>
        </form>
      );
}
export default LoginForm