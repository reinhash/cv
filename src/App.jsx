import React from 'react';
import './App.css';
import './App.sass';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './navbar/navbar.jsx';
import CvLong from './cvLong/cvLong.jsx';
import CvShort from './cvShort/cvShort.jsx';
import Footer from './footer/footer.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route path="/cv"><CvLong /></Route>
          <Route path="/timeline"><CvShort /></Route>
          <Route path="/"><CvShort /></Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
