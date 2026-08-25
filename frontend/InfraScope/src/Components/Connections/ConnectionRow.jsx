import './ConnectionRow.css'

function ConnectionRow({ connection }) {
  return (
    <tr className="connection-row">
      <td>{connection.machine}</td>
      <td>{connection.user ?? '—'}</td>
      <td>{connection.localAddress}</td>
      <td>{connection.remoteAddress}</td>
      <td><span className={`connection-row__state connection-row__state--${connection.state.toLowerCase()}`}>{connection.state}</span></td>
      <td>{connection.pid ?? '—'}</td>
      <td><span className="connection-row__process">{connection.process}</span></td>
      <td className="connection-row__path" title={connection.executablePath}>{connection.executablePath ?? '—'}</td>
      <td>{connection.lastSynced ?? '—'}</td>
    </tr>
  )
}

export default ConnectionRow
