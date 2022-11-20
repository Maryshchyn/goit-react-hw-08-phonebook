import { useState } from "react";
import s from "./ContactForm.module.css"
import { addContact } from "redux/contacts/operation";
import { useDispatch,useSelector} from 'react-redux';
import { selectItems } from "redux/contacts/selectors";


export const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector(selectItems);
  const dispatch = useDispatch();

  

 const handleChange = (event) => {
  const {name,value} = event.target
    switch (name) {
      case "name" :
        setName(value)
        break;
      case "number" :
        setNumber(value)
        break;
      default :
        return
      }
    };

 const handleSubmit = event => {
    event.preventDefault();
    setName("");
    setNumber("");

    if (contacts?.some(contact => contact.name.toLowerCase() === name.toLowerCase())
    ) {
      return alert(`${name} is already in contacts.`);
    }
    dispatch(addContact({name,number}))
  };

    return (
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          Name
          <input
          className={s.input}
            value={name}
            onChange={handleChange}
            type="text"
            name="name"
             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" 
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={s.label} >
          Number
          <input
            className={s.input}
            value={number}
            onChange={handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}" 
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button className={s.button} type="submit">
          Add contact
        </button>
      </form>
    );
}