import React, { Fragment } from 'react';
import AppNavbar from './components/layout/AppNavbar';
import Home from './components/pages/Home';

import { Container } from 'react-bootstrap';

import KelasState from './context/kelas/KelasState';

import './App.css';

function App() {
  return (
    <KelasState>
      <Fragment>
        <AppNavbar />
        <Container>
          <Home />
        </Container>
      </Fragment>
    </KelasState>
  );
}

export default App;
