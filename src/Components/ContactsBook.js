import Form from './Form/Form';
import Contacts from './ContactsList/ContactsList';
import Filter from './Filter/Filter';

const styles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};
export default function ContactsBook() {
  return (
    <div style={styles}>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </div>
  );
}
