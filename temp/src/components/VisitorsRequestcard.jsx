import './VisitorsRequestcard.css';

export default function VisitorsRequestcard({ name, purpose }) {
  return (
    <div className="request-card">
      <p><strong>Visitor:</strong> {name}</p>
      <p><strong>Purpose:</strong> {purpose}</p>
      <div className="button-group">
        <button className="approve">Approve</button>
        <button className="deny">Deny</button>
      </div>
    </div>
  );
}