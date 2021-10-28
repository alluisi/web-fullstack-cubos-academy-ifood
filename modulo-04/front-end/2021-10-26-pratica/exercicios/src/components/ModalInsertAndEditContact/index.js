import { useEffect, useState } from 'react';
import CloseIcon from '../../assets/close-icon.svg';
import useContacts from '../../hooks/useContacts';
import useGlobal from '../../hooks/useGlobal';
import useRequests from '../../hooks/useRequests';
import './styles.css';

const defaultValues = { name: '', email: '', phone: '' };

function ModalInsertAndEditContact({ open, setOpen }) {

  const { currentContact } = useGlobal();
  const { loadContactsData } = useContacts();
  const requests = useRequests();

  const currentMethod = {
    post: requests.post,
    put: requests.put
  }

  const [formInputs, setFormInputs] = useState(defaultValues);

  useEffect(() => {
    if (!currentContact) {
      setFormInputs(defaultValues);
      return;
    }

    const { nome, email, telefone } = currentContact;
    setFormInputs({ name: nome, email, phone: telefone });

  }, [currentContact, open]);

  function handleChange(target) {
    setFormInputs({ ...formInputs, [target.name]: target.value })
  }

  async function insertContact(body) {
    return await currentMethod.post('contatos', body, true);
  }

  async function updateContact(body) {
    return await currentMethod.put('contatos', body, currentContact.id);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!formInputs.name || !formInputs.email || !formInputs.phone) {
      console.log("entrou")
      return;
    }

    const body = {
      nome: formInputs.name,
      email: formInputs.email,
      telefone: formInputs.phone
    }

    const result = currentContact ? await updateContact(body) : await insertContact(body);

    if (result) {
      await loadContactsData();
      setOpen(false);
    }

  }

  return (
    <div
      className="backdrop"
      style={{ display: open ? 'flex' : 'none' }}
    >
      <form onSubmit={handleSubmit} className="container-modal-insert">
        <img
          src={CloseIcon}
          alt="Close Icon"
          className="close-icon"
          onClick={() => setOpen(false)}
        />
        <h2>{currentContact ? 'Editar contato' : 'Novo Contato'}</h2>

        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={formInputs.name}
          onChange={(e) => handleChange(e.target)}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formInputs.email}
          onChange={(e) => handleChange(e.target)}
        />
        <input
          type="text"
          name="phone"
          placeholder="Telefone"
          value={formInputs.phone}
          onChange={(e) => handleChange(e.target)}
        />

        <div className="buttons-confirm">
          <button className="btn btn-positive btn-confirm-insert">ADICIONAR</button>
          <button onClick={() => setOpen(false)} className="btn btn-negative btn-cancel-insert">LIMPAR</button>
        </div>
      </form>
    </div>

  );
}

export default ModalInsertAndEditContact;
