import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import styled from 'styled-components';

const Link = styled(NavLink)`
  display: inline-block;
  font-size: 20px;
  color: rgb(65, 67, 130);
  text-decoration: none;

  &.active {
    color: rgb(255, 80, 80);
  }

  &:last-child {
    margin-left: 20px;
  }
`;

export default function Navigation() {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <Link to="/">Main Page</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </nav>
  );
}
