import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Friends from './components/Friends';

function App() {
  return (
    <Router>
      <div className="App">
       <Friends /> 
      </div>
    </Router>
  );
}

export default App;
