import React from "react";
import styles from "./index.module.scss";
import { useContext } from "react";
import { ModalContext } from "../../App";

function Modal({ isOpen, onClose }) {
  const modal = useContext(ModalContext);
  return (
    <div className={isOpen ? styles.Modal : styles.Hidden} onClick={onClose}>
      <div className={styles.Content}>
        <h2>Questa è una modale!</h2>
        <h1>{modal.value}</h1>
      </div>
    </div>
  );
}

export default Modal;
