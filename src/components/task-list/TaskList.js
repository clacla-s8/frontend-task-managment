import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../../repositories/actions/taskActions";
import { Card } from "../card/card";

const TaskList = ({ openEditModal }) => {
  const dispatch = useDispatch();
  const { tasks, loading, error } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Task List</h2>
      <div className="card-grid">
        {tasks.map((task) => (
          <Card 
            id={task.id}
            name={task.name}
            description={task.description}
            status={task.status ? "Finalizada" : "Pendente"}
            image={task.image}></Card>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
