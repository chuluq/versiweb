import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppNavbar from './components/layout/AppNavbar';
import Home from './components/pages/Home';
import DaftarKelas from './components/pages/DaftarKelas';
import About from './components/pages/About';

import { Container } from 'react-bootstrap';

import KelasState from './context/kelas/KelasState';

import './App.css';

function App() {
  return (
    <KelasState>
      <Router>
        <Fragment>
          <AppNavbar />
          <Container>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/daftarKelas' component={DaftarKelas} />
              <Route exact path='/about' component={About} />
            </Switch>
          </Container>
        </Fragment>
      </Router>
    </KelasState>
  );
}

export default App;
