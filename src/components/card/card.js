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
      <img
        src={imageUrl}
        alt={`${name} task`}
        id="full"
        onClick={() => toggleFullScreen("full")}
      />

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

  function toggleFullScreen(id) {
    var div = document.getElementById(id);

    if (
      (document.fullScreenElement && document.fullScreenElement !== null) ||
      (!document.mozFullScreen && !document.webkitIsFullScreen)
    ) {
      if (div.requestFullScreen) {
        div.requestFullScreen();
      } else if (div.mozRequestFullScreen) {
        div.mozRequestFullScreen();
      } else if (div.webkitRequestFullScreen) {
        div.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }
}
