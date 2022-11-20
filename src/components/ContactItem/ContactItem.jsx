import {ContactItemP, ContactItemLi, ContactItemButton} from './ContactItem.styled'

export const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <ContactItemLi key={id}>
      <ContactItemP>
        {name}: {number}
      </ContactItemP>
      <ContactItemButton type="button" onClick={() => onDelete(id)}>
        Видалити
      </ContactItemButton>
    </ContactItemLi>
  );
};