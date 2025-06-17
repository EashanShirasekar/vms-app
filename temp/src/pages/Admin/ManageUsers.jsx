import React, { useState } from 'react';
import { mockUsers } from '../../mockData'; // Adjusted path
import '../../styles/ManageUsers.css';

const ManageUsers = () => {
  const [users, setUsers] = useState(mockUsers);
  const [form, setForm] = useState({ name: '', role: 'Employee' });

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      id: users.length + 1,
      name: form.name,
      role: form.role,
      status: 'Active',
    };
    setUsers([...users, newUser]);
    setForm({ name: '', role: 'Employee' });
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="manage-users">
      <h2>Manage Users</h2>
      <form onSubmit={handleAddUser}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <select
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
        >
          <option value="Employee">Employee</option>
          <option value="Guard">Guard</option>
        </select>
        <button type="submit">Add User</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
              <td>
                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;