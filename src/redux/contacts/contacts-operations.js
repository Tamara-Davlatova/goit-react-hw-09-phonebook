import {
  fetchContactsRequest,
  fetchContactsSucsess,
  fetchContactsError,
  addContactsRequest,
  addContactsSucsess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSucsess,
  deleteContactsError,
} from './contacts-actions';

import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:4041';

export const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactsSucsess(data)))
    .catch(error => dispatch(fetchContactsError(error)));
};

export const addContact = data => dispatch => {
  const contact = {
    name: data.name,
    number: data.number,
  };
  dispatch(addContactsRequest());
  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactsSucsess(data)))
    .catch(error => dispatch(addContactsError(error)));
};

export const deleteContact = contactId => dispatch => {
  dispatch(deleteContactsRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactsSucsess(contactId)))
    .catch(error => dispatch(deleteContactsError(error)));
};
