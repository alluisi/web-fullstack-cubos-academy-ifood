import React from 'react'

import { ReactComponent as StoreSvg } from '../../assets/store.svg';
import { ReactComponent as StoreSelectedSvg } from '../../assets/store-selected.svg';
import { ReactComponent as UserSvg } from '../../assets/user.svg';
import { ReactComponent as UserSelectedSvg } from '../../assets/user-selected.svg';
import { ReactComponent as CloseSvg } from '../../assets/close.svg';

import './styles.css';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
function Sidebar() {
  const location = useLocation();
  const history = useHistory();
  const { deslogar } = useAuth();

  function handleLogout() {
    deslogar();
    history.push('/');
  }

  return (
    <div className="sidebar-container">
      <div onClick={() => history.replace('/produtos')}>
        {location.pathname.includes('produtos') ? <StoreSelectedSvg/> : <StoreSvg/> }
      </div>
      <div onClick={() => history.replace('/perfil')}>
        {location.pathname.includes('perfil') ? <UserSelectedSvg/> : <UserSvg/> }
      </div>
      <CloseSvg className="close" fill="#000" fillOpacity="0.54" onClick={handleLogout} />
    </div>
  )
}

export default Sidebar;
