
import {ContactListUl} from './ContactList.styled'
import {ContactItem} from '../ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactSlice';



export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filterContact = useSelector(state => state.contacts.filter);

  const handleDelete = id => dispatch(deleteContact(id));

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterContact.toLowerCase())
  );

  

  return (
    <ContactListUl>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem
          id={id}
          key={id}
          name={name}
          number={number}
          onDelete={handleDelete}
        />
      ))}
    </ContactListUl>
  );
};


