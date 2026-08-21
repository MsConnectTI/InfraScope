import Sidebar from './Sidebar.jsx'

function Dashboard() {
  return (
    <main className="dashboard">
      <Sidebar />

      <section className="dashboard__content">
        <header className="dashboard__header">
          <p className="eyebrow">NETWORK OVERVIEW</p>
          <h1>Dashboard</h1>
        </header>
      </section>
    </main>
  )
}

export default Dashboard
