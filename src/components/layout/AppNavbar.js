import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

const AppNavbar = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand='sm'
        bg='light'
        variant='light'
        className='mb-5'
      >
        <Container>
          <Navbar.Brand>INI LOGO</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link href='/'>Beranda</Nav.Link>
              <Nav.Link href='/daftarKelas'>Kelas</Nav.Link>
              <Nav.Link href='/about'>About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default AppNavbar;
