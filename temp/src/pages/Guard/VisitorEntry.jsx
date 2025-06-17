import '../../styles/VisitorEntry.css';

export default function VisitorEntry() {
  return (
    <div className="visitor-entry">
      <header className="dashboard-header">
        <h1>Register New Visitor</h1>
      </header>

      <form className="visitor-form">
        <input type="text" placeholder="Visitor Name" required />
        <input type="text" placeholder="Contact Number" required />
        <input type="text" placeholder="Purpose of Visit" required />
        <input type="text" placeholder="Building to Visit" required />
        <input type="text" placeholder="Vehicle Number (Optional)" />
        <input type="text" placeholder="ID Proof Type (e.g., Aadhar)" required />
        <input type="text" placeholder="ID Number" required />

        <button type="submit">Submit Entry</button>
      </form>
    </div>
  ); 
}
