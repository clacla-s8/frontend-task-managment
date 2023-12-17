import "./taskform.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTask } from "../../repositories/actions/taskActions";

const TaskForm = ({ setIsModalOpen }) => {
  const dispatch = useDispatch();

  const [taskData, setTaskData] = useState({
    name: "",
    description: "",
    image: null,
    status: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", taskData.name);
    formData.append("description", taskData.description);
    if (taskData.image) {
        formData.append("image", taskData.image);
      }
    formData.append("status", taskData.status);

    dispatch(createTask(formData));

    setTaskData({
      name: "",
      description: "",
      image: null,
      status: false,
    });

    setIsModalOpen(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setTaskData({ ...taskData, image: file });
  };


  return (
    <div className="container">
      <h2>Cadastre uma nova tarefa</h2>
      <form onSubmit={handleSubmit} className="form-group">
        <label>Task Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={taskData.name}
          onChange={handleChange}
          required
        />

        <label>Task Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={taskData.description}
          onChange={handleChange}
          required
        />

        <label>Task Image URL:</label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={handleImageChange}
        />

        <label>Task Status:</label>
        <select
          id="status"
          name="status"
          value={taskData.status}
          onChange={handleChange}>
          <option value="false">Pendente</option>
          <option value="true">Finalizada</option>
        </select>

        <input type="submit" value="Salvar Tarefa" />
      </form>
    </div>
  );
};

export default TaskForm;
