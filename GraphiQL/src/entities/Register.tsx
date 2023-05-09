import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth, registerWithEmailAndPassword, signInWithGoogle } from './firebase';
import './Register.css';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  const register = () => {
    if (!name) alert('Please enter name');
    try {
      setError('');
      setLoading(true);
      registerWithEmailAndPassword(name, email, password);
    } catch {
      setError('Failed to Register');
    }
    setLoading(false);
    // alert('registerWithEmailAndPassword-> Success!');
  };
  useEffect(() => {
    if (user) navigate('/dashboard');
    //navigate('/path')
  }, [user, navigate]);
  if (error) {
    console.log(error);
  }
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
