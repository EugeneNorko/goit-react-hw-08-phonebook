import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
`;

export default function HomeView() {
  return (
    <Container>
      <h1>Hello, this is your best book of contacts ❤️</h1>
    </Container>
  );
}
