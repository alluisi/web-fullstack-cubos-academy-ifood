import Header from '../../components/Header';
import ModalInsertAndEditContact from '../../components/ModalInsertAndEditContact';
import Table from '../../components/Table';
import useGlobal from '../../hooks/useGlobal';
import './styles.css';

function Home() {
  const { openAddEditModal, setOpenAddEditModal } = useGlobal();

  return (
    <div className="container-home">
      <Header />
      <div className="content-home">
        <button
          className="btn btn-positive btn-adicionar"
          onClick={() => setOpenAddEditModal(true)}>
          Adicionar
        </button>
        <Table />
      </div>
      <ModalInsertAndEditContact
        open={openAddEditModal}
        setOpen={setOpenAddEditModal}
      />
    </div>
  );
}

export default Home;
