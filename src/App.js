import React, { useState } from "react";
import TaskList from "./components/task-list/TaskList";
import TaskForm from "./components/task-form/TaskForm";
import Modal from "./components/modal/modal";
import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="App">
      <div className="container">
        <TaskList openModal={toggleModal} />
        <button className="btn btn-1" onClick={() => setIsModalOpen(true)}>
          Nova tarefa
        </button>

        <Modal visible={isModalOpen} setVisible={setIsModalOpen}>
          <TaskForm setIsModalOpen={setIsModalOpen} />
        </Modal>
      </div>
    </div>
  );
}

export default App;
