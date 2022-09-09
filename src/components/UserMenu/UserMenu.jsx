import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import authOperation from '../../redux/auth/AuthOperations';
import defaultAvatar from './avatar.png';

const Button = styled.button`
  background-color: rgb(152, 187, 242);
  color: black;
  border: 1px solid rgb(22, 24, 82);
  border-radius: 4px;
  min-width: 80px;
  height: 30px;
  cursor: pointer;

  &:hover {
    background-color: rgb(67, 125, 219);
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.span`
  margin: 0 15px;
`;
export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const avatar = defaultAvatar;

  return (
    <Container>
      <img src={avatar} alt="User's avatar" width="40" />
      <Text>Welcome, {user.name}</Text>
      <Button type="button" onClick={() => dispatch(authOperation.logOut())}>
        LogOut
      </Button>
    </Container>
  );
}
