import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Login from './Login';

function App() {
  return (
    <React.Fragment>
      <Routes>
       <Route path="/" exact={true} element={<Login/>} />
      </Routes>
    </React.Fragment>
  )
}

export default App;
