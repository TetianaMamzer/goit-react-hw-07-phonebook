// import {  useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../index.css';

import Conteiner from './phoneBook/Conteiner';
import Form from './phoneBook/Form';
import PhoneBookList from './phoneBook/PhoneBookList';
import Filter from './phoneBook/Filter';

import { addContact, deleteContact } from 'redux/contacts/contatcs-slice'; 
import { getFilterContacts } from 'redux/contacts/contacts-selectors';

import { getFilter } from 'redux/filter/filter-selectors'; 
import { setFilter } from 'redux/filter/filter-slice'; 

import Notiflix from 'notiflix';

Notiflix.Notify.init({
  width: '320px',
  position: 'center-top',
  distance: '10px',
  opacity: '1',
  fontFamily: 'source-code-pro',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '14px',
  timeout: 4000,
  cssAnimationStyle: 'from-top',
  useIcon: false,
  cssAnimationDuration: 1000,

  failure: {
    background: 'transperent',
    textColor: '#FF001B',
    childClassName: 'notiflix-notify-failure',
    fontAwesomeClassName: 'fas fa-times-circle',
    fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
  },
});

export default function PhoneBook() {
  const contacts = useSelector(store => store.contacts);
  const visibleContacts = useSelector(getFilterContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onAddContact = ({name, number}) => {
        for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].name === name) {
        return Notiflix.Notify.failure(`${name} is olredy in contacts`);
      }
    }

    const action = addContact({name, number});
    dispatch(action);
  }

  const onDeleteContact = (id) => {
    const action = deleteContact(id);
    dispatch(action);
  }


  // useEffect(() => {
  //   localStorage.setItem('phoneBook', JSON.stringify(contacts));
  // }, [contacts]);

  return (
      <Conteiner title="Phonebook">
        <Form  onSubmit={onAddContact}/>
        {contacts.length > 0 && (
          <>
            <Filter
              value={filter}
              onChange={({ target }) => dispatch(setFilter(target.value))}
            />
            <PhoneBookList
              contacts={visibleContacts}
              type="button"
              text="delete"
              onClick={onDeleteContact}
            />
          </>
        )}
      </Conteiner>
  );
}
