import styled from 'styled-components';
import AuthNav from './auth/AuthNav';
import Navigation from './Navigation';
import { useAuth } from 'hooks/useAuth';
import UserMenu from './UserMenu/UserMenu';

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto 0 auto;
  padding: 0 20px;
  min-height: 50px;
  border-bottom: 1px solid grey;
`;
export default function AppBar() {
  const { isLoggedIn } = useAuth();
  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
}
