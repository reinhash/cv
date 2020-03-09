import React from 'react';
import LightSpeed from 'react-reveal/LightSpeed';
import Pulse from 'react-reveal/Pulse';
import Fade from 'react-reveal/Fade';

function CvShort (props) {
    return (<div>
              <section className="hero is-bold is-light">
                <div className="hero-body">
                  <h1 className="title is-bold is-1">
                    Reinhard Scheuerle
                  </h1>
                  <h2 className="subtitle is-4">
                    {props.langGerman ?  "Willkommen auf meiner Timeline" : "Welcome to my timeline"}
                  </h2>
                </div>
              </section>
              <Timeline langGerman={props.langGerman} />
            </div>);
}

function Timeline(props){
  return (<div>
            <section className="section">
              <div className="timeline is-centered">
                <header className="timeline-header">
                  <span className="tag is-medium is-dark">{props.langGerman ? "Geboren am 14.05.1990" : "Born on 14.05.1990"}</span>
                </header>
                <LightSpeed left>
                    <div className="timeline-item">
                      <div className="timeline-marker"></div>
                      <div className="timeline-content">
                        <p className="heading"></p>
                        <p></p>
                      </div>
                    </div>
                </LightSpeed>
                <header className="timeline-header">
                  <span className="tag is-medium is-dark">2009</span>
                </header>
                <LightSpeed left>
                    <div className="timeline-item">
                      <div className="timeline-marker is-icon is-link"></div>
                      <div className="timeline-content">
                        <p className="heading">September 2009</p>
                        <p>Start: <strong>Bachelor of Science: International Business - Finance</strong></p>
                        <p>{props.langGerman ? "Maastricht University, Niederlande" : "Maastricht University, the Netherlands"}</p>
                      </div>
                    </div>
                </LightSpeed>
                <header className="timeline-header">
                  <span className="tag is-medium is-dark">2012</span>
                </header>
                <LightSpeed right>
                    <div className="timeline-item">
                      <div className="timeline-marker is-link"></div>
                      <div className="timeline-content">
                        <p className="heading">{props.langGerman ? "Januar 2012" : "January 2012"}</p>
                        <p><strong>{props.langGerman ? "Auslandssemester" : "Study Abroad"}</strong></p>
                        <p>Whitworth University</p>
                        <p>Spokane, USA</p>
                      </div>
                    </div>
                </LightSpeed>

                <header className="timeline-header">
                  <span className="tag is-medium is-dark">2013</span>
                </header>
                <LightSpeed left>
                    <div className="timeline-item">
                      <div className="timeline-marker is-icon is-link"></div>
                      <div className="timeline-content">
                        <p className="heading">September 2013</p>
                        <p>Start: <strong>Master of Science: International Business - Strategy & Innovation</strong></p>
                        <p>{props.langGerman ? "Maastricht University, Niederlande" : "Maastricht University, the Netherlands"}</p>
                      </div>
                    </div>
                </LightSpeed>
                <header className="timeline-header">
                  <span className="tag is-medium is-dark">2014</span>
                </header>
                <LightSpeed right>
                    <div className="timeline-item">
                      <div className="timeline-marker is-link"></div>
                      <div className="timeline-content">
                        <p className="heading">{props.langGerman ? "Januar 2012" : "January 2012"}</p>
                        <p><strong>{props.langGerman ? "Auslandssemester" : "Study Abroad"}</strong></p>
                        <p>{props.langGerman ? "Wirtschaftsuniversität Wien" : "Vienna University of Economics and Business"}</p>
                        <p>Vienna, Austria</p>
                      </div>
                    </div>
                </LightSpeed>
                <header className="timeline-header">
                  <span className="tag is-medium is-dark">2015</span>
                </header>
                <Pulse>
                    <div className="timeline-item">
                      <div className="timeline-marker is-icon is-link"></div>
                      <div className="timeline-content">
                        <p className="heading"><strong>{props.langGerman ? "Abschluss" : "Graduation"}</strong></p>
                      </div>
                    </div>
                </Pulse>
                <Fade top>
                    <div className="timeline-item">
                      <div className="timeline-marker is-primary"></div>
                      <div className="timeline-content">
                        <p className="heading">{props.langGerman ? "Juni 2015" : "June 2015"}</p>
                        <p><strong>{props.langGerman ? "Qualitätsmanagement (Praktikum)" : "Quality Management (Internship)"}</strong></p>
                        <p>Robert Bosch GmbH</p>
                        <p>{props.langGerman ? "Brüssel, Belgien" :"Brussels, Belgium"}</p>
                      </div>
                    </div>
                </Fade>
                <header className="timeline-header">
                  <span className="tag is-medium is-dark">2016</span>
                </header>
                <Fade top>
                    <div className="timeline-item">
                      <div className="timeline-marker is-icon is-primary"></div>
                      <div className="timeline-content">
                        <p className="heading">{props.langGerman ? "Juni 2016" : "June 2016"}</p>
                        <p><strong>Equity Index Analyst</strong></p>
                        <p>Solactive AG</p>
                        <p>{props.langGerman ? "Frankfurt, Deutschland" : "Frankfurt, Germany"}</p>
                      </div>
                    </div>
                </Fade>
                <header className="timeline-header">
                  <span className="tag is-dark">2018 - Gap year</span>
                </header>
                <Fade top>
                    <div className="timeline-item">
                      <div className="timeline-marker is-icon is-primary"></div>
                      <div className="timeline-content">
                        <p className="heading">{props.langGerman ? "Dezember 2018" : "December 2018"}</p>
                        <p><strong>IT Consultant DMS/ECM</strong></p>
                        <p>Synalis GmbH & Co. KG</p>
                        <p>{props.langGerman ? "Bonn, Deutschland" : "Bonn, Germany"}</p>
                      </div>
                    </div>
                </Fade>
                <Fade top>
                    <div className="timeline-item">
                      <div className="timeline-marker is-icon is-link">
                      </div>
                      <div className="timeline-content">
                        <p className="heading">{props.langGerman ? "Oktober 2019" : "October 2019"}</p>
                        <p>Bogota Bootcamp</p>
                      </div>
                    </div>
                </Fade>
                <header className="timeline-header">
                  <span className="tag is-medium is-dark">2020</span>
                </header>
                <Fade top>
                    <div className="timeline-item">
                      <div className="timeline-marker is-icon is-primary">
                      </div>
                      <div className="timeline-content">
                        <p className="heading">{props.langGerman ? "Januar 2020" : "January 2020"}</p>
                        <p>{props.langGerman ? "Freelance Softwareentwickler" : "Freelance Software Developer"}</p>
                      </div>
                    </div>
                </Fade>
                <div className="timeline-header">
                  <span className="tag is-medium is-dark">{props.langGerman ? "Heute" : "Today"}</span>
                </div>
              </div>
            </section>
          </div>)
}

export default CvShort;