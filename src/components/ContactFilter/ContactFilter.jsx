import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts/contactSlice';

export const ContactFilter = () => {
  const dispatch = useDispatch();

  return (
    <input
      type="text"
      name="filter"
      onChange={e => dispatch(changeFilter(e.currentTarget.value))}
    />
  );
};
