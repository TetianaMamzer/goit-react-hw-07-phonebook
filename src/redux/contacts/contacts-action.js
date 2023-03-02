import { createAction } from "@reduxjs/toolkit";

export const fetchContactsLoading = createAction('contacts/fetch/loading');
export const fetchContactsSuccess= createAction('contacts/fetch/success');
export const fetchContactsError = createAction('contacts/fetch/error');

export const fetchAddContactsLoading = createAction('contacts/add/loading');
export const fetchAddContactsSuccess= createAction('contacts/add/success');
export const fetchAddContactsError = createAction('contacts/add/error');

export const fetchDeleteContactsLoading = createAction('contacts/delete/loading');
export const fetchDeleteContactsSuccess= createAction('contacts/delete/success');
export const fetchDeleteContactsError = createAction('contacts/delete/error');