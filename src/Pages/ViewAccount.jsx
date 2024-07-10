import { useEffect, useState } from 'react';
import axiosInstance from '../services/axiosInstance';

const ViewAccount = () => {
  const [accounts, setAccounts] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedAccount, setEditedAccount] = useState({ username: '', password: '', description: '', url: '' });
  // const userId = localStorage.getItem('userId');
  const userId = parseInt(localStorage.getItem('userId'))
  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await axiosInstance.get('http://localhost:8080/api/account');
      
        const filteredAccounts = response.data.filter((account) => account.user.id === userId);
        setAccounts(filteredAccounts);
        filteredAccounts.forEach((account) => {
          console.log(`User ID: ${account.user.id}`);
        });
      } catch (error) {
        console.error('Error fetching accounts:', error);
      }
    };
    fetchAccounts();
  }, [userId]);

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditedAccount(accounts[index]);
  };

  const handleSave = async (index) => {
    try {
      await axiosInstance.put(`http://localhost:8080/api/account/${accounts[index].id}`, editedAccount);
      const updatedAccounts = [...accounts];
      updatedAccounts[index] = editedAccount;
      setAccounts(updatedAccounts);
      setEditingIndex(null);
    } catch (error) {
      console.error('Error updating account:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`http://localhost:8080/api/account/${id}`);
      setAccounts(accounts.filter(account => account.id!== id));
    } catch (error) {
      console.error('Error deleting account:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedAccount({...editedAccount, [name]: value });
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">List of Account Registered  </h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Username</th>
            <th className="py-2 px-4 border-b">Password</th>
            <th className="py-2 px-4 border-b">Description</th>
            <th className="py-2 px-4 border-b">URL</th>
            <th className="py-2 px-4 border-b">UserID</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account, index) => (
            <tr key={index}>
              {editingIndex === index? (
                <>
                  <td className="py-2 px-4 border-b">
                    <input
                      type="text"
                      name="username"
                      value={editedAccount.username}
                      onChange={handleChange}
                      className="w-full px-2 py-1 border rounded"
                    />
                  </td>
                  <td className="py-2 px-4 border-b">
                    <input
                      type="password"
                      name="password"
                      value={editedAccount.password}
                      onChange={handleChange}
                      className="w-full px-2 py-1 border rounded"
                    />
                  </td>
                  <td className="py-2 px-4 border-b">
                    <input
                      type="text"
                      name="description"
                      value={editedAccount.description}
                      onChange={handleChange}
                      className="w-full px-2 py-1 border rounded"
                    />
                  </td>
                  <td className="py-2 px-4 border-b">
                    <input
                      type="url"
                      name="url"
                      value={editedAccount.url}
                      onChange={handleChange}
                      className="w-full px-2 py-1 border rounded"
                    />
                  </td>
                  <td>{account.user.id}</td>
                  <td className="py-2 px-4 border-b">
                    <button
                      onClick={() => handleSave(index)}
                      className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditingIndex(null)}
                      className="bg-gray-500 text-white px-2 py-1 rounded"
                    >
                      Cancel
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td className="py-2 px-4 border-b">{account.username}</td>
                  <td className="py-2 px-4 border-b">{account.password}</td>
                  <td className="py-2 px-4 border-b">{account.description}</td>
                  <td className="py-2 px-4 border-b">
                    <a href={`http://${account.url}`} style={{color:"blue"}} target="_blank" rel="noopener noreferrer">
                      {account.url}
                    </a>
                  </td>
                  <td className="py-2 px-4 border-b">{account.user.id}</td>
                  <td className="py-2 px-4 border-b">
                    <button
                      onClick={() => handleEdit(index)}
                      className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(account.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewAccount;