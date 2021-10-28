import { useEffect, useState } from 'react';
import DeleteIcon from '../../assets/delete-icon.svg';
import EditIcon from '../../assets/edit-icon.svg';
import useContacts from '../../hooks/useContacts';
import useGlobal from '../../hooks/useGlobal';
import ModalConfirmDelete from '../ModalConfirmDelete';
import './styles.css';

function Table() {
  const { allContacts } = useContacts();

  const [open, setOpen] = useState(false);
  const { setOpenAddEditModal, setCurrentContact, currentContact } = useGlobal();

  useEffect(() => {
    if (!open) {
      setCurrentContact(false);
    }
  }, [open, setCurrentContact]);

  function handleEditContact(contact) {
    setCurrentContact(contact)
    setOpenAddEditModal(true);
  }

  function handleDeleteContact(contact) {
    setCurrentContact(contact)
    setOpen(true);
  }

  return (
    <div className="container-table">
      <div className="header-table">
        <strong>Nome</strong>
        <strong>Email</strong>
        <strong>Telefone</strong>
      </div>
      <div className="body-table">
        {allContacts.map(item => (
          <div className="line-table" key={item.id}>
            <span>{item.nome}</span>
            <span>{item.email}</span>
            <span>{item.telefone}</span>
            <div className="action-buttons">
              <img
                src={EditIcon}
                alt="Edit Icon"
                onClick={() => handleEditContact(item)}
              />
              <img
                src={DeleteIcon}
                alt="Delete Icon"
                onClick={() => handleDeleteContact(item)}
              />
            </div>
          </div>
        ))
        }
      </div >
      <ModalConfirmDelete
        open={open}
        setOpen={setOpen}
        itemToDelete={currentContact}
      />
    </div >
  );
}

export default Table;
