import { useDispatch } from "react-redux";
import { register } from "redux/auth/operation";
import s from "./RegisterForm.module.css"
const RegisterForm = () => {
const dispatch = useDispatch()

const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={s.label}>
        Name
            <input 
            className={s.input}
             name="name"
             type="text"
             placeholder="Enter user name"
             required
            />
      </label>
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
            placeholder="Enter user password (min 6 symbols)"
            required 
            />
      </label>
      <button className={s.button} type="submit">Register</button>
    </form>
  );
}

export default RegisterForm