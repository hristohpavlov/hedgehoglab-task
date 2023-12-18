import { useState } from 'react';
import '../App.css';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const { setToken } = useAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      email: '',
      password: '',
    });
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleLogin = async () => {
      try {
        const response = await api.post('/login', formData);
        setToken(response.data.token);
        navigate('/users');
      } catch (error) {
        console.error('Login failed', error);
      }
    };
    return (
        <div>
        <h2>Login</h2>
        <form>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
          </label>
          <label>
            Password:
            <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
          </label>
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    );
  };
  
  export default LoginPage;