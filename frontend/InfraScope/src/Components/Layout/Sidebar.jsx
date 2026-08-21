const machines = [
  { name: 'Production Server', status: 'online' },
  { name: 'Office Router', status: 'online' },
  { name: 'Backup Node', status: 'offline' },
]

function Sidebar() {
  return (
    <aside className="sidebar" aria-label="Navegação principal">
      <a className="sidebar__logo" href="#dashboard" aria-label="Network Dashboard">
        <span className="sidebar__logo-mark" aria-hidden="true">N</span>
        <span>netwatch</span>
      </a>

      <nav className="sidebar__nav">
        <div className="sidebar__section">
          <p className="sidebar__label">Monitored Machines</p>
          <button className="sidebar__add-machine" type="button">
            <span aria-hidden="true">+</span> Add Machine
          </button>
        </div>

        <div className="sidebar__machines" aria-label="Máquinas monitoradas">
          {machines.map((machine) => (
            <button className="machine" type="button" key={machine.name}>
              <span className={`machine__status machine__status--${machine.status}`} />
              <span>{machine.name}</span>
            </button>
          ))}
        </div>
      </nav>

      <div className="sidebar__footer">
        <button className="sidebar__link" type="button">Settings</button>
        <button className="sidebar__link" type="button">← Collapse</button>
      </div>
    </aside>
  )
}

export default Sidebar
