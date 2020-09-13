import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const AppNavbar = () => {
  return (
    <div>
      <Navbar bg='light' variant='light' expand='sm' className='mb-5'>
        <Container>
          <Navbar.Brand>Navigasi</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default AppNavbar;
