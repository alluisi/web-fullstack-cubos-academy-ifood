import { useEffect, useState } from 'react';
import useRequests from '../hooks/useRequests';
import useGlobal from './useGlobal';

function useContactsProvider() {
  const requests = useRequests();
  const [allContacts, setAllContacts] = useState([]);
  const { token } = useGlobal();

  useEffect(() => {
    if (token) {
      loadContactsData();
    }

    // eslint-disable-next-line
  }, []);

  async function loadContactsData() {
    const result = await requests.get('contatos');
    setAllContacts(result);
  }

  return {
    allContacts,
    loadContactsData
  }
}

export default useContactsProvider;