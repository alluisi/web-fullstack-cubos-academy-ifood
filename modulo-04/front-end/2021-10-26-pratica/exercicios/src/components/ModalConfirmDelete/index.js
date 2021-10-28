import CloseIcon from '../../assets/close-icon.svg';
import useRequest from '../../hooks/useRequests';
import useContacts from '../../hooks/useContacts';
import './styles.css';

function ModalConfirmDelete({ open, setOpen, itemToDelete }) {
  const { loadContactsData } = useContacts();
  const requests = useRequest();

  async function handleDeleteItem() {
    const { id } = itemToDelete;
    const result = await requests.del('contatos', id);

    if (result) {
      await loadContactsData();
    }
    setOpen(false);
  }

  return (
    <div
      className="backdrop"
      style={{ display: open ? 'flex' : 'none' }}
    >
      <div className="container-modal-delete">
        <img
          src={CloseIcon}
          alt="Close Icon"
          className="close-icon"
          onClick={() => setOpen(false)}
        />

        <h2>Confirma a exclusão?</h2>
        <span>Deseja excluir o contato, {itemToDelete.name}?</span>
        <div className="buttons-confirm">
          <button
            className="btn btn-positive btn-confirm-delete"
            onClick={() => handleDeleteItem()}
          >
            EXCLUIR
          </button>
          <button
            className="btn btn-negative btn-cancel-delete"
            onClick={() => setOpen(false)}
          >
            CANCELAR
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalConfirmDelete;