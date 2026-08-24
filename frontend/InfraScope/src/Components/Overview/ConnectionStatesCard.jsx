
import './ConnectionStatesCard.css'

function ConnectionStatesCard() {
  return (
    <article className="overview-card connection-states-card">
      <p className="overview-card__label">Estados</p>
      <strong className="overview-card__value">—</strong>
      <span className="overview-card__hint">Aguardando dados</span>
    </article>
  )
}

export default ConnectionStatesCard