import { getContacts, addContact, deleteContact } from 'services/posts-api';
import * as actions  from './contacts-action';

export const fetchContacts = () => {
  const contacts = async dispatch => {
    try {
      dispatch(actions.fetchContactsLoading());
      const data = await getContacts();

      dispatch(actions.fetchContactsSuccess(data))

    } catch ({response}) {
      dispatch(actions.fetchContactsError(response.data.message))
    }
  };

  return contacts;
};

export const fetchAddContact = (data) => {
  const contacts = async dispatch => {
    try {
      dispatch(actions.fetchAddContactsLoading());
      const result = await addContact(data);
      dispatch(actions.fetchAddContactsSuccess(result))

    } catch ({response}) {
      dispatch(actions.fetchAddContactsError(response.data.message))
    }
  };

  return contacts;
  }

  export const fetchDeleteContact = (id) => {
    const contacts = async dispatch => {
      try {
        dispatch(actions.fetchDeleteContactsLoading());
        await deleteContact(id);
        dispatch(actions.fetchDeleteContactsSuccess(id))
  
      } catch ({response}) {
        dispatch(actions.fetchDeleteContactsError(response.data.message))
      }
    };
  
    return contacts;
    }
  

