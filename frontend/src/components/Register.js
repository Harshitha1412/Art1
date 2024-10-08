import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from './AuthService';
import '../styles/Register.css'

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('VISITOR');  // Default role
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Invalid email format');
      return;
    }

    if (!validatePassword(password)) {
      setErrorMessage(
        'Password must be at least 8 characters, include one uppercase letter, one number, and one special character.'
      );
      return;
    }

    AuthService.register(name, email, username, password, role)
      .then(() => {
        navigate('/login');  // Redirect to login page after successful registration
      })
      .catch((error) => {
        setErrorMessage('Error registering: ' + (error.response?.data?.message || error.message));
      });
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div className="input-group">
          <label>Name</label>
          <input
            type="text"
            style={{ backgroundColor: 'white',color:'black' }}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            style={{ backgroundColor: 'white',color:'black' }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Username</label>
          <input
            type="text"
            style={{ backgroundColor: 'white',color:'black' }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            style={{ backgroundColor: 'white',color:'black' }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label >Role</label>
          <select style={{ backgroundColor: 'white',color:'black' }} value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="ADMIN">Admin</option>
            <option value="ARTIST">Artist</option>
            <option value="VISITOR">Visitor</option>
            <option value="CURATOR">Curator</option>
          </select>
        </div>
        <button type="submit">
        <span style={{ fontWeight: 'bold' }}>REGISTER</span>

        </button>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <p style={{ marginTop: '10px', color: 'white' }}>
          Already have an account? <a href="/login" style={{ color: 'lightblue' }}>Login here</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
