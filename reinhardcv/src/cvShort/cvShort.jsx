import React, { Fragment } from 'react';
import LightSpeed from 'react-reveal/LightSpeed';

let data = {
  timeline: {
    welcome: ["Willkommen auf meiner Timeline", "Welcome to my timeline"],
    years: [
      {
        year: ["Geboren am 14.05.1990", "Born on 14.05.1990"],
        className: "tag is-medium is-dark",
        items: [
          {
            divClassName: "timeline-marker",
            type: "study",
            header: ["", ""],
            study: ["", ""],
            schoolName: ["", ""],
            location: ["", ""],

          },
        ],
      },
      {
        year: ["2009", "2009"],
        className: "tag is-medium is-dark",
        items: [
          {
            divClassName: "timeline-marker is-icon is-link",
            type: "study",
            header: ["September 2009", "September 2009"],
            study: ["Bachelor of Science: International Business - Finance", "Bachelor of Science: International Business - Finance"],
            schoolName: ["Maastricht University", "Maastricht University"],
            location: ["Maastricht, Niederlande", "Maastricht, the Netherlands"],
          },
        ],        
      },
      {
        year: ["2012", "2012"],
        className: "tag is-medium is-dark",
        items: [
          {
            divClassName: "timeline-marker is-link",
            type: "study",
            header: ["Januar 2012", "January 2012"],
            study: [ "Auslandssemester", "Study Abroad"],
            schoolName: ["Whitworth University", "Whitworth University"],
            location: ["Spokane, USA", "Spokane, USA"],
          },
        ],        
      },
      {
        year: ["2013", "2013"],
        className: "tag is-medium is-dark",
        items: [
          {
            divClassName: "timeline-marker is-icon is-link",
            type: "study",
            header: ["September 2013", "September 2013"],
            study: ["Master of Science: International Business - Strategy & Innovation", "Master of Science: International Business - Strategy & Innovation"],
            schoolName: ["Maastricht University", "Maastricht University"],
            location: ["Maastricht, Niederlande", "Maastricht, the Netherlands"],
          },
        ],        
      },
      {
        year: ["2014", "2014"],
        className: "tag is-medium is-dark",
        items: [
          {
            divClassName: "timeline-marker is-link",
            type: "study",
            header: ["Oktober 2014", "October 2014"],
            study: ["Auslandssemester", "Study Abroad"],
            schoolName: ["Wirtschaftsuniversität Wien", "Vienna University of Economics and Business"],
            location: ["Wien, Österreich", "Vienna, Austria"],
          },
        ],        
      },
      {
        year: ["2015", "2015"],
        className: "tag is-medium is-dark",
        items: [
          {
            divClassName: "timeline-marker is-icon is-link",
            type: "study",
            schoolName: "",
            study : ["Abschluss", "Graduation"],
            header: ["", ""],
            location: ["", ""],
          },
          {
            divClassName: "timeline-marker is-primary",
            type: "work",
            header: ["Juni 2015", "June 2015"],
            workTitle: ["Qualitätsmanagement (Praktikum)", "Quality Management (Internship)"],
            companyName: ["Robert Bosch GmbH", "Robert Bosch GmbH"],
            location: ["Brüssel, Belgien", "Brussels, Belgium"],
          },
        ],        
      },
      {
        year: ["2016", "2016"],
        className: "tag is-medium is-dark",
        items: [
          {
            divClassName: "timeline-marker is-icon is-primary",
            type: "work",
            header: ["Juni 2016", "June 2016"],
            workTitle: ["Equity Index Analyst", "Equity Index Analyst"],
            companyName: ["Solactive AG", "Solactive AG"],
            location: ["Frankfurt, Deutschland", "Frankfurt, Germany"],
          },
        ],        
      },
      {
        year: ["2018 - Gap year", "2018 - Gap year"],
        className: "tag is-dark",
        items: [
          {
            divClassName: "timeline-marker is-icon is-primary",
            type: "work",
            header: ["Dezember 2018", "December 2018"],
            workTitle: ["IT Consultant DMS/ECM", "IT Consultant DMS/ECM"],
            companyName: ["synalis GmbH & Co. KG", "synalis GmbH & Co. KG"],
            location: ["Bonn, Deutschland", "Bonn, Germany"],
          },
          {
            divClassName: "timeline-marker is-icon is-link",
            type: "course",
            header: ["Oktober 2019", "October 2019"],
            courseName: ["Bogota Bootcamp", "Bogota Bootcamp"],
            location: ["Bogota, Kolumbien", "Bogota, Colombia"],
          },
        ],        
      },
      {
        year: ["2020", "2020"],
        className: "tag is-medium is-dark",
        items: [
          {
            divClassName: "timeline-marker is-icon is-primary",
            type: "work",
            header: ["Januar 2020", "January 2020"],
            workTitle: ["Freelance Softwareentwickler", "Freelance Software Developer"],
            companyName: ["", ""],
            location: ["", ""]
          },
          {
            divClassName: "timeline-marker is-icon is-primary",
            type: "work",
            header: ["Oktober 2020", "October 2020"],
            workTitle: ["Softwareentwickler", "Software Developer"],
            companyName: ["Jonas und der Wolf GmbH", "Jonas und der Wolf GmbH"],
            location: ["Berlin, Deutschland", "Berlin, Germany"],
          },
        ],        
      },
      {
        year: ["Heute", "Today"],
        className: "tag is-medium is-dark",
        items: [],
      },
    ],
  },
}

function CvShort (props) {
    let languageIndex = props.langGerman ? 0 : 1
    return (<div>
              <section className="hero is-bold is-light">
                <div className="hero-body has-text-centered">
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
  let renderItem = (item) => {
    return (
      <Fragment>
        <header className="timeline-header">
          <span className={item['className']}>{item['year'][languageIndex]}</span>
        </header>
         {item['items'].map((yearItem, index) => {
            let content1, content2, content3;
            if(yearItem['type'] == 'study'){
              content1 = "study"
              content2 = "schoolName"
              content3 = "location"
            }
            else if(yearItem['type'] == 'work') {
              content1 = "workTitle"
              content2 = "companyName"
              content3 = "location"
            }
            else if(yearItem['type'] == 'course') {
              content1 = "courseName"
              content3 = "location"
            }
           
           return(
             <Fragment>
               <LightSpeed left>
                  <div className="timeline-item">
                    <div className={yearItem['divClassName']}></div>
                    <div className="timeline-content">
                      <p className="heading">{yearItem['header'][languageIndex]}</p>
                      {
                        content1
                        ? <p><strong>{yearItem[content1][languageIndex]}</strong></p>
                        : <Fragment></Fragment>
                      }
                      {
                        content2
                        ? <p>{yearItem[content2][languageIndex]}</p>
                        : <Fragment></Fragment>
                      }
                      {
                        content3
                        ? <p>{yearItem[content3][languageIndex]}</p>
                        : <Fragment></Fragment>
                      }
                    </div>
                  </div>
                </LightSpeed>
             </Fragment>)
         })}
      </Fragment>
    )

  }

  return (
          <div>
            <section className="section">
              <div className="timeline is-centered">
                {data.timeline.years.map(renderItem)}
              </div>
            </section>
          </div>
          )
}

export default CvShort;