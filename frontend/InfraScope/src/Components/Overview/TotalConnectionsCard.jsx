
import './TotalConnectionsCard.css'

function TotalConnectionsCard() {
  return (
    <article className="overview-card total-connections-card">
      <p className="overview-card__label">Total de conexões</p>
      <strong className="overview-card__value">—</strong>
      <span className="overview-card__hint">Aguardando dados</span>
    </article>
  )
}

export default TotalConnectionsCard