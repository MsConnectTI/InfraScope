import './ConnectionPagination.css'

function ConnectionPagination({ currentPage, rowsPerPage, totalItems, totalPages, onPageChange, onRowsPerPageChange }) {
  const firstItem = totalItems === 0 ? 0 : (currentPage - 1) * rowsPerPage + 1
  const lastItem = Math.min(currentPage * rowsPerPage, totalItems)

  return (
    <footer className="connection-pagination">
      <label className="connection-pagination__per-page">Linhas por página<select value={rowsPerPage} onChange={(event) => onRowsPerPageChange(Number(event.target.value))}><option value="5">5</option><option value="10">10</option><option value="25">25</option></select></label>
      <span className="connection-pagination__summary">{firstItem}–{lastItem} de {totalItems}</span>
      <div className="connection-pagination__controls">
        <button type="button" onClick={() => onPageChange(1)} disabled={currentPage === 1} aria-label="Primeira página">«</button>
        <button type="button" onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} aria-label="Página anterior">‹</button>
        <span>Página {currentPage} de {totalPages}</span>
        <button type="button" onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} aria-label="Próxima página">›</button>
        <button type="button" onClick={() => onPageChange(totalPages)} disabled={currentPage === totalPages} aria-label="Última página">»</button>
      </div>
    </footer>
  )
}

export default ConnectionPagination