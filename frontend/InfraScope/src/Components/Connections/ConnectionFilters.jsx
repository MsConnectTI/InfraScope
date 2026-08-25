import './ConnectionFilters.css'

function ConnectionFilters({ connections, filters, onChange }) {
  const machines = [...new Set(connections.map(({ machine }) => machine))]
  const states = [...new Set(connections.map(({ state }) => state))]
  function updateFilter(event) {
    onChange({ ...filters, [event.target.name]: event.target.value })
  }

  return (
    <form className="connection-filters" onSubmit={(event) => event.preventDefault()}>
      <label>Machine<select name="machine" value={filters.machine} onChange={updateFilter}><option value="">Todas as máquinas</option>{machines.map((item) => <option key={item}>{item}</option>)}</select></label>
      <label>State<select name="state" value={filters.state} onChange={updateFilter}><option value="">Todos os estados</option>{states.map((item) => <option key={item}>{item}</option>)}</select></label>
      <label>Process Name<input name="process" value={filters.process} onChange={updateFilter} placeholder="Input Search" /></label>
      <label>Remote IP<input name="remoteIp" value={filters.remoteIp} onChange={updateFilter} placeholder="Input Search" /></label>
      <label>Time<select name="timeRange" value={filters.timeRange} onChange={updateFilter}><option value="all">Datetime Range</option><option value="1h">Última hora</option><option value="24h">Últimas 24 horas</option><option value="7d">Últimos 7 dias</option></select></label>
    </form>
  )
}

export default ConnectionFilters
