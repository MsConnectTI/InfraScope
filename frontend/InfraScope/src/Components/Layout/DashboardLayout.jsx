import Sidebar from './Sidebar.jsx'
import ConnectionStatesCard from '../Overview/ConnectionStatesCard.jsx'
import ConnectionVolumeChart from '../Overview/ConnectionVolumeChart.jsx'
import ConnectionsTable from '../Connections/ConnectionsTable.jsx'
import MachineStatusCard from '../Overview/MachineStatusCard.jsx'
import TotalConnectionsCard from '../Overview/TotalConnectionsCard.jsx'
import '../Layout/DashboardLayout.css'

function Dashboard() {
  return (
    <main className="dashboard">
      <Sidebar />

      <section className="dashboard__content">
        <header className="dashboard__header">
          <p className="eyebrow">NETWORK OVERVIEW</p>
          <h1>Dashboard</h1>
        </header>

        <section className="dashboard__overview" aria-label="Resumo da rede">
          <TotalConnectionsCard />
          <ConnectionStatesCard />
          <MachineStatusCard />
          <ConnectionVolumeChart />
        </section>

        <section className="dashboard__connections" aria-label="Conexões">
          <ConnectionsTable />
        </section>
        <section className="dashboard__details" aria-label="Detalhes" />
      </section>
    </main>
  )
}

export default Dashboard
