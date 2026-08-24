
import './ConnectionVolumeChart.css'

function ConnectionVolumeChart() {
  return (
    <article className="overview-card connection-volume-chart">
      <div>
        <p className="overview-card__label">Volume de conexões</p>
        <span className="overview-card__hint">Gráfico em breve</span>
      </div>
      <div className="connection-volume-chart__placeholder" aria-label="Área reservada para gráfico de volume de conexões">
        <span /><span /><span /><span /><span /><span /><span />
      </div>
    </article>
  )
}

export default ConnectionVolumeChart