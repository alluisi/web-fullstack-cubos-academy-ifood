import { createContext } from 'react';
import useContactsProvider from '../hooks/useContactsProvider';

const ContactsContext = createContext();

export function ContactsProvider(props) {
  const contactsProvider = useContactsProvider();

  return (
    <ContactsContext.Provider value={contactsProvider}>
      {props.children}
    </ContactsContext.Provider>
  )
}

export default ContactsContext;