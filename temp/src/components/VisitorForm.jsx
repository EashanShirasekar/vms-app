import './VisitorForm.css';

export default function VisitorForm() {
  return (
    <form className="visitor-form">
      <label>Visitor Name</label>
      <input type="text" placeholder="Enter name" />

      <label>Phone Number</label>
      <input type="tel" placeholder="Enter phone" />

      <label>Reason for Visit</label>
      <input type="text" placeholder="Enter reason" />

      <button type="submit">Submit</button>
    </form>
  );
}