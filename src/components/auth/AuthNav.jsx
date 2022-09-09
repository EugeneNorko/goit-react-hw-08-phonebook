import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Link = styled(NavLink)`
  display: inline-block;
  font-size: 20px;
  color: rgb(65, 67, 130);
  text-decoration: none;
  &:last-child {
    margin-left: 20px;
  }

  &.active {
    color: rgb(255, 80, 80);
  }
`;

export default function AuthNav() {
  return (
    <div>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </div>
  );
}
