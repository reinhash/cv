import React from 'react'

class Navbar extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (<div>
                    <nav className="navbar" role="navigation" aria-label="main navigation">
                      <div className="navbar-brand">
                        
                          


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