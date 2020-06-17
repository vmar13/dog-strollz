import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import DogContainer from '../containers/DogContainer';
import DogTile from '../components/DogTile';
import DogShowPage from '../components/DogShowPage';

import '../App.css';

const App = (props) => {
  return (
    <Router>
      <div className='app'>
        <NavBar />
        <Route exact path='/' component={Home} />
        <Route exact path='/dog-container' component={DogContainer} />
        <Route exact path='/dog' component={DogTile} />
        <Route exact path='/dogs/:id' component={DogShowPage} />
        {/* <Route exact path='/dogform' component={DogForm} /> */}
      </div>
    </Router>
  );
};

export default App
