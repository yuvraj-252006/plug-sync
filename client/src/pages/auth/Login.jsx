import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { login } from '../../services/mockAuth';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPwd, setShowPwd] = useState(false);
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    if (!email || !password) {
      setError('Please fill both fields');
      return;
    }
    setLoading(true);
    try {
      await login({ email, password, remember });
      navigate('/demo-access');
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card mt-md" style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2 className="text-center mb-sm">Login</h2>
      {error && <div className="mb-sm" style={{ color: 'red' }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="password">Password</label>
          <div className="flex" style={{ alignItems: 'center' }}>
            <input
              type={showPwd ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              style={{ flex: 1 }}
            />
            <button
              type="button"
              onClick={() => setShowPwd(!showPwd)}
              className="btn-outline ml-sm"
            >
              {showPwd ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>
        <div className="form-group flex justify-between align-center">
          <label className="flex align-center">
            <input
              type="checkbox"
              checked={remember}
              onChange={e => setRemember(e.target.checked)}
            />
            <span className="ml-xs">Remember me</span>
          </label>
          <NavLink to="/forgot-password" className="text-sm">Forgot password?</NavLink>
        </div>
        <button type="submit" className="btn-primary w-100" disabled={loading}>
          {loading ? 'Logging in…' : 'Login'}
        </button>
        <div className="mt-sm text-center">
          <span>Don’t have an account? </span>
          <NavLink to="/register" className="btn-outline ml-sm">Register</NavLink>
        </div>
      </form>
    </div>
  );
};

export default Login;
