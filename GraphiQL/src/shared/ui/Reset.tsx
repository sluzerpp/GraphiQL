import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { auth, sendPasswordResetEmail } from './firebase';
import './Reset.css';
// import reCAPTCHA from 'react-google-recaptcha';

function Reset() {
  const [email, setEmail] = useState('');
  const [user, loading, error] = useAuthState(auth);
  console.log('user>>>', user);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    // if (user) navigate('/dashboard');
  }, [user, loading, navigate]);
  if (error) {
    console.log(error);
  }

  const handleSendPasswordResetEmail = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert('Check your inbox -> You will be redirected!');
        navigate('/');
      })
      .catch((error) => console.log(error)); // Handle sign-in error
  };

  return (
    <div className="reset">
      <div className="reset__container">
        <input
          type="text"
          className="reset__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <button className="reset__btn" onClick={handleSendPasswordResetEmail}>
          Send password reset email
        </button>
        <div>
          Dont have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
    </div>
  );
}
export default Reset;
