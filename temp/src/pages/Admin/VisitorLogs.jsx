import React, { useState } from 'react';
import { mockVisitors } from '../../mockData'; // Adjusted path
import '../../styles/VisitorLogs.css';

const VisitorLogs = () => {
  const [visitors, setVisitors] = useState(mockVisitors);
  const [search, setSearch] = useState('');

  const handleStatusChange = (id, newStatus) => {
    setVisitors(
      visitors.map(visitor =>
        visitor.id === id ? { ...visitor, status: newStatus } : visitor
      )
    );
  };

  const filteredVisitors = visitors.filter(
    visitor =>
      visitor.name.toLowerCase().includes(search.toLowerCase()) ||
      visitor.status.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="visitor-logs">
      <h2>Visitor Logs</h2>
      <input
        type="text"
        placeholder="Search by name or status..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Purpose</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredVisitors.map(visitor => (
            <tr key={visitor.id}>
              <td>{visitor.name}</td>
              <td>{visitor.purpose}</td>
              <td>{visitor.date}</td>
              <td>{visitor.status}</td>
              <td>
                {visitor.status === 'Pending' && (
                  <>
                    <button
                      onClick={() => handleStatusChange(visitor.id, 'Approved')}
                      className="approve-btn"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleStatusChange(visitor.id, 'Denied')}
                      className="deny-btn"
                    >
                      Deny
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VisitorLogs;