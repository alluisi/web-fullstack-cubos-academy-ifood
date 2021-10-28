import { useContext } from 'react';
import ContactsContext from '../context/ContactsContext';

function useContacts() {
  return useContext(ContactsContext);
}

export default useContacts;