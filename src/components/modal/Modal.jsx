// import React from "react";
// import styles from "./index.module.scss";
// import { useContext } from "react";
// import { ModalContext } from "../../App";

// function Modal({ isOpen, onClose }) {
//   const modal = useContext(ModalContext);
//   return (
//     <div className={isOpen ? styles.Modal : styles.Hidden} onClick={onClose}>
//       <div className={styles.Content}>
//         <h2>Questa è una modale!</h2>
//         <h1>{modal.value}</h1>
//       </div>
//     </div>
//   );
// }

// export default Modal;
import { useContext } from "react";
import { Context } from "../../store";
import styles from "./index.module.scss";

const Modal = () => {
  const { state, dispatch } = useContext(Context);

  const onHandleModalCloseModal = () =>
    dispatch({ type: "SET_MODAL_VISIBILITY", payload: false });

  const onHandleFormSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_NEW_TASK", payload: state.tempTodo });
    console.log(state.tempTodo);
    dispatch({ type: "SET_MODAL_VISIBILITY", payload: false });
  };

  const onChangeInputUsername = (e) =>
    dispatch({ type: "SET_TEMP_TODO_USERNAME", payload: e.target.value });

  const onChangeInputTodo = (e) =>
    dispatch({ type: "SET_TEMP_TODO_TODO", payload: e.target.value });

  const onChangeInputImage = (e) => {
    dispatch({ type: "SET_TEMP_TODO_IMAGE", payload: e.target.value });
    dispatch({ type: "SET_TEMP_TODO_ID" });
  };

  return (
    <div className={styles.Modal}>
      <div onClick={onHandleModalCloseModal} className={styles.overlay}></div>
      <form onSubmit={onHandleFormSubmit} className={styles.content}>
        <h3>Add a new Todo!</h3>
        <input
          value={state.tempTodo.username}
          onChange={onChangeInputUsername}
          type="text"
          placeholder="Username ..."
          required
        />
        <input
          value={state.tempTodo.todo}
          onChange={onChangeInputTodo}
          type="text"
          placeholder="Content ..."
          required
        />
        <input
          value={state.tempTodo.image}
          onChange={onChangeInputImage}
          type="text"
          placeholder="Image Url..."
          required
        />
        <input className={styles.subBtn} type="submit" value="Add Todo" />
      </form>
    </div>
  );
};

export default Modal;
