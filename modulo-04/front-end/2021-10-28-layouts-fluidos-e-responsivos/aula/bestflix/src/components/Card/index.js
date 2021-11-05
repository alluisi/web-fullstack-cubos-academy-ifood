import './style.css';

function Card({ title, cover }) {
  return (
    <div
      className="container-card"
      style={{ backgroundImage: `url(${cover})` }}
    >
      <div className="container-title">
        <h1>{title}</h1>
      </div>
    </div>
  )
}

export default Card;