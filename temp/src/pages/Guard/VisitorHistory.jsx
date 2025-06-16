import '../styles/GuardDashboard.css';

export default function VisitorHistory() {
  return (
    <div className="guard-dashboard">
      <header className="dashboard-header">
        <h1>Visitor History</h1>
      </header>

      <div className="dashboard-options" style={{ overflowX: 'auto', width: '100%' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: '8px', boxShadow: '0 3px 8px rgba(0,0,0,0.1)' }}>
          <thead style={{ backgroundColor: '#004080', color: '#fff' }}>
            <tr>
              <th style={{ padding: '12px' }}>Name</th>
              <th style={{ padding: '12px' }}>Contact</th>
              <th style={{ padding: '12px' }}>Purpose</th>
              <th style={{ padding: '12px' }}>Building</th>
              <th style={{ padding: '12px' }}>Vehicle No.</th>
              <th style={{ padding: '12px' }}>ID Proof</th>
              <th style={{ padding: '12px' }}>Entry Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="7" style={{ textAlign: 'center', padding: '16px' }}>No records yet</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
