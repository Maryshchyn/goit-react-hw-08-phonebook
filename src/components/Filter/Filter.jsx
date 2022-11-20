import {FilterLabel, FilterInput} from './Filter.styled'
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from '../../redux/contactSlice';


export const Filter = () => {
  const dispatch = useDispatch();
  const filterName = useSelector(state => state.contacts.filter);

  const handleInput = evt => {
    dispatch(filterContacts(evt.currentTarget.value));
  };

  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        type="text"
        
        value={filterName}
        onChange={handleInput}
      />
    </FilterLabel>
  );
};





