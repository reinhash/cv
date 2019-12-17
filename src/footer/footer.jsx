import React from 'react'


class Footer extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (<div>
                    <footer className="footer">
                      <div className="content has-text-centered">
                        <p>
                          Thanks for visiting my page. If you have any questions please feel free to reach out to me! -<i><strong>Reinhard Scheuerle</strong></i>
                        </p>
                      </div>
                    </footer>
                </div>)
    }
}

export default Footer;