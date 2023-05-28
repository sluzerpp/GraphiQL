import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { auth, sendPasswordResetEmail } from '../authentication/firebase';
import './Reset.css';
// mport { Input } from '@/shared/ui/Input/Input';
import { ToastContainer, toast } from 'react-toastify';

function Reset() {
  const [email, setEmail] = useState('');
  const [user, loading, error] = useAuthState(auth);
  console.log('user>>>', user);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (user) navigate('/dashboard');
  }, [user, loading, navigate]);
  if (error) {
    console.log(error);
  }

  const handleSendPasswordResetEmail = () => {
    if (email) toast.info('Check your inbox please');
    sendPasswordResetEmail(auth, email)
      .then(() => {
        navigate('/');
      })
      .catch((error) => toast.error(error.message)); // Handle reset error
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
      <ToastContainer />
    </div>
  );
}
export default Reset;
