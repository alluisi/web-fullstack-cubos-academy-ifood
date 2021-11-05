import { useEffect, useState } from 'react';
import { useLocalStorage } from 'react-use';

function useGlobalProvider() {
  const [openAddEditModal, setOpenAddEditModal] = useState(false);
  const [currentContact, setCurrentContact] = useState(false);
  const [token, setToken, removeToken] = useLocalStorage('token', '');

  useEffect(() => {
    if (!openAddEditModal) {
      setCurrentContact(false);
    }
  }, [openAddEditModal])

  return {
    openAddEditModal,
    setOpenAddEditModal,
    currentContact,
    setCurrentContact,
    token,
    setToken,
    removeToken
  }
}

export default useGlobalProvider;