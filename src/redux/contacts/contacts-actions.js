import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction('todos/fetchContactsRequest');
export const fetchContactsSucsess = createAction('todos/fetchContactsSucsess');
export const fetchContactsError = createAction('todos/fetchContactsError');

export const addContactsRequest = createAction('todos/addContactsRequest');
export const addContactsSucsess = createAction('todos/addContactsSucsess');
export const addContactsError = createAction('todos/addContactsError');

export const deleteContactsRequest = createAction(
  'todos/deleteContactsRequest',
);
export const deleteContactsSucsess = createAction(
  'todos/deleteContactsSucsess',
);
export const deleteContactsError = createAction('todos/deleteContactsError');

export const filterContacts = createAction('contacts/changeFilter');
