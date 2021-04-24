import { combineReducers } from 'redux';
// import * as types from './contacts-types';
import { createReducer } from '@reduxjs/toolkit';
// import * as actions from './contacts-actions';
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
  filterContacts,
} from './contacts-actions';

// const initialContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

const items = createReducer([], {
  [fetchContactsSucsess]: (_, { payload }) => payload,
  [addContactsSucsess]: (state, { payload }) => [payload, ...state],
  [deleteContactsSucsess]: (state, { payload }) =>
    state.filter(({ id }) => payload !== id),
});

const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSucsess]: () => false,
  [fetchContactsError]: () => false,
  [addContactsRequest]: () => true,
  [addContactsSucsess]: () => false,
  [addContactsError]: () => false,
  [deleteContactsRequest]: () => true,
  [deleteContactsSucsess]: () => false,
  [deleteContactsError]: () => false,
});

const filter = createReducer('', {
  [filterContacts]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
  loading,
});
