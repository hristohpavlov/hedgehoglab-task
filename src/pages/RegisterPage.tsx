import { useState } from 'react';
import '../App.css';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });
    const handleRegister = async () => {
        try {
          const response = await api.post('/register', formData);
          navigate('/login');
        } catch (error) {
          console.error('Registration failed', error);
        }
      };

      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    return (
        <div>
      <h2>Register</h2>
      <form>
        <label>
          First Name:
          <input type="text" name="first_name" value={formData.first_name} onChange={handleInputChange} />
        </label>
        <label>
          Last Name:
          <input type="text" name="last_name" value={formData.last_name} onChange={handleInputChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
        </label>
        <label>
          Confirm Password:
          <input
            type="password"
            name="password_confirmation"
            value={formData.password_confirmation}
            onChange={handleInputChange}
          />
        </label>
        <button type="button" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
    );
  };
  
  export default RegisterPage;