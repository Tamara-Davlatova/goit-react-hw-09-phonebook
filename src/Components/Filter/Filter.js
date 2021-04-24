import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/contacts/contacts-actions';
import { getFilterValue } from '../../redux/contacts/contacts-selectors';

function Filter() {
  const value = useSelector(getFilterValue);
  const dispatch = useDispatch();
  const onChange = e => dispatch(filterContacts(e.target.value));

  return (
    <label>
      Find contacts by Name
      <input
        type="text"
        value={value}
        onChange={onChange}
        style={{ marginLeft: '20px' }}
      />
    </label>
  );
}

export default Filter;
