import React from 'react';
import LightSpeed from 'react-reveal/LightSpeed';
import Pulse from 'react-reveal/Pulse';
import Fade from 'react-reveal/Fade';

let data = {
  timeline: {
    welcome: ["Willkommen auf meiner Timeline", "Welcome to my timeline"],
    birthDate: ["Geboren am 14.05.1990", "Born on 14.05.1990"],
    bachelorMaastricht: {
      header: ["September 2009"],
      study: ["Bachelor of Science: International Business - Finance"],
      location: ["Maastricht University, Niederlande", "Maastricht University, the Netherlands"]
    },
    bachelorWhitworth: {
      header: ["Januar 2012", "January 2012"],
      study: [ "Auslandssemester", "Study Abroad"],
      schoolName: ["Whitworth University"],
      location: ["Spokane, USA"],
    },
    masterMaastricht: {
      header: ["September 2013"],
      study: ["Master of Science: International Business - Strategy & Innovation"],
      location: ["Maastricht University, Niederlande", "Maastricht University, the Netherlands"],
    },
    masterVienna: {
      header: ["Januar 2012", "January 2012"],
      study: ["Auslandssemester", "Study Abroad"],
      schoolName: ["Wirtschaftsuniversität Wien", "Vienna University of Economics and Business"],
      location: ["Wien, Österreich", "Vienna, Austria"]
    },
    graduation: {
      header: ["Abschluss", "Graduation"]
    },
    bosch: {
      header: ["Juni 2015", "June 2015"],
      workTitle: ["Qualitätsmanagement (Praktikum)", "Quality Management (Internship)"],
      companyName: ["Robert Bosch GmbH"],
      location: ["Brüssel, Belgien", "Brussels, Belgium"],
    },
    solactive: {
      header: ["Juni 2016", "June 2016"],
      workTitle: ["Equity Index Analyst"],
      companyName: ["Solactive AG"],
      location: ["Frankfurt, Deutschland", "Frankfurt, Germany"],
    },
    synalis: {
      header: ["Dezember 2018", "December 2018"],
      workTitle: ["IT Consultant DMS/ECM"],
      companyName: ["synalis GmbH & Co. KG"],
      location: ["Bonn, Deutschland", "Bonn, Germany"],
    },
    bogotaBootcamp: {
      header: ["Oktober 2019", "October 2019"],
      courseName: ["Bogota Bootcamp"],
    },
    freelance: {
      header: ["Januar 2020", "January 2020"],
      jobTitle: ["Freelance Softwareentwickler", "Freelance Software Developer"],
    }
  },
}

function CvShort (props) {
    let languageIndex = props.langGerman ? 0 : 1
    return (<div>
              <section className="hero is-bold is-light">
                <div className="hero-body">
                  <h1 className="title is-bold is-1">
                    Reinhard Scheuerle
                  </h1>
                  <h2 className="subtitle is-4">
                    {data.timeline['welcome'][languageIndex]}
                  </h2>
                </div>
              </section>
              <Timeline langGerman={props.langGerman} languageIndex={languageIndex} />
            </div>);
}

function Timeline(props){
  let languageIndex = props.langGerman ? 0 : 1
  return (<div>
            <section className="section">
              <div className="timeline is-centered">
                <header className="timeline-header">
                  <span className="tag is-medium is-dark">{data.timeline['birthDate'][languageIndex]}</span>
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
                        <p className="heading">{data.timeline['bachelorMaastricht']['header']}</p>
                        <p>Start: <strong>{data.timeline['bachelorMaastricht']['study']}</strong></p>
                        <p>{data.timeline['bachelorMaastricht']['location'][languageIndex]}</p>
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
                        <p className="heading">{data.timeline['bachelorWhitworth']['header'][languageIndex]}</p>
                        <p><strong>{data.timeline['bachelorWhitworth']['study'][languageIndex]}</strong></p>
                        <p>{data.timeline['bachelorWhitworth']['schoolName'][languageIndex]}</p>
                        <p>{data.timeline['bachelorWhitworth']['location']}</p>
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
                        <p className="heading">{data.timeline['masterMaastricht']['header']}</p>
                        <p>Start: <strong>{data.timeline['masterMaastricht']['study']}</strong></p>
                        <p>{data.timeline['masterMaastricht']['location'][languageIndex]}</p>
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
                        <p className="heading">{data.timeline['masterVienna']['header'][languageIndex]}</p>
                        <p><strong>{data.timeline['masterVienna']['study'][languageIndex]}</strong></p>
                        <p>{data.timeline['masterVienna']['schoolName'][languageIndex]}</p>
                        <p>{data.timeline['masterVienna']['location'][languageIndex]}</p>
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
                        <p className="heading"><strong>{data.timeline['graduation']['header'][languageIndex]}</strong></p>
                      </div>
                    </div>
                </Pulse>
                <Fade top>
                    <div className="timeline-item">
                      <div className="timeline-marker is-primary"></div>
                      <div className="timeline-content">
                        <p className="heading">{data.timeline['bosch']['header'][languageIndex]}</p>
                        <p><strong>{data.timeline['bosch']['workTitle'][languageIndex]}</strong></p>
                        <p>{data.timeline['bosch']['companyName']}</p>
                        <p>{data.timeline['bosch']['location'][languageIndex]}</p>
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
                        <p className="heading">{data['timeline']['solactive']['header'][languageIndex]}</p>
                        <p><strong>{data['timeline']['solactive']['workTitle']}</strong></p>
                        <p>{data['timeline']['solactive']['companyName']}</p>
                        <p>{data['timeline']['solactive']['location'][languageIndex]}</p>
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
                        <p className="heading">{data['timeline']['synalis']['header'][languageIndex]}</p>
                        <p><strong>{data['timeline']['synalis']['workTitle']}</strong></p>
                        <p>{data['timeline']['synalis']['companyName']}</p>
                        <p>{data['timeline']['synalis']['location'][languageIndex]}</p>
                      </div>
                    </div>
                </Fade>
                <Fade top>
                    <div className="timeline-item">
                      <div className="timeline-marker is-icon is-link">
                      </div>
                      <div className="timeline-content">
                        <p className="heading">{data['timeline']['bogotaBootcamp']['header'][languageIndex]}</p>
                        <p>{data['timeline']['bogotaBootcamp']['courseName']}</p>
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
                        <p className="heading">{data['timeline']['freelance']['header'][languageIndex]}</p>
                        <p><strong>{data['timeline']['freelance']['jobTitle'][languageIndex]}</strong></p>
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