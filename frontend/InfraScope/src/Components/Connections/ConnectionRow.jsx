import './ConnectionRow.css'

function ConnectionRow({ connection }) {
  return (
    <tr className="connection-row">
      <td className="connection-row__hostname"><span>{connection.machine}</span></td>
      <td><span className="connection-row__user">{connection.user ?? '—'}</span></td>
      <td><span className="connection-row__endpoint">{connection.localAddress}</span></td>
      <td><span className="connection-row__endpoint connection-row__endpoint--remote">{connection.remoteAddress}</span></td>
      <td><span className={`connection-row__state connection-row__state--${connection.state.toLowerCase()}`}>{connection.state}</span></td>
      <td><span className="connection-row__pid">{connection.pid ?? '—'}</span></td>
      <td><span className="connection-row__process">{connection.process}</span></td>
      <td className="connection-row__path" title={connection.executablePath}><span>{connection.executablePath ?? '—'}</span></td>
      <td><time className="connection-row__synced">{connection.lastSynced ?? '—'}</time></td>
    </tr>
  )
}

export default ConnectionRow