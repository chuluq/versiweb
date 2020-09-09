import React, { Fragment } from 'react';
import AppNavbar from './components/AppNavbar';
import ItemModal from './components/ItemModal';

import { Container } from 'react-bootstrap';

import './App.css';

function App() {
  return (
    <Fragment>
      <AppNavbar />
      <Container>
        <ItemModal />
      </Container>
    </Fragment>
  );
}

export default App;
