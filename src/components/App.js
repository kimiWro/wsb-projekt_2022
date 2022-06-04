import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Navigation from './Navigation';
import Pages from './Pages';

class App extends React.Component {
  
  render() {
    return (
      <Router>
        <main className='Mem'>
          <nav>{<Navigation/>}</nav>          
          <section>{<Pages/>}</section>
        </main>
      </Router>
    );
  }
}

export default App;