import { useMemo, useState } from 'react'
import ConnectionFilters from './ConnectionFilters.jsx'
import ConnectionPagination from './ConnectionPagination.jsx'
import ConnectionRow from './ConnectionRow.jsx'
import './ConnectionsTable.css'

const mockConnections = [
  { id: 'con-01', machine: 'PC-JEFF', user: 'jeff', process: 'chrome.exe', localAddress: '172.16.78.201:52044', remoteAddress: '35.190.80.1:443', state: 'ESTABLISHED', pid: 1452, executablePath: 'C:\\Program Files\\Google\\Chrome.exe', timestamp: '2026-08-24T13:42:00', lastSynced: '2026-08-24 13:42' },
  { id: 'con-02', machine: 'PC-JEFF', user: 'jeff', process: 'Discord.exe', localAddress: '172.16.78.201:52108', remoteAddress: '162.159.136.234:443', state: 'ESTABLISHED', pid: 3680, executablePath: 'C:\\Users\\jeff\\AppData\\Discord.exe', timestamp: '2026-08-24T13:31:00', lastSynced: '2026-08-24 13:31' },
  { id: 'con-03', machine: 'SERVER-01', user: 'svc_admin', process: 'mongod.exe', localAddress: '10.0.0.12:27017', remoteAddress: '10.0.0.25:49812', state: 'LISTENING', pid: 1016, executablePath: 'C:\\MongoDB\\bin\\mongod.exe', timestamp: '2026-08-24T12:58:00', lastSynced: '2026-08-24 12:58' },
  { id: 'con-04', machine: 'PC-JEFF', user: 'jeff', process: 'Code.exe', localAddress: '172.16.78.201:52090', remoteAddress: '20.42.73.25:443', state: 'TIME_WAIT', pid: 4088, executablePath: 'C:\\Users\\jeff\\AppData\\Code.exe', timestamp: '2026-08-24T11:44:00', lastSynced: '2026-08-24 11:44' },
  { id: 'con-05', machine: 'LAPTOP-DEV', user: 'developer', process: 'node.exe', localAddress: '192.168.1.18:3000', remoteAddress: '104.18.32.47:443', state: 'ESTABLISHED', pid: 2684, executablePath: 'C:\\Program Files\\nodejs\\node.exe', timestamp: '2026-08-23T17:12:00', lastSynced: '2026-08-23 17:12' },
  { id: 'con-06', machine: 'SERVER-01', user: 'System', process: 'nginx.exe', localAddress: '10.0.0.12:443', remoteAddress: '179.42.16.90:54214', state: 'CLOSE_WAIT', pid: 18, executablePath: 'C:\\nginx\\nginx.exe', timestamp: '2026-08-22T09:27:00', lastSynced: '2026-08-22 09:27' },
]

const initialFilters = { machine: '', state: '', process: '', remoteIp: '', timeRange: 'all' }

function ConnectionsTable({ connections = mockConnections }) {
  const [filters, setFilters] = useState(initialFilters)
  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const filteredConnections = useMemo(() => {
    const now = Date.now()
    const ranges = { '1h': 60 * 60_000, '24h': 24 * 60 * 60_000, '7d': 7 * 24 * 60 * 60_000 }

    return connections.filter((connection) => {
      const matchesMachine = !filters.machine || connection.machine === filters.machine
      const matchesState = !filters.state || connection.state === filters.state
      const matchesProcess = !filters.process || connection.process.toLowerCase().includes(filters.process.toLowerCase())
      const matchesIp = !filters.remoteIp || connection.remoteAddress.toLowerCase().includes(filters.remoteIp.toLowerCase())
      const matchesTime = filters.timeRange === 'all' || now - new Date(connection.timestamp).getTime() <= ranges[filters.timeRange]

      return matchesMachine && matchesState && matchesProcess && matchesIp && matchesTime
    })
  }, [connections, filters])

  const totalPages = Math.max(1, Math.ceil(filteredConnections.length / rowsPerPage))
  const safeCurrentPage = Math.min(currentPage, totalPages)
  const currentConnections = filteredConnections.slice((safeCurrentPage - 1) * rowsPerPage, safeCurrentPage * rowsPerPage)

  function handleFiltersChange(nextFilters) {
    setFilters(nextFilters)
    setCurrentPage(1)
  }

  function handleRowsPerPageChange(nextRowsPerPage) {
    setRowsPerPage(nextRowsPerPage)
    setCurrentPage(1)
  }

  return (
    <div className="connections-table">
      <div className="connections-table__heading">
        <div>
          <p className="eyebrow">LIVE NETWORK ACTIVITY</p>
          <h2>Connections Table</h2>
        </div>
        <div className="connections-table__meta">
          <span className="connections-table__count">{filteredConnections.length} registros</span>
          <span className="connections-table__live"><i /> Atualizado agora</span>
        </div>
      </div>

      <ConnectionFilters connections={connections} filters={filters} onChange={handleFiltersChange} />

      <div className="connections-table__scroll">
        <table>
          <thead>
            <tr>
              <th>Hostname</th><th>User</th><th>Local IP:Port</th><th>Remote IP:Port</th><th>State</th><th>PID</th><th>Process</th><th>Executable Path</th><th>Last Synced</th>
            </tr>
          </thead>
          <tbody>
            {currentConnections.map((connection) => <ConnectionRow key={connection.id} connection={connection} />)}
            {currentConnections.length === 0 && <tr><td className="connections-table__empty" colSpan="9">Nenhuma conexão encontrada.</td></tr>}
          </tbody>
        </table>
      </div>

      <ConnectionPagination
        currentPage={safeCurrentPage}
        rowsPerPage={rowsPerPage}
        totalItems={filteredConnections.length}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        onRowsPerPageChange={handleRowsPerPageChange}
      />
    </div>
  )
}

export default ConnectionsTable
