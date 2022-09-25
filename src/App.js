import { useSelector, useDispatch } from 'react-redux';
import { add, remove, filter } from 'redux/store';
import Form from './components/Form';
import Contacts from 'components/Contacts';
import Filter from 'components/Filter';
import { nanoid } from 'nanoid';

export const App = () => {
  const dispatch = useDispatch();
  const contactsItem = useSelector(state => state.items);

  const formSubmitHandler = data => {
    const newName = contactsItem.map(el => el.name.toLowerCase());
    if (newName.includes(data.name.toLowerCase())) {
      return alert(`${data.name} is already in contacts`);
    }
    const input = { id: nanoid(3), name: data.name, number: data.number };
    dispatch(add(input));
  };

  const onFilter = event => {
    dispatch(filter(event.currentTarget.value));
  };

  const onCheck = () => {
    if (filter) {
      return contactsItem.filter(el =>
        el.name.toLowerCase().includes(filter.toLowerCase())
      );
    } else {
      return contactsItem;
    }
  };

  const onDeleteContact = id => {
    dispatch(remove(id));
  };

  const filteredContacts = onCheck();

  return (
    <div
      style={{
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
        padding: 50,
      }}
    >
      <h1>Phonebook</h1>
      <Form onSubmit={formSubmitHandler} />
      <Filter filter={filter} onChange={onFilter} />
      <h2>Contacts</h2>
      <Contacts contacts={filteredContacts} deleteContact={onDeleteContact} />
    </div>
  );
};
