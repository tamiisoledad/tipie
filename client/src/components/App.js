import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Login from './Login';

function App() {
  return (
    <React.Fragment>
      <Routes>
       <Route path="/" exact={true} element={<Login/>} />
       <Route path="/home"  element={<Home/>} />
      </Routes>
    </React.Fragment>
  )
}

export default App;
