import React from 'react';
import '../styles/modal.css';
import Modal from "./Modal";
import useModal from '../hooks/useModal';

const ModalUpdateMatch = () => {
  const {isShowing, toggle} = useModal();
  console.log()
  return (
    <div>      
      <div  onClick={toggle}><i class="fas fa-edit"/></div>
      <Modal
        isShowing={isShowing}
        hide={toggle}
      />
    </div>
  );
};

export default ModalUpdateMatch;

