import { useReducer, useState, createContext } from "react";
import { Context } from "./store";
import { initialState } from "./store/state";
import { mainReducer } from "./store/reducers";
import Hero from "./components/hero";
import TasksList from "./components/tasksList";
import styles from "./App.module.scss";
import Modal from "./components/modal";

export const ModalContext = createContext({
  value: "helloooo",
});

export const initModalState = {
  value: "hello",
};
function App() {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // const { isModalOpen } = useStore();

  // const openModal = () => dispatch({ type: "TOGGLE_MODAL" });
  // const closeModal = () => dispatch({ type: "TOGGLE_MODAL" });

  return (
    <div className={styles.App}>
      <Context.Provider value={{ state, dispatch }}>
        <ModalContext.Provider value={{ initModalState }}>
          <TasksList />
          <button className={styles.addTodo} onClick={openModal}>
            {"+"}
          </button>
          {/* in questa maniera vado a gestire l'apertura e chiusura della modale senza lo stato globale,
andando a passsare tutte le prop al componente  */}
          {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} />}
        </ModalContext.Provider>
        <Hero />
      </Context.Provider>
    </div>
  );
}

export default App;
