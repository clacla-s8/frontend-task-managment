import "./card.css";

export function Card({ name, description, image, status }) {
  const imageUrl = image ? `data:image/jpeg;base64,${image}` : '';
  return (
   

    <div className="card">    
      <img src={imageUrl} alt={`${name} task`} />

      <h2>{name}</h2>
      <p>
        <b>Descrição: </b>
        {description}
      </p>
      <p>
        <b>Status: </b>
        {status}
      </p>
    </div>
    
  );
}
