import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import { useState } from 'react';
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

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div style={styles.Container}>
      <Helmet>
        <title>Registration page</title>
      </Helmet>
      <form onSubmit={handleSubmit}>
        <label style={styles.Field}>
          Name
          <input
            style={styles.Input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>
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
        <button style={styles.Button} type="Submit">
          Register
        </button>
      </form>
    </div>
  );
}
