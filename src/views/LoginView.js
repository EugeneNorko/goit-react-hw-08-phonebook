import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/auth/AuthOperations';

const styles = {
  Container: {
    margin: '0 auto',
    padding: '50px 25px',
    maxWidth: '1200px',
  },
  Field: {
    display: 'block',
    marginBottom: '20px',
  },
  Input: {
    display: 'block',
    width: '300px',
  },
  Button: {
    display: 'block',
    backgroundColor: 'rgb(152, 187, 242)',
    color: 'black',
    border: '1px solid rgb(22, 24, 82)',
    borderRadius: '4px',
    minWidth: '80px',
    height: '30px',
    cursor: 'pointer',
  },
};

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };
  return (
    <div style={styles.Container}>
      <Helmet>
        <title>Log In page</title>
      </Helmet>
      <form onSubmit={handleSubmit}>
        <label style={styles.Field}>
          Email
          <input
            style={styles.Input}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label style={styles.Field}>
          Password
          <input
            style={styles.Input}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button style={styles.Button} type="submit" onSubmit={handleSubmit}>
          Log In
        </button>
      </form>
    </div>
  );
}
