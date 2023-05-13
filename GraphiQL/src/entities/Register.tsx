import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth, registerWithEmailAndPassword, signInWithGoogle } from './firebase';
import './Register.css';
// import { UserValues } from '../entities/types';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate('/dashboard');
  }, [user, navigate]);

  // validation
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
    return passwordRegex.test(password);
  };

  const register = () => {
    // Validate the email and password fields
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      setLoading(false);
      return;
    }

    if (!validatePassword(password)) {
      setError(
        'Please enter a strong password with at least 8 characters, one letter, one digit, and one special character'
      );
      setLoading(false);
      return;
    }
    if (password && email) {
      // Register
      try {
        setError('');
        setLoading(true);
        registerWithEmailAndPassword(name, email, password);
        navigate('/dashboard');
      } catch {
        setError('Failed to Register');
      }
      setLoading(false);
      alert('RegisterWithEmailAndPassword-> Success!');
    } else {
      alert('Failed Try Again');
    }
  };

  return (
    <div className="register">
      <div className="register__container">
        <input
          type="text"
          className="register__textBox"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
        <input
          type="text"
          className="register__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="register__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <div className="register__error">{error && <div>{error}</div>}</div>
        <button disabled={loading} className="register__btn" onClick={register}>
          Register
        </button>
        <button className="register__btn register__google" onClick={signInWithGoogle}>
          Register with Google
        </button>
        <div>
          Already have an account? <Link to="/auth">Login</Link> now.
        </div>
      </div>
    </div>
  );
}
export default Register;
