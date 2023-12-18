import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, finishTask } from "../../repositories/actions/taskActions";
import "./card.css";

export function Card({ id, name, description, image, status }) {
  const imageUrl = image ? `data:image/jpeg;base64,${image}` : "";
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(id));
  };

  const handleFinish = () => {
    dispatch(finishTask(id));
  };
  return (
    <div className="card">
      <img src={imageUrl} alt={`${name} task`} />

      <h3>{name}</h3>
      <p>
        <b>Descrição: </b>
        {description}
      </p>
      <span>
        <b>Status: </b> {status}
      </span>

      <div className="buttons">
        {status === "Pendente" && (
          <button className="button-edit" onClick={handleFinish}>
            Finalizar
          </button>
        )}
        <button className="button-delete" onClick={handleDelete}>
          Excluir
        </button>
      </div>
    </div>
  );
}
