import React from 'react';
import Zoom from 'react-reveal/Zoom';


function Home () {
    return (<div>
            
                <section className="hero is-black is-fullheight-with-navbar">
                    <Zoom collapse>
                    
                        <div className="columns">
                            <div className="column is-half is-offset-one-quarter">
                                <figure className="image is-256x256">
                                    <img className="" src={"https://static.fie.org/uploads/23/119732-WhatsApp%20Image%202019-12-14%20at%2019.55.45.jpeg"} />
                                </figure>
                            </div>
                        </div>
                    
                    </Zoom>
                    <div className="hero-body">
                        body
                    </div>
                    <div className="hero-foot">
                        bottom
                    </div>
                </section>
            
            </div>);

}

export default Home;