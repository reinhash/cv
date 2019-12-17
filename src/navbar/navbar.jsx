import React from 'react'

class Navbar extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (<div>
                    <nav className="navbar" role="navigation" aria-label="main navigation">
                      <div className="navbar-brand">
                        <div class="navbar-item">
                            <div className="buttons has-addons">
                              <a className="button is-small is-light" href="https://github.com/reinhash">
                                  <span className="icon">
                                    <i className="fab fa-github"></i>
                                  </span>
                                  <span>GitHub</span>
                              </a>
                              <a className="button is-small is-info" href="https://www.linkedin.com/in/reinhard-scheuerle-707348a8/">
                                  <span className="icon">
                                      <i className="fab fa-linkedin"></i>
                                  </span>
                                  <span>LinkedIn</span>
                              </a>
                            </div>
                          </div>
                          


                        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                          <span aria-hidden="true"></span>
                          <span aria-hidden="true"></span>
                          <span aria-hidden="true"></span>
                        </a>
                      </div>

                      <div id="navbarBasicExample" className="navbar-menu">
                        <div className="navbar-start">
                          <a className="navbar-item" href="/">
                            Home
                          </a>

                          <a className="navbar-item" href="/cvshort">
                            CV-Short
                          </a>
                          <a className="navbar-item" href="/cvlong">
                            CV-Long
                          </a>

                        </div>
                        
                          
                        

                        
                      </div>
                    </nav>
                </div>)
    }
}

export default Navbar