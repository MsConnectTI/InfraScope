import './ConnectionFilters.css'

function ConnectionFilters({ connections, filters, onChange }) {
  const machines = [...new Set(connections.map(({ machine }) => machine))]
  const states = [...new Set(connections.map(({ state }) => state))]
  function updateFilter(event) {
    onChange({ ...filters, [event.target.name]: event.target.value })
  }

  function stateModifier(state) {
    if (state.includes('ESTABLISHED')) return 'established'
    if (state.includes('LISTEN')) return 'listen'
    if (state.includes('CLOSE') || state.includes('TIME')) return 'waiting'
    return 'neutral'
  }

  return (
    <form className="connection-filters" onSubmit={(event) => event.preventDefault()}>
      <label className="connection-filters__field">Machine<select name="machine" value={filters.machine} onChange={updateFilter}><option value="">Todas as máquinas</option>{machines.map((item) => <option key={item}>{item}</option>)}</select></label>
      <fieldset className="connection-filters__state">
        <legend>State</legend>
        <div className="connection-filters__state-options">
          <button className={`connection-filters__state-button ${filters.state === '' ? 'is-selected' : ''}`} type="button" onClick={() => onChange({ ...filters, state: '' })}>Todos</button>
          {states.map((state) => <button className={`connection-filters__state-button connection-filters__state-button--${stateModifier(state)} ${filters.state === state ? 'is-selected' : ''}`} type="button" key={state} onClick={() => onChange({ ...filters, state })}>{state === 'LISTENING' ? 'LISTEN' : state}</button>)}
        </div>
      </fieldset>
      <label className="connection-filters__field">Process Name<input name="process" value={filters.process} onChange={updateFilter} placeholder="Input Search" /></label>
      <label className="connection-filters__field">Remote IP<input name="remoteIp" value={filters.remoteIp} onChange={updateFilter} placeholder="Input Search" /></label>
      <label className="connection-filters__field">Time<select name="timeRange" value={filters.timeRange} onChange={updateFilter}><option value="all">Datetime Range</option><option value="1h">Última hora</option><option value="24h">Últimas 24 horas</option><option value="7d">Últimos 7 dias</option></select></label>
    </form>
  )
}

export default ConnectionFilters
