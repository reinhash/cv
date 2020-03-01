import React from 'react';
import './App.css';
import './App.sass';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookies from 'universal-cookie'
import Navbar from './navbar/navbar.jsx';
import CvLong from './cvLong/cvLong.jsx';
import CvShort from './cvShort/cvShort.jsx';
import Footer from './footer/footer.jsx';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      langGerman: true,
    }
  }

  setLanguage = () => {
    this.setState({langGerman: !this.state.langGerman})
    const cookies = new Cookies();
    cookies.set('lang', 'en', { path: '/' });
    console.log(cookies.get('lang'));
    //window.location.reload();
  }

  render(){
    return (
      <div className="App">
        <Navbar setLanguage={this.setLanguage} langGerman={this.state.langGerman} />
        <Router>
          <Switch>
            <Route path="/cv"><CvLong setLanguage={this.setLanguage} langGerman={this.state.langGerman} /></Route>
            <Route path="/timeline"><CvShort setLanguage={this.setLanguage} langGerman={this.state.langGerman} /></Route>
            <Route path="/"><CvLong setLanguage={this.setLanguage} langGerman={this.state.langGerman} /></Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
