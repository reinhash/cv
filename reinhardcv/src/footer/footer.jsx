import React from 'react'


function Footer(props){
    return (<div>
                <footer className="footer">
                  <div className="content has-text-centered">
                    <p>
                      {props.langGerman 
                      ? ("Vielen Dank, dass Sie meine Seite besuchen. Für Nachfragen oder ein Gespräch können Sie mich gerne kontaktieren! - ")
                      : ("Thanks for visiting my page. If you have any questions please feel free to reach out to me! - ")
                      }
                      <i><strong>Reinhard Scheuerle</strong></i>
                    </p>
                  </div>
                </footer>
            </div>)
}

export default Footer;