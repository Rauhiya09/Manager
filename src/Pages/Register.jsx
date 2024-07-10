import  { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/user/add', {
        username,
        password,
      });
      console.log(response.data);
      navigate("/")

      
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold mb-4 flex items-center  bg-gray-100">Register</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
        <label className="block mb-2">
          <span className="text-gray-700">Username</span>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="block w-full p-2 pl-10 text-sm text-gray-700"
            placeholder="Enter your username"
          />
        </label>
        <label className="block mb-2">
          <span className="text-gray-700">Password</span>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="block w-full p-2 pl-10 text-sm text-gray-700"
            placeholder="Enter your password"
          />
        </label>
        {error && (
          <div className="text-red-500 text-sm mb-2">{error}</div>
        )}
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;