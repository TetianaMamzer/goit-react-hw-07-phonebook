import axios from "axios";

const contactssInstance = axios.create({
  baseURL: 'https://63ff58c8370fe830d9e4f95b.mockapi.io/api/contacts'
})

export const getContacts = async() => {
  const {data} = await contactssInstance.get('/');
  return data;
}

export const addContact = async(data) => {
  const {data: result} = await contactssInstance.post('/', data)
  return result;
}

export const deleteContact = async(id) => {
  const {data} = await contactssInstance.delete(`/${id}`);
  return data;
}