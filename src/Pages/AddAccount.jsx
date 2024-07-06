import  { useState } from 'react';
import axiosInstance from '../services/axiosInstance';

const AddAccountPage = () => {

  const userId = parseInt(localStorage.getItem('userId'))


  const [accounts, setAccounts] = useState([{ username: '', password: '', description: '', url: '', user_id: userId }]);

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const newAccounts = [...accounts];
    newAccounts[index][name] = value;
    setAccounts(newAccounts);
  };

  const handleAddRow = () => {
    setAccounts([...accounts, { username: '', password: '', description: '', url: '', user_id: userId }]);
  };

  const handleAddAccounts = async () => {
    try {
      const accountsWithUserId = accounts.map((account) => ({ ...account, user: { id: userId } }));
      await axiosInstance.post('/api/account/bulk', accountsWithUserId);
      alert('Accounts added successfully!');
      setAccounts([{ username: '', password: '', description: '', url: '', user_id: userId }]); // Clear all rows after successful addition
    } catch (error) {
      console.error('Error adding accounts:', error);
      alert('Failed to add accounts. Please try again.');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Add Accounts</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Username</th>
            <th className="py-2 px-4 border-b">Password</th>
            <th className="py-2 px-4 border-b">Description</th>
            <th className="py-2 px-4 border-b">URL</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">
                <input
                  type="text"
                  name="username"
                  value={account.username}
                  onChange={(e) => handleChange(index, e)}
                  className="w-full px-2 py-1 border rounded"
                />
              </td>
              <td className="py-2 px-4 border-b">
                <input
                  type="password"
                  name="password"
                  value={account.password}
                  onChange={(e) => handleChange(index, e)}
                  className="w-full px-2 py-1 border rounded"
                />
              </td>
              <td className="py-2 px-4 border-b">
                <input
                  type="text"
                  name="description"
                  value={account.description}
                  onChange={(e) => handleChange(index, e)}
                  className="w-full px-2 py-1 border rounded"
                />
              </td>
              <td className="py-2 px-4 border-b">
                <input
                  type="url"
                  name="url"
                  value={account.url}
                  onChange={(e) => handleChange(index, e)}
                  className="w-full px-2 py-1 border rounded"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={handleAddRow}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Row
      </button>
      <button
        onClick={handleAddAccounts}
        className="ml-4 bg-green-500 text-white px-4 py-2 rounded"
      >
        Add All Accounts
      </button>
    </div>
  );
};

export default AddAccountPage;