import React, { Fragment } from 'react'
import ReactTypingEffect from 'react-typing-effect';
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';

class CvLong extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            styles: {
                selected: {"backgroundColor": "#3298dc"},
                unSelected: {"backgroundColor": "#ffffff"},
            },
            profExperience: true,
            acadEducation: false,
            langStack: false,
            courses: false,
            phoneNumber: "+4915158359427‬",
            eyeClassNames: ["fas fa-eye", "fas fa-eye-slash"],
            content: {
                location: ["Berlin, Deutschland", "Berlin, Germany"],
                headerProfessionalExperience: [" Berufliche Erfahrung",  " Professional Experience"],
                headerAcademicEducation: [" Akademische Ausbildung",  " Academic education"],
                headerCourses: [ " Kurse",  " Courses"],
                headerLangStack: [" Sprachen & Stack",  " Languages & Stack"],
                professionalExperience: {
                    softwareDeveloper: {
                        title: ["Freelance Softwareentwickler", "Freelance Software Developer"],
                        time: ["01/2020 - momentan", "01/2020 - currently"],
                        header: [" Projekte", " Projects"],
                        projects: [": Full-Stack Entwicklung für ein Projekt der deutschen Handelskammer in Bogota. Wir entwickeln eine Plattform mit der Schulabgänger aus Lateinamerika sich für Studiengänge und Stipendien in Deutschland bewerben können. #NodeJS, #React, #MySQL, #AWS, #GIT",  ": Fullstack development for the german chamber of commerce in Bogota. We are building a platform that connects people from Latin America to german universities and scholarships. #NodeJS, #React, #MySQL, #AWS, #GIT"]
                    },
                    synalis: {
                        description: ["synalis ist eine mittelständische Firma, die sich auf die Bereiche DMS / ECM, ERP, CRM, Collaboration, Microsoft Cloud und Cyber Security spezialisiert", "synalis is a mid-sized IT company from Germany that specializes in the areas of DMS / ECM, ERP, CRM, Collaboration, Microsoft Cloud and Cyber Security"],
                        location: ["Bonn, Deutschland", "Bonn, Germany"],
                        header: ["Verantwortung und Aufgaben", "Responsibilities and Tasks"],
                        tasks: [
                            ["Einführung und Konfiguration von ELO (ELO ist ein Enterprise Content Management System aus Stuttgart)", "Implementation and configuration of ELO (ELO is an Enterprise Content Management (ECM) system from Stuttgart, Germany) on premise including its modular business solution packages."],
                            ["Entwicklung von benutzerdefinierten Skripten und Funktionen innerhalb des Tomcat Apache Servers (Verwendung von Javascript in Rhino Engine)", "Development of custom scripts and functions within the framework of Tomcat Apache (using Javascript in Rhino Engine)"],
                            ["Projektmanagement, von Beginn der Diagnose- /Analysephase bis zur produktiven Implementierung der Lösung", "Management of projects, starting from the diagnosis/analysis of the customer’s needs until and including the final implementation"],
                            ["Durchführung von Workshops des Anforderungsmanagements, Einfügung neuer digitaler Prozesse und Systemintegration", "Led workshops to determine customer needs, align digital processes and optimize system integration"],
                        ],
                    },
                    gapYear: {
                        description: ["2018 - Gap year", "2018 - Gap year"],
                        tasks: ["Reisen, Volunteering, lernte Spanisch, Python-programmierung", "Travelled, volunteered, learned Spanish, wrote Python Code"],
                    },
                    solactive: {
                        description: ["Solactive ist ein agiles, aggressiv expandierendes Fintech-Unternehmen spezialisiert auf Indexberechnung und passiv verwaltete Finanzprodukte", "Solactive is a fast paced, aggressively expansive Fintech company specialized in Index calculation and passively managed financial products"],
                        location: [ "Frankfurt, Deutschland", "Frankfurt, Germany"],
                        header: ["Verantwortung und Aufgaben", "Responsibilities and Tasks"],
                        tasks: [
                            ["IT-Projektmanagement, Testung und Freigabe von neuen Plattform-features für die Indexberechnung. Aufsetzung neuer Backend Kalkulationslogiken mit den Softwareentwicklern" ,"Managed IT projects, tested and released platform features for the index calculation. Set-up new back-end calculation logics with the developers"],
                            ["Selektion der Aktien für Indexneubalanzierungen" , "Performed the selection of equity stocks for index rebalancings"],
                            ["Kundenkontakt und Kundenbeziehungen" , "Direct customer contact and relationship management"],
                            ["Verantwortung für die Gewinnung und die Umsetzung neuer Finanzprodukte im Bereich Equity" , "Responsible for the acquisition and setup of new custom indices"],
                            ["Kontinuierliche Verbesserung der Prozesse zur Standardisierung in Verwendung von Python, VBA und SQL Databanken" , "Continuously improved processes to achieve standardization using Python, VBA and SQL Databases"],
                        ]
                    },
                    bosch: {
                        title: ["Qualitätsmanagement (Praktikum)", "Quality Management (Internship)"],
                        description: ["Bosch ist führender Zulieferer in der Automobilindustrie", "Bosch is a leader in the automotive supply industry and offers a vast variety of solutions"],
                        location: ["Brüssel, Belgien", "Brussels, Belgium"],
                        header: ["Verantwortung und Aufgaben", "Responsibilities and Tasks"],
                        tasks: [
                            ["Analyse und Prozessverbesserung von verkauften Teilen mit Qualitätsproblemen", "Analysis and process improvement of sold parts with quality concerns"],
                            ["Erstellung und Optimierung von monatlichen Berichten unter Verwendung von Excel und VBA", "Created and optimized reports on a monthly basis by using Excel and VBA"],
                        ]
                    }
                },
                academicEducation: {
                    master: {
                        maastricht: {
                            schoolName: ["Maastricht University, School of Business and Economics"],
                            time: ["09/2013 - 06/2015"],
                            location: ["Maastricht, Niederlande", "Maastricht, the Netherlands"],
                            studyName: ["Master of Science: International Business - Strategy & Innovation"],
                            thesis: ["Die Masterarbeit untersuchte den Einfluss von Eigentümerstrukturen auf abnormale Marktleistungen die durch die Veräußerung von Unternehmensteilen entstehen", "Master thesis investigated the effect of ownership structures on divestiture abnormal market performance"],
                        },
                        vienna: {
                            schoolName: ["Wirtschaftsuniversität Wien", "Vienna University of Economics and Business"],
                            time: ["10/2014 - 02/2015"],
                            location: ["Wien, Österreich", "Vienna, Austria"],
                            studyName: ["Auslandssemester", "Study Abroad"],
                        }
                    },
                    bachelor: {
                        maastricht: {
                            schoolName: ["Maastricht University, School of Business and Economics"],
                            time: ["09/2009 - 09/2013"],
                            location: ["Maastricht, Niederlande", "Maastricht, the Netherlands"],
                            studyName: ["Bachelor of Science: International Business - Finance"],
                            thesis: ["Die Bachelorarbeit analysierte die anfängliche IPO-Performance und deren Zusammenhang mit der IPO-Preisfestsetzung", "Bachelor thesis analyzed initial IPO performance and its relation to IPO pricing"],
                        },
                        whitworth: {
                            schoolName: ["Whitworth University"],
                            time: ["02/2012 - 06/2012"],
                            location: ["Spokane, USA"],
                            studyName: ["Auslandssemester", "Study Abroad"],
                        }
                    }
                },
                courses: {
                    bogotaBootCamp: {
                        courseName: ["Full-Stack Entwicklerkurs", "Full-stack developer course"],
                        courseProviderName: ["Bogota Bootcamp"],
                        description: ["Bogota Bootcamp unterrichtet Fullstack-Entwicklung mit Ruby on Rails und React", "Bogota Bootcamp teaches full-stack development with Ruby on Rails and React"],
                        time: ["10/2019 - 12/2019"],
                        location: ["Bogota, Kolumbien", "Bogota, Colombia"],
                        header: ["Kursinhalte", "Course contents"],
                        courseContents: [
                            ["Ruby on Rails als full-stack framework", "Ruby on Rails as a Full-Stack Framework"],
                            ["React (Front-end)", "React (Front-end)"],
                            ["SQL (PG, Sqlite) und NoSQL Datenbanken (Firebase)", "SQL (PG, Sqlite) and NoSQL databases (Firebase)"],
                            ["Javascript, Ajax und jQuery", "Javascript, Ajax and jQuery"],
                            ["HTML, CSS, Bootstrap und Bulma", "HTML, CSS, Bootstrap and Bulma"],
                            ["AWS tools", "AWS tools"],
                            ["GIT & GitHub", "GIT & GitHub"],
                        ],
                    }
                },
                langStack: {
                    languages: [
                                    {
                                        content: ["Deutsch", "German"],
                                        className: "progress is-primary ui-progressbar-value",
                                        value: 100
                                    },
                                    {
                                        content: [ "Englisch", "English"],
                                        className: "progress is-primary",
                                        value: 95,
                                    },
                                    {
                                        content: ["Spanisch", "Spanish"],
                                        className: "progress is-primary",
                                        value: 82,
                                    },
                                    {
                                        content: ["Französisch", "French"],
                                        className: "progress is-primary",
                                        value: 15,
                                    },
                                    {
                                        content: ["Niederländisch", "Dutch"],
                                        className: "progress is-primary",
                                        value: 30,
                                    }                 
                    ],
                    programmingLanguages: {
                        languages: [
                            "Python 3",
                            "Javascript - ES6",
                            "Ruby",
                            "MySQL",
                            "Postgre SQL",
                            "MS SQL Server",
                            "MongoDB",
                            "HTML 5",
                            "Bootstrap",
                            "Bulma",
                            "CSS",
                            "Ajax",
                            "jQuery",
                            "React",
                            "NodeJS",
                            "Ruby on Rails",
                            "Git",
                        ],

                    }
                }
            }
        }

        this.toggleSegment = this.toggleSegment.bind(this)
    }

    toggleSegment(segmentName){
        let update = {}
        update["profExperience"] = false;
        update["acadEducation"] = false;
        update["langStack"] = false;
        update["courses"] = false;
        update[segmentName] = !this.state[segmentName]
        this.setState(update)
    }

    

    TitleHeader = (props) => {

        function formatPhoneNumber(phoneNumberString) {
            let pre = phoneNumberString[0] + phoneNumberString[1] + phoneNumberString[2]
            let mid = phoneNumberString[3] + phoneNumberString[4] + phoneNumberString[5]
            let end = phoneNumberString
            .split("").map((number, index) => {if(index > 5) return number})
            .filter(item => item!==undefined)
            .reduce((i,j) => i.toString()+j.toString())
            return `${pre} (${mid}) ${end}`
        }
    
        return (<div>
                    <section className="hero">
                        <div className="hero-body">
                            <div className="container has-text-centered">
                                <div className="columns is-centered">
                                    <div className="column is-one-fifth">
                                        <div className="columns is-centered">
                                            <div className="column">
                                                <div className="tile is-ancestor">
                                                    <div className="tile is-1 is-parent">
                                                        <article className="tile is-child box">
                                                            <div className="level">
                                                                <div className="level-item">
                                                                    <figure className="image is-128x128">
                                                                        <img className="is-rounded" alt="Profile_picture" src={process.env.PUBLIC_URL + "/profile_picture_icon.JPG"} />
                                                                    </figure>
                                                                </div>
                                                            </div>
                                                        </article>
                                                    </div>
                                                </div> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="level">
                                            <div className="level-left">
                                                <div className="level-item">
                                                    <h1 className="title is-bold is-1">
                                                        Reinhard Scheuerle
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="level">
                                            <div className="level-left">
                                                <div className="level-item">
                                                    <h2 className="subtitle is-4 has-text-left">
                                                        <ReactTypingEffect
                                                        text="Full-stack developer"
                                                        />
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="level">
                                            <div className="level-left">
                                                <div className="level-item">
                                                    <figure className="image is-32x32">
                                                        <img src={require("./whatsapp.png")} />
                                                    </figure>
                                                    <a className="subtitle is-6" target="_blank" href={`https://api.whatsapp.com/send?phone=${props.phoneNumber}‬`} alt="whatsapp">
                                                    {formatPhoneNumber(props.phoneNumber)}
                                                    </a>
                                                </div>
                                                <div className="level-item">
                                                    <figure className="image is-32x32">
                                                        <img src={require("./location-pin-icon-13.jpg")} alt="location" />
                                                    </figure> 
                                                    <p className="subtitle is-6">
                                                        {this.state.content['location'][props.languageIndex]}
                                                    </p>
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>)
        
    }


    ProfessionalExperience = (props) => {
        return (<Fragment>
                    <section className="hero is-bold has-background-info">
                        <div className="hero-body">
                            <h1 className="title is-2 has-text-centered has-text-white-ter">
                                {/* <button className="button is-outlined is-link" onClick={() => this.toggleSegment("profExperience")}>
                                    <span className="icon is-large">
                                        <i className={this.state.profExperience ? this.state.eyeClassNames[1] : this.state.eyeClassNames[0]}></i>
                                    </span>
                                </button> */}
                                {this.state.content['headerProfessionalExperience'][props.languageIndex]}
                            </h1>    
                        </div>
                    </section>
                    <div>
                        <section className="hero is-light is-bold">
                            <div className="hero-body">
                                <div className="container has-text-centered">
                                    <div className="columns">
                                        <div className="column is-5 is-narrow">
                                            <h1 className="title is-3 has-text-left-tablet">{this.state.content['professionalExperience']['softwareDeveloper']['title'][props.languageIndex]}</h1>
                                            <h5 className="subtitle is-6 has-text-left-tablet"></h5>
                                            <div className="level">
                                                <div className="level-left">
                                                    <div className="level-item">
                                                        <figure className="image is-32x32" style={{"marginRight":"0.5em"}}>
                                                            <i className="far fa-calendar-alt fa-2x" style={{color:"#3298dc"}} alt="calender"></i>
                                                        </figure> 
                                                        <p className="subtitle is-6">
                                                            {this.state.content['professionalExperience']['softwareDeveloper']['time'][props.languageIndex]}
                                                        </p>
                                                    </div>
                                                    <div className="level-item">
                                                        <figure className="image is-32x32">
                                                            <img src={require("./location-pin-icon-13.jpg")} alt="location" />
                                                        </figure> 
                                                        <p className="subtitle is-6">
                                                        Remote
                                                        </p>
                                                    </div>
                                                </div> 
                                            </div>
                                            
                                        </div>
                                        <div className="column is-offset-1 is-5 is-narrow">
                                            <h5 className="subtitle is-5 has-text-left-tablet">{this.state.content['professionalExperience']['softwareDeveloper']['header'][props.languageIndex]}</h5>
                                            <div className="content">
                                                <ul className="has-text-left">
                                                    <li><u><a href="http://www.daxosline.com">Daxos</a></u>
                                                        {this.state.content['professionalExperience']['softwareDeveloper']['projects'][props.languageIndex]}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="hero is-light is-bold">
                            <div className="hero-body">
                                <div className="container has-text-centered">
                                    <div className="columns">
                                        <div className="column is-5 is-narrow">
                                            <h1 className="title is-3 has-text-left-tablet">IT Consultant DMS/ECM</h1>
                                            <h5 className="subtitle is-5 has-text-left-tablet"><a href="//www.synalis.de">synalis GmbH & Co. KG</a></h5>
                                            <h5 className="subtitle is-6 has-text-left-tablet">{this.state.content['professionalExperience']['synalis']['description'][props.languageIndex]}</h5>
                                            <div className="level">
                                                <div className="level-left">
                                                    <div className="level-item">
                                                        <figure className="image is-32x32" style={{"marginRight":"0.5em"}}>
                                                            <i className="far fa-calendar-alt fa-2x" style={{color:"#3298dc"}} alt="calender"></i>
                                                        </figure> 
                                                        <p className="subtitle is-6">
                                                        12/2018 - 10/2019
                                                        </p>
                                                    </div>
                                                    <div className="level-item">
                                                        <figure className="image is-32x32">
                                                            <img src={require("./location-pin-icon-13.jpg")} alt="location" />
                                                        </figure> 
                                                        <p className="subtitle is-6">
                                                            {this.state.content['professionalExperience']['synalis']['location'][props.languageIndex]}
                                                        </p>
                                                    </div>
                                                </div> 
                                            </div>
                                            
                                        </div>
                                        <div className="column is-offset-1 is-5 is-narrow">
                                            <h5 className="subtitle is-5 has-text-left-tablet">{this.state.content['professionalExperience']['synalis']['header'][props.languageIndex]}</h5>
                                            <div className="content">
                                                <ul className="has-text-left">
                                                    {this.state.content['professionalExperience']['synalis']['tasks'].map((item, index) => {
                                                        return (<li>{item[props.languageIndex]}</li>)
                                                    })}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="hero is-light is-bold">
                            <div className="hero-body">
                                <div className="container has-text-centered">
                                    <div className="columns">
                                        <div className="column is-5 is-narrow">
                                            {this.state.content['professionalExperience']['gapYear']['description'][props.languageIndex]}
                                        </div>
                                        <div className="column  is-offset-1 is-5 is-narrow">
                                            {this.state.content['professionalExperience']['gapYear']['tasks'][props.languageIndex]}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="hero is-light is-bold">
                            <div className="hero-body">
                                <div className="container has-text-centered">
                                    <div className="columns">
                                        <div className="column is-5 is-narrow">
                                            <h1 className="title is-3 has-text-left-tablet">Equity Index Analyst</h1>
                                            <h5 className="subtitle is-5 has-text-left-tablet"><a href="//www.solactive.com">Solactive AG</a></h5>
                                            <h5 className="subtitle is-6 has-text-left-tablet">{this.state.content['professionalExperience']['solactive']['description'][props.languageIndex]}</h5>
                                            <div className="level">
                                                <div className="level-left">
                                                    <div className="level-item">
                                                        <figure className="image is-32x32" style={{"marginRight":"0.5em"}}>
                                                            <i className="far fa-calendar-alt fa-2x" style={{color:"#3298dc"}} alt="calender"></i>
                                                        </figure> 
                                                        <p className="subtitle is-6">
                                                            06/2016 - 01/2018
                                                        </p>
                                                    </div>
                                                    <div className="level-item">
                                                        <figure className="image is-32x32">
                                                            <img src={require("./location-pin-icon-13.jpg")} alt="location" />
                                                        </figure> 
                                                        <p className="subtitle is-6">
                                                            {this.state.content['professionalExperience']['solactive']['location'][props.languageIndex]}
                                                        </p>
                                                    </div>
                                                </div> 
                                            </div>
                                        </div>
                                        <div className="column  is-offset-1 is-5 is-narrow">
                                            <h5 className="subtitle is-5 has-text-left-tablet">{this.state.content['professionalExperience']['solactive']['header'][props.languageIndex]}</h5>
                                            <div className="content">
                                                <ul className="has-text-left">
                                                    {this.state.content['professionalExperience']['solactive']['tasks'].map((item, index) => {
                                                        return (<li>{item[props.languageIndex]}</li>)
                                                    })}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="hero is-light is-bold">
                            <div className="hero-body">
                                <div className="container has-text-centered">
                                    <div className="columns">
                                        <div className="column is-5 is-narrow">
                                            <h1 className="title is-3 has-text-left-tablet">{this.state.content['professionalExperience']['bosch']['title'][props.languageIndex]}</h1>
                                            <h5 className="subtitle is-5 has-text-left-tablet"><a href="//www.solactive.com">Robert Bosch GmbH</a></h5>
                                            <h5 className="subtitle is-6 has-text-left-tablet">{this.state.content['professionalExperience']['bosch']['description'][props.languageIndex]}</h5>
                                            <div className="level">
                                                <div className="level-left">
                                                    <div className="level-item">
                                                        <figure className="image is-32x32" style={{"marginRight":"0.5em"}}>
                                                            <i className="far fa-calendar-alt fa-2x" style={{color:"#3298dc"}} alt="calender"></i>
                                                        </figure> 
                                                        <p className="subtitle is-6">
                                                            06/2015 - 05/2016
                                                        </p>
                                                    </div>
                                                    <div className="level-item">
                                                        <figure className="image is-32x32">
                                                            <img src={require("./location-pin-icon-13.jpg")} alt="location" />
                                                        </figure> 
                                                        <p className="subtitle is-6">
                                                            {this.state.content['professionalExperience']['bosch']['location'][props.languageIndex]}
                                                        </p>
                                                    </div>
                                                </div>   
                                            </div>
                                        </div>
                                        <div className="column  is-offset-1 is-5 is-narrow">
                                            <h5 className="subtitle is-5 has-text-left-tablet">{this.state.content['professionalExperience']['bosch']['header'][props.languageIndex]}</h5>
                                            <div className="content">
                                                <ul className="has-text-left">
                                                    {this.state.content['professionalExperience']['bosch']['tasks'].map((item, index) => {
                                                        return (<li>{item[props.languageIndex]}</li>)
                                                    })}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </Fragment>)
    }

    AcademicEducation = (props) => {
        return (<Fragment>
                    <section className="hero is-bold has-background-info">
                        <div className="hero-body">
                            <h1 className="title is-2 has-text-centered has-text-white-ter">
                                {/* <button className="button is-outlined is-link" onClick={() => this.toggleSegment("acadEducation")}>
                                    <span className="icon">
                                        <i className={this.state.acadEducation ? this.state.eyeClassNames[1] : this.state.eyeClassNames[0]}></i>
                                    </span>
                                </button> */}
                                {this.state.content['headerAcademicEducation'][props.languageIndex]}
                            </h1>
                        </div>
                    </section>
                    <div>
                        <section className="hero is-light is-bold">
                            <div className="hero-body">
                                <div className="container has-text-centered">
                                    <div className="columns">
                                        <div className="column is-5 is-narrow">
                                            <h1 className="title is-3 has-text-left-tablet"><a href="//www.maastrichtuniversity.nl/">{this.state.content['academicEducation']['master']['maastricht']['schoolName']}</a></h1>
                                            <div className="level">
                                                <div className="level-left">
                                                    <div className="level-item">
                                                        <figure className="image is-32x32" style={{"marginRight":"0.5em"}}>
                                                            <i className="far fa-calendar-alt fa-2x" style={{color:"#3298dc"}} alt="calender"></i>
                                                        </figure> 
                                                        <p className="subtitle is-6">
                                                            {this.state.content['academicEducation']['master']['maastricht']['time']}
                                                        </p>
                                                    </div>
                                                    <div className="level-item">
                                                        <figure className="image is-32x32">
                                                            <img src={require("./location-pin-icon-13.jpg")} alt="location" />
                                                        </figure> 
                                                        <p className="subtitle is-6">
                                                            {this.state.content['academicEducation']['master']['maastricht']['location'][props.languageIndex]}
                                                        </p>
                                                    </div>
                                                </div> 
                                            </div>
                                        </div>
                                        <div className="column is-offset-1 is-5 is-narrow">
                                            <h5 className="subtitle is-5 has-text-left-tablet">{this.state.content['academicEducation']['master']['maastricht']['studyName']}</h5>
                                            <div className="content">
                                                <ul className="has-text-left">
                                                    <li>{this.state.content['academicEducation']['master']['maastricht']['thesis'][props.languageIndex]}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="hero is-light is-bold">
                            <div className="hero-body">
                                <div className="container has-text-centered">
                                    <div className="columns">
                                        <div className="column is-5 is-narrow">
                                            <h1 className="title is-3 has-text-left-tablet"><a href="//www.wu.ac.at/">{this.state.content['academicEducation']['master']['vienna']['schoolName'][props.languageIndex]}</a></h1>
                                            <div className="level">
                                                <div className="level-left">
                                                    <div className="level-item">
                                                        <figure className="image is-32x32" style={{"marginRight":"0.5em"}}>
                                                            <i className="far fa-calendar-alt fa-2x" style={{color:"#3298dc"}} alt="calender"></i>
                                                        </figure>
                                                        <p className="subtitle is-6">
                                                            {this.state.content['academicEducation']['master']['vienna']['time']}
                                                        </p> 
                                                    </div>
                                                    <div className="level-item">
                                                        <figure className="image is-32x32">
                                                            <img src={require("./location-pin-icon-13.jpg")} alt="location" />
                                                        </figure> 
                                                        <p className="subtitle is-6">
                                                            {this.state.content['academicEducation']['master']['vienna']['location'][props.languageIndex]}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="column  is-offset-1 is-5 is-narrow">
                                            <h5 className="subtitle is-5 has-text-left-tablet">{this.state.content['academicEducation']['master']['vienna']['studyName'][props.languageIndex]}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="hero is-light is-bold">
                            <div className="hero-body">
                                <div className="container has-text-centered">
                                    <div className="columns">
                                        <div className="column is-5 is-narrow">
                                            <h1 className="title is-3 has-text-left-tablet"><a href="//www.maastrichtuniversity.nl/">{this.state.content['academicEducation']['bachelor']['maastricht']['schoolName']}</a></h1>
                                            <div className="level">
                                                <div className="level-left">
                                                    <div className="level-item">
                                                        <figure className="image is-32x32" style={{"marginRight":"0.5em"}}>
                                                            <i className="far fa-calendar-alt fa-2x" style={{color:"#3298dc"}} alt="calender"></i>
                                                        </figure>
                                                        <p className="subtitle is-6">
                                                            {this.state.content['academicEducation']['bachelor']['maastricht']['time']}
                                                        </p>
                                                    </div>
                                                    <div className="level-item">
                                                        <figure className="image is-32x32">
                                                            <img src={require("./location-pin-icon-13.jpg")} alt="location" />
                                                        </figure> 
                                                        <p className="subtitle is-6">
                                                            {this.state.content['academicEducation']['bachelor']['maastricht']['location'][props.languageIndex]}
                                                        </p>
                                                    </div>
                                                </div>  
                                            </div>
                                        </div>
                                        <div className="column  is-offset-1 is-5 is-narrow">
                                            <h5 className="subtitle is-5 has-text-left-tablet">{this.state.content['academicEducation']['bachelor']['maastricht']['studyName']}</h5>
                                            <div className="content">
                                                <ul className="has-text-left">
                                                    <li>{this.state.content['academicEducation']['bachelor']['maastricht']['thesis'][props.languageIndex]}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="hero is-light is-bold">
                            <div className="hero-body">
                                <div className="container has-text-centered">
                                    <div className="columns">
                                        <div className="column is-5 is-narrow">
                                            <h1 className="title is-3 has-text-left-tablet"><a href="//www.whitworth.edu/">{this.state.content['academicEducation']['bachelor']['whitworth']['schoolName']}</a></h1>
                                            <div className="level">
                                                <div className="level-left">
                                                    <div className="level-item">
                                                        <figure className="image is-32x32" style={{"marginRight":"0.5em"}}>
                                                            <i className="far fa-calendar-alt fa-2x" style={{color:"#3298dc"}} alt="calender"></i>
                                                        </figure> 
                                                        <p className="subtitle is-6">
                                                            {this.state.content['academicEducation']['bachelor']['whitworth']['time']}
                                                        </p>
                                                    </div>
                                                    <div className="level-item">
                                                        <figure className="image is-32x32">
                                                            <img src={require("./location-pin-icon-13.jpg")} alt="location" />
                                                        </figure> 
                                                        <p className="subtitle is-6">
                                                        {this.state.content['academicEducation']['bachelor']['whitworth']['location']}
                                                        </p>
                                                    </div>
                                                </div>   
                                            </div>
                                        </div>
                                        <div className="column  is-offset-1 is-5 is-narrow">
                                            <h5 className="subtitle is-5 has-text-left-tablet">{this.state.content['academicEducation']['bachelor']['whitworth']['studyName'][props.languageIndex]}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </Fragment>)
    }

    Courses = (props) => {
        return (<Fragment>
                    <section className="hero is-bold has-background-info">
                        <div className="hero-body">
                            <h1 className="title is-2 has-text-centered has-text-white-ter">
                                {/* <button className="button is-outlined is-link" onClick={() => this.toggleSegment("courses")}>
                                    <span className="icon">
                                        <i className={this.state.courses ? this.state.eyeClassNames[1] : this.state.eyeClassNames[0]}></i>
                                    </span>
                                </button> */}
                                {this.state.content['headerCourses'][props.languageIndex]}
                            </h1>
                        </div>
                    </section>
                    <div>
                        <section className="hero is-light is-bold">
                            <div className="hero-body">
                                <div className="container has-text-centered">
                                    <div className="columns">
                                        <div className="column is-5 is-narrow">
                                            <h1 className="title is-3 has-text-left-tablet">{this.state.content['courses']['bogotaBootCamp']['courseName'][props.languageIndex]}</h1>
                                            <h5 className="subtitle is-5 has-text-left-tablet"><a href="//www.bogotabootcamp.com">{this.state.content['courses']['bogotaBootCamp']['courseProviderName'][props.languageIndex]}</a></h5>
                                            <h5 className="subtitle is-6 has-text-left-tablet">{this.state.content['courses']['bogotaBootCamp']['description'][props.languageIndex]}</h5>
                                            <div className="level">
                                                <div className="level-left">
                                                    <div className="level-item">
                                                        <figure className="image is-32x32" style={{"marginRight":"0.5em"}}>
                                                            <i className="far fa-calendar-alt fa-2x" style={{color:"#3298dc"}} alt="calender"></i>
                                                        </figure> 
                                                        <p className="subtitle is-6">
                                                            {this.state.content['courses']['bogotaBootCamp']['time']}
                                                        </p>
                                                    </div>
                                                    <div className="level-item">
                                                        <figure className="image is-32x32">
                                                            <img src={require("./location-pin-icon-13.jpg")} alt="location" />
                                                        </figure> 
                                                        <p className="subtitle is-6">
                                                            {this.state.content['courses']['bogotaBootCamp']['location'][props.languageIndex]}
                                                        </p>
                                                    </div>
                                                </div> 
                                            </div>
                                        </div>
                                        <div className="column is-offset-1 is-5 is-narrow">
                                            <h5 className="subtitle is-5 has-text-left-tablet">{this.state.content['courses']['bogotaBootCamp']['header'][props.languageIndex]}</h5>
                                            <div className="content">
                                                <ul className="has-text-left">
                                                    {this.state.content['courses']['bogotaBootCamp']['courseContents'].map((item, index) => {
                                                        return <li>{item[props.languageIndex]}</li>
                                                    })}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </Fragment>)
    }

    LangStack = (props) => {

        return (<Fragment>
                    <section className="hero is-bold has-background-info">
                        <div className="hero-body">
                            <h1 className="title is-2 has-text-centered has-text-white-ter">
                            {/* <button className="button is-outlined is-link" onClick={() => this.toggleSegment("langStack")}>
                                    <span className="icon">
                                        <i className={this.state.langStack ? this.state.eyeClassNames[1] : this.state.eyeClassNames[0]}></i>
                                    </span>
                            </button> */}
                            {this.state.content['headerLangStack'][props.languageIndex]}
                            </h1>
                        </div>
                    </section>
                    <div>
                        <section className="hero is-light is-bold">
                            <div className="hero-body">
                                <div className="container has-text-centered">
                                    <div className="columns">
                                    
                                        <div className="column is-5 is-narrow">
                                            {this.state.content['langStack']['languages'].map((item, index) => {
                                                return <h5 className="subtitle is-5 has-text-left-tablet">{item['content'][props.languageIndex]} <progress className={item['className']} value={item['value']} max="100">{item['value']}%</progress></h5>
                                            })}
                                        </div>
                                        <div className="column  is-offset-1 is-5 is-narrow">
                                            <div className="field is-grouped is-grouped-multiline">
                                                
                                                {this.state.content['langStack']['programmingLanguages']['languages'].map((item, index) => {
                                                    return (<div className="control">
                                                                <Roll top>
                                                                    <div className="tags has-addons">
                                                                        <p className="tag is-link is-large">{item}</p>
                                                                    </div>
                                                                </Roll>
                                                            </div>)
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </Fragment>)
    }


    render(){
        let languageIndex = this.props.langGerman ? 0 : 1
        return (<div>
                    <this.TitleHeader phoneNumber={this.state.phoneNumber} currentLocation={this.state.currentLocation} languageIndex={languageIndex} />
                    <div className="container">
                        <div className="tabs is-centered is-fullwidth is-boxed">
                            <ul>
                                <li onClick={() => this.toggleSegment("profExperience")} 
                                    className={this.state.profExperience ? "is-active" : ""}
                                    // style={this.state.profExperience ? this.state.styles['selected'] : this.state.styles['unSelected']}
                                >
                                    <a>
                                        <span className="icon is-small"><i className="fas fa-briefcase" aria-hidden="true"></i></span>
                                        <span>{this.state.content['headerProfessionalExperience'][languageIndex]}</span>
                                    </a>
                                </li>
                                <li onClick={() => this.toggleSegment("acadEducation")} 
                                    className={this.state.acadEducation ? "is-active" : ""}
                                >
                                    <a>
                                        <span className="icon is-small"><i className="fas fa-university" aria-hidden="true"></i></span>
                                        <span>{this.state.content['headerAcademicEducation'][languageIndex]}</span>
                                    </a>
                                </li>
                                <li onClick={() => this.toggleSegment("courses")} 
                                    className={this.state.courses ? "is-active" : ""}
                                >
                                    <a>
                                        <span className="icon is-small"><i className="fas fa-scroll" aria-hidden="true"></i></span>
                                        <span>{this.state.content['headerCourses'][languageIndex]}</span>
                                    </a>
                                </li>
                                <li onClick={() => this.toggleSegment("langStack")} 
                                    className={this.state.langStack ? "is-active" : ""}
                                >
                                    <a>
                                        <span className="icon is-small"><i className="fas fa-cubes" aria-hidden="true"></i></span>
                                        <span>{this.state.content['headerLangStack'][languageIndex]}</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {this.state.profExperience ? <this.ProfessionalExperience languageIndex={languageIndex} /> : <Fragment></Fragment>}
                    {this.state.acadEducation ? <this.AcademicEducation languageIndex={languageIndex} /> : <Fragment></Fragment>}
                    {this.state.courses ? <this.Courses languageIndex={languageIndex} /> : <Fragment></Fragment>}
                    {this.state.langStack ? <this.LangStack languageIndex={languageIndex} /> : <Fragment></Fragment>}

                    
                    {/* <Fade left when={this.state.profExperience}>
                        <this.ProfessionalExperience languageIndex={languageIndex} />
                    </Fade> */}
                    
                    {/* <Fade left when={this.state.acadEducation}>
                        <this.AcademicEducation languageIndex={languageIndex} />
                    </Fade> */}
                    
                    
                    {/* <Fade left when={this.state.courses}>
                        <this.Courses languageIndex={languageIndex} />
                    </Fade> */}
                    
                    {/* <Fade left when={this.state.langStack}>
                        <this.LangStack languageIndex={languageIndex} />
                    </Fade> */}
                </div>);
    }
}

export default CvLong;