import React from 'react';
import Octicon, { X } from '@githubprimer/octicons-react';
import './Modal.css';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'Modal display-block' : 'Modal display-none';

  return (
    <div className={showHideClassName}>
      <section className="Modal-Main">
        <div className="Modal-Content">
          {children}
          <button className="Modal-Button Modal-Close" onClick={handleClose}>
            <Octicon size="medium" icon={X} ariaLabel="Close modal" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Modal;
