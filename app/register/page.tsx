'use client';

import { useActionState, useState } from 'react';
import { registerUser } from '../actions/user';

const RegisterPage = () => {
  const [state, formAction] = useActionState(registerUser, { errors: '' });

  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  return (
    <div>
      <h2>Register</h2>
      <form action={formAction}>
        <div>
          <label>
            Username
            <input
              type="text"
              name="username"
              required
              defaultValue={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {state.errors.username && (
              <p style={{ color: 'red' }}>{state.errors.username}</p>
            )}
          </label>
        </div>
        <div>
          <label>
            Name
            <input
              type="text"
              name="name"
              required
              defaultValue={name}
              onChange={(e) => setName(e.target.value)}
            />
            {state.errors.name && (
              <p style={{ color: 'red' }}>{state.errors.name}</p>
            )}
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              type="password"
              name="password"
              required
              defaultValue={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {state.errors.password && (
              <p style={{ color: 'red' }}>{state.errors.password}</p>
            )}
          </label>
        </div>
        <div>
          <label>
            Confirm Password
            <input
              type="password"
              name="confirmPassword"
              required
              defaultValue={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
export default RegisterPage;
