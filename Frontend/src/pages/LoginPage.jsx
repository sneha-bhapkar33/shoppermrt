import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';
export default function LoginPage({ onLogin }) {
  const [form, setForm] = useState({ email: 'user@test.in', password: 'user123!' });
  const [error, setError] = useState(''); const navigate = useNavigate();
  async function submit(event) { event.preventDefault();
     try { const session = await api('/auth/login',
         { method: 'POST', body: JSON.stringify(form) }); 
         onLogin(session); navigate('/'); } 
         catch (err) { setError(err.message); } }
  return <form className="form" onSubmit={submit}><h1>Log in</h1><p>Try the seeded student account.</p>
  <input value={form.email} 
  onChange={e => setForm({ ...form, email: e.target.value })} placeholder="Email"/><input required type="password" 
  value={form.password} 
  onChange={e => setForm({ ...form, password: e.target.value })} 
  placeholder="Password"/>
  <button>Log in</button>{error && <p className="error">{error}</p>}
  </form>;
}
