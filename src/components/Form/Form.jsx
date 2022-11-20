import { useDispatch, useSelector } from 'react-redux';

import { addContact } from 'redux/contactSlice';
import { TitleForm, TitleLabel, TitleInput, TitleButton } from './Form.styled'
import { nanoid } from 'nanoid';
const { useState } = require("react");



export function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  
 const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

   const handleInputChange = evt => {
    const { value } = evt.currentTarget;

    evt.currentTarget.name === 'name' ? setName(value) : setNumber(value);
  };


const handleSubmit = evt => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    evt.preventDefault();

    const findName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (findName) {
      return alert(`${name} is already in contacts.`);
    }
    const findNumber = contacts.find(contact => contact.number === number);
    if (findNumber) {
      return alert(`This phone number is already in contacts.`);
    }

    dispatch(addContact(contact));
    setName('');
    setNumber('');
  };

  return (
    <TitleForm onSubmit={handleSubmit}>
      <TitleLabel>
        Name
        <TitleInput
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required />
      </TitleLabel>
      <TitleLabel>
        Number
      <TitleInput
          type="tel"
          name="number"
          value={number}
          onChange={handleInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required/>
      </TitleLabel>
      <TitleButton type='submit'>Add contact</TitleButton>
    </TitleForm>
        )
}

