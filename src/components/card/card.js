import "./card.css";

export function Card({ name, description, image, status }) {
  const imageUrl = image ? `data:image/jpeg;base64,${image}` : "";
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

      <div class="buttons">
        <button class="button-edit">Editar</button>
        <button class="button-delete">Excluir</button>
      </div>
    </div>
  );
}
