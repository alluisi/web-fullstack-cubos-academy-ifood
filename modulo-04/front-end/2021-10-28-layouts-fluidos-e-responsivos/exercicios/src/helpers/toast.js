import { toast } from 'react-toastify';

function messageError(message) {
  toast.error(message, {
    position: "top-right",
    autoClose: 5000,
    theme: 'colored',
    closeOnClick: true,
    pauseOnHover: false
  });
}

function messageSuccess(message) {
  toast.success(message, {
    position: "top-right",
    autoClose: 5000,
    theme: 'colored',
    closeOnClick: true,
    pauseOnHover: false
  });
}
// eslint-disable-next-line
export default { messageError, messageSuccess };