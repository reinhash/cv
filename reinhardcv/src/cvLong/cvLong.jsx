import React from 'react'
import ReactTypingEffect from 'react-typing-effect';
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';

class CvLong extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            profExperience: true,
            acadEducation: true,
            langStack: true,
            courses: true,
            phoneNumber: "+4915158359427‬",
            currentLocation: "Bogota, Colombia",
            currentLocationGER: "Bogota, Kolumbien",
            eyeClassNames: ["fas fa-eye", "fas fa-eye-slash"]
        }

        this.toggleSegment = this.toggleSegment.bind(this)
    }

    toggleSegment(segmentName){
        let update = {}
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
                                                    {this.props.langGerman ? this.state.currentLocationGER : this.state.currentLocation}
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


    ProfessionalExperience = () => {
        return (<div>
                    <section className="hero is-light is-bold">
                        <div className="hero-body">
                            <div className="container has-text-centered">
                                <div className="columns">
                                    <div className="column is-5 is-narrow">
                                        <h1 className="title is-3 has-text-left-tablet">{this.props.langGerman ? "Freelance Softwareentwickler" : "Freelance Software Developer"}</h1>
                                        <h5 className="subtitle is-6 has-text-left-tablet"></h5>
                                        <div className="level">
                                            <div className="level-left">
                                                <div className="level-item">
                                                    <figure className="image is-32x32" style={{"margin-right":"0.5em"}}>
                                                        <i class="far fa-calendar-alt fa-2x" style={{color:"#3298dc"}} alt="calender"></i>
                                                    </figure> 
                                                    <p className="subtitle is-6">
                                                        {this.props.langGerman ? "01/2020 - momentan" : "01/2020 - currently"}
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
                                        <h5 className="subtitle is-5 has-text-left-tablet">{this.props.langGerman ? " Projekte" :  " Projects"}</h5>
                                        <div className="content">
                                            <ul className="has-text-left">
                                                <li><u><a href="http://www.daxosline.com">Daxos</a></u>
                                                {this.props.langGerman ? ": Full-Stack Entwicklung für ein Projekt der deutschen Handelskammer in Bogota. Wir entwickeln eine Plattform mit der Schulabgänger aus Lateinamerika sich für Studiengänge und Stipendien in Deutschland bewerben können. #NodeJS, #React, #MySQL, #AWS, #GIT" :  ": Fullstack development for the german chamber of commerce in Bogota. We are building a platform that connects people from Latin America to german universities and scholarships. #NodeJS, #React, #MySQL, #AWS, #GIT"}
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
                                        <h5 className="subtitle is-6 has-text-left-tablet">{this.props.langGerman ? "synalis ist eine mittelständische Firma, die sich auf die Bereiche DMS / ECM, ERP, CRM, Collaboration, Microsoft Cloud und Cyber Security spezialisiert" : "synalis is a mid-sized IT company from Germany that specializes in the areas of DMS / ECM, ERP, CRM, Collaboration, Microsoft Cloud and Cyber Security"}</h5>
                                        <div className="level">
                                            <div className="level-left">
                                                <div className="level-item">
                                                    <figure className="image is-32x32" style={{"margin-right":"0.5em"}}>
                                                        <i class="far fa-calendar-alt fa-2x" style={{color:"#3298dc"}} alt="calender"></i>
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
                                                        {this.props.langGerman ? "Bonn, Deutschland" : "Bonn, Germany"}
                                                    </p>
                                                </div>
                                            </div> 
                                        </div>
                                        
                                    </div>
                                    <div className="column is-offset-1 is-5 is-narrow">
                                        <h5 className="subtitle is-5 has-text-left-tablet">{this.props.langGerman ? "Verantwortung und Aufgaben" : "Responsibilities and Tasks"}</h5>
                                        <div className="content">
                                            <ul className="has-text-left">
                                                <li>{this.props.langGerman ? "Einführung und Konfiguration von ELO (ELO ist ein Enterprise Content Management System aus Stuttgart)" : ("Implementation and configuration of ELO (ELO is an Enterprise Content Management (ECM) system from Stuttgart, Germany) on premise including its modular business solution packages.")} </li>
                                                <li>{this.props.langGerman ? "Entwicklung von benutzerdefinierten Skripten und Funktionen innerhalb des Tomcat Apache Servers (Verwendung von Javascript in Rhino Engine)" : "Development of custom scripts and functions within the framework of Tomcat Apache (using Javascript in Rhino Engine)"}</li>
                                                <li>{this.props.langGerman ? "Projektmanagement, von Beginn der Diagnose- /Analysephase bis zur produktiven Implementierung der Lösung" : "Management of projects, starting from the diagnosis/analysis of the customer’s needs until and including the final implementation"}</li>
                                                <li>{this.props.langGerman ? "Durchführung von Workshops des Anforderungsmanagements, Einfügung neuer digitaler Prozesse und Systemintegration" : "Led workshops to determine customer needs, align digital processes and optimize system integration"}</li>
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
                                        {this.props.langGerman ? "2018 - Gap year" : "2018 - Gap year"}
                                    </div>
                                    <div className="column  is-offset-1 is-5 is-narrow">
                                        {this.props.langGerman ? "Reisen, Volunteering, lernte Spanisch, Python-programmierung" : "Travelled, volunteered, learned Spanish, wrote Python Code"}
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
                                        <h5 className="subtitle is-6 has-text-left-tablet">{this.props.langGerman ? "Solactive ist ein agiles, aggressiv expandierendes Fintech-Unternehmen spezialisiert auf Indexberechnung und passiv verwaltete Finanzprodukte" : "Solactive is a fast paced, aggressively expansive Fintech company specialized in Index calculation and passively managed financial products"}</h5>
                                        <div className="level">
                                            <div className="level-left">
                                                <div className="level-item">
                                                    <figure className="image is-32x32" style={{"margin-right":"0.5em"}}>
                                                        <i class="far fa-calendar-alt fa-2x" style={{color:"#3298dc"}} alt="calender"></i>
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
                                                    {this.props.langGerman ? "Frankfurt, Deutschland" : "Frankfurt, Germany"}
                                                    </p>
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                    <div className="column  is-offset-1 is-5 is-narrow">
                                        <h5 className="subtitle is-5 has-text-left-tablet">{this.props.langGerman ? "Verantwortung und Aufgaben" : "Responsibilities and Tasks"}</h5>
                                        <div className="content">
                                            <ul className="has-text-left">
                                                <li>{this.props.langGerman ? "IT-Projektmanagement, Testung und Freigabe von neuen Plattform-features für die Indexberechnung. Aufsetzung neuer Backend Kalkulationslogiken mit den Softwareentwicklern" :"Managed IT projects, tested and released platform features for the index calculation. Set-up new back-end calculation logics with the developers"}</li>
                                                <li>{this.props.langGerman ? "Selektion der Aktien für Indexneubalanzierungen" : "Performed the selection of equity stocks for index rebalancings"}</li>
                                                <li>{this.props.langGerman ? "Kundenkontakt und Kundenbeziehungen" : "Direct customer contact and relationship management"}</li>
                                                <li>{this.props.langGerman ? "Verantwortung für die Gewinnung und die Umsetzung neuer Finanzprodukte im Bereich Equity" : "Responsible for the acquisition and setup of new custom indices"}</li>
                                                <li>{this.props.langGerman ? "Kontinuierliche Verbesserung der Prozesse zur Standardisierung in Verwendung von Python, VBA und SQL Databanken" : "Continuously improved processes to achieve standardization using Python, VBA and SQL Databases"}</li>
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
                                        <h1 className="title is-3 has-text-left-tablet">{this.props.langGerman ? "Qualitätsmanagement (Praktikum)" : "Quality Management (Internship)"}</h1>
                                        <h5 className="subtitle is-5 has-text-left-tablet"><a href="//www.solactive.com">Robert Bosch GmbH</a></h5>
                                        <h5 className="subtitle is-6 has-text-left-tablet">{this.props.langGerman ? "Bosch ist führender Zulieferer in der Automobilindustrie" : "Bosch is a leader in the automotive supply industry and offers a vast variety of solutions"}</h5>
                                        <div className="level">
                                            <div className="level-left">
                                                <div className="level-item">
                                                    <figure className="image is-32x32" style={{"margin-right":"0.5em"}}>
                                                        <i class="far fa-calendar-alt fa-2x" style={{color:"#3298dc"}} alt="calender"></i>
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
                                                        {this.props.langGerman ? "Brüssel, Belgien" :"Brussels, Belgium"}
                                                    </p>
                                                </div>
                                            </div>   
                                        </div>
                                    </div>
                                    <div className="column  is-offset-1 is-5 is-narrow">
                                        <h5 className="subtitle is-5 has-text-left-tablet">{this.props.langGerman ? "Verantwortung und Aufgaben" : "Responsibilities and Tasks"}</h5>
                                        <div className="content">
                                            <ul className="has-text-left">
                                                <li>{this.props.langGerman ? "Analyse und Prozessverbesserung von verkauften Teilen mit Qualitätsproblemen" : "Analysis and process improvement of sold parts with quality concerns"}</li>
                                                <li>{this.props.langGerman ? "Erstellung und Optimierung von monatlichen Berichten unter Verwendung von Excel und VBA" : "Created and optimized reports on a monthly basis by using Excel and VBA"}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>)
    }

    AcademicEducation = () => {
        return (<div>
                    <section className="hero is-light is-bold">
                        <div className="hero-body">
                            <div className="container has-text-centered">
                                <div className="columns">
                                    <div className="column is-5 is-narrow">
                                        <h1 className="title is-3 has-text-left-tablet"><a href="//www.maastrichtuniversity.nl/">Maastricht University, School of Business and Economics</a></h1>
                                        <div className="level">
                                            <div className="level-left">
                                                <div className="level-item">
                                                    <figure className="image is-32x32" style={{"margin-right":"0.5em"}}>
                                                        <i class="far fa-calendar-alt fa-2x" style={{color:"#3298dc"}} alt="calender"></i>
                                                    </figure> 
                                                    <p className="subtitle is-6">
                                                        09/2013 - 06/2015
                                                    </p>
                                                </div>
                                                <div className="level-item">
                                                    <figure className="image is-32x32">
                                                        <img src={require("./location-pin-icon-13.jpg")} alt="location" />
                                                    </figure> 
                                                    <p className="subtitle is-6">
                                                        {this.props.langGerman ? "Maastricht, Niederlande" : "Maastricht, the Netherlands"}
                                                    </p>
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                    <div className="column is-offset-1 is-5 is-narrow">
                                        <h5 className="subtitle is-5 has-text-left-tablet">Master of Science: International Business - Strategy & Innovation</h5>
                                        <div className="content">
                                            <ul className="has-text-left">
                                                <li>{this.props.langGerman ? "Die Masterarbeit untersuchte den Einfluss von Eigentümerstrukturen auf abnormale Marktleistungen die durch die Veräußerung von Unternehmensteilen entstehen" : "Master thesis investigated the effect of ownership structures on divestiture abnormal market performance"}</li>
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
                                        <h1 className="title is-3 has-text-left-tablet"><a href="//www.wu.ac.at/">{this.props.langGerman ? "Wirtschaftsuniversität Wien" : "Vienna University of Economics and Business"}</a></h1>
                                        <div className="level">
                                            <div className="level-left">
                                                <div className="level-item">
                                                    <figure className="image is-32x32" style={{"margin-right":"0.5em"}}>
                                                        <i class="far fa-calendar-alt fa-2x" style={{color:"#3298dc"}} alt="calender"></i>
                                                    </figure>
                                                    <p className="subtitle is-6">
                                                        10/2014 - 02/2015
                                                    </p> 
                                                </div>
                                                <div className="level-item">
                                                    <figure className="image is-32x32">
                                                        <img src={require("./location-pin-icon-13.jpg")} alt="location" />
                                                    </figure> 
                                                    <p className="subtitle is-6">
                                                    {this.props.langGerman ? "Wien, Österreich" : "Vienna, Austria"}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column  is-offset-1 is-5 is-narrow">
                                        <h5 className="subtitle is-5 has-text-left-tablet">{this.props.langGerman ? "Auslandssemester" : "Study Abroad"}</h5>
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
                                        <h1 className="title is-3 has-text-left-tablet"><a href="//www.maastrichtuniversity.nl/">Maastricht University, School of Business and Economics</a></h1>
                                        <div className="level">
                                            <div className="level-left">
                                                <div className="level-item">
                                                    <figure className="image is-32x32" style={{"margin-right":"0.5em"}}>
                                                        <i class="far fa-calendar-alt fa-2x" style={{color:"#3298dc"}} alt="calender"></i>
                                                    </figure>
                                                    <p className="subtitle is-6">
                                                        09/2009 - 09/2013
                                                    </p>
                                                </div>
                                                <div className="level-item">
                                                    <figure className="image is-32x32">
                                                        <img src={require("./location-pin-icon-13.jpg")} alt="location" />
                                                    </figure> 
                                                    <p className="subtitle is-6">
                                                        {this.props.langGerman ? "Maastricht, Niederlande" : "Maastricht, the Netherlands"}
                                                    </p>
                                                </div>
                                            </div>  
                                        </div>
                                    </div>
                                    <div className="column  is-offset-1 is-5 is-narrow">
                                        <h5 className="subtitle is-5 has-text-left-tablet">Bachelor of Science: International Business - Finance</h5>
                                        <div className="content">
                                            <ul className="has-text-left">
                                                <li>{this.props.langGerman ? "Die Bachelorarbeit analysierte die anfängliche IPO-Performance und deren Zusammenhang mit der IPO-Preisfestsetzung" : "Bachelor thesis analyzed initial IPO performance and its relation to IPO pricing"}</li>
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
                                        <h1 className="title is-3 has-text-left-tablet"><a href="//www.whitworth.edu/">Whitworth University</a></h1>
                                        <div className="level">
                                            <div className="level-left">
                                                <div className="level-item">
                                                    <figure className="image is-32x32" style={{"margin-right":"0.5em"}}>
                                                        <i class="far fa-calendar-alt fa-2x" style={{color:"#3298dc"}} alt="calender"></i>
                                                    </figure> 
                                                    <p className="subtitle is-6">
                                                        02/2012 - 06/2012
                                                    </p>
                                                </div>
                                                <div className="level-item">
                                                    <figure className="image is-32x32">
                                                        <img src={require("./location-pin-icon-13.jpg")} alt="location" />
                                                    </figure> 
                                                    <p className="subtitle is-6">
                                                    Spokane, USA
                                                    </p>
                                                </div>
                                            </div>   
                                        </div>
                                    </div>
                                    <div className="column  is-offset-1 is-5 is-narrow">
                                        <h5 className="subtitle is-5 has-text-left-tablet">{this.props.langGerman ? "Auslandssemester" : "Study Abroad"}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>)
    }

    LangStack = () => {

        return (<div>
                    <section className="hero is-light is-bold">
                        <div className="hero-body">
                            <div className="container has-text-centered">
                                <div className="columns">
                                
                                    <div className="column is-5 is-narrow">
                                        <h5 className="subtitle is-5 has-text-left-tablet">{this.props.langGerman ? "Deutsch" : "German"} <progress className="progress is-primary ui-progressbar-value" value="100" max="100">100%</progress></h5>
                                        <h5 className="subtitle is-5 has-text-left-tablet">{this.props.langGerman ? "Englisch" : "English"} <progress className="progress is-primary" value="95" max="100">95%</progress></h5>
                                        <h5 className="subtitle is-5 has-text-left-tablet">{this.props.langGerman ? "Spanisch" : "Spanish"} <progress className="progress is-primary" value="82" max="100">82%</progress></h5>
                                        <h5 className="subtitle is-5 has-text-left-tablet">{this.props.langGerman ? "Französisch" : "French"} <progress className="progress is-primary" value="15" max="100">15%</progress></h5>
                                        <h5 className="subtitle is-5 has-text-left-tablet">{this.props.langGerman ? "Niederländisch" : "Dutch"} <progress className="progress is-primary" value="30" max="100">30%</progress></h5>
                                    </div>

                                    <div className="column  is-offset-1 is-5 is-narrow">
                                        <div className="field is-grouped is-grouped-multiline">
                                            <div className="control">
                                                <Roll left>
                                                    <div className="tags has-addons">
                                                        <p className="tag is-link is-large">Python 3</p>
                                                    </div>
                                                </Roll>
                                            </div>
                                            <div className="control">
                                                <Roll top>
                                                    <div className="tags has-addons">
                                                        <p className="tag is-link is-large">Javascript - ES6</p>
                                                    </div>
                                                </Roll>
                                            </div>
                                            <div className="control">
                                                <Roll top>
                                                    <div className="tags has-addons">
                                                        <p className="tag is-link is-large">Ruby</p>
                                                    </div>
                                                </Roll>
                                            </div>
                                            <div className="control">
                                                <Roll right>
                                                    <div className="tags has-addons">
                                                        <p className="tag is-link is-large">MySQL</p>
                                                    </div>
                                                </Roll>
                                            </div>
                                            <div className="control">
                                                <Roll right>
                                                    <div className="tags has-addons">
                                                        <p className="tag is-link is-large">Postgre SQL</p>
                                                    </div>
                                                </Roll>
                                            </div>
                                            <div className="control">
                                                <Roll right>
                                                    <div className="tags has-addons">
                                                        <p className="tag is-link is-large">MS SQL Server</p>
                                                    </div>
                                                </Roll>
                                            </div>
                                            <div className="control">
                                                <Roll left>
                                                    <div className="tags has-addons">
                                                        <p className="tag is-link is-large">MongoDB</p>
                                                    </div>
                                                </Roll>
                                            </div>
                                            <div className="control">
                                                <Roll top>
                                                    <div className="tags has-addons">
                                                        <p className="tag is-link is-large">HTML 5</p>
                                                    </div>
                                                </Roll>
                                            </div>
                                            <div className="control">
                                                <Roll right>
                                                    <div className="tags has-addons">
                                                        <p className="tag is-link is-large">Bootstrap</p>
                                                    </div>
                                                </Roll>
                                            </div>
                                            <div className="control">
                                                <Roll bottom>
                                                    <div className="tags has-addons">
                                                        <p className="tag is-link is-large">Bulma</p>
                                                    </div>
                                                </Roll>
                                            </div>
                                            <div className="control">
                                                <Roll bottom>
                                                    <div className="tags has-addons">
                                                        <p className="tag is-link is-large">CSS</p>
                                                    </div>
                                                </Roll>
                                            </div>
                                            <div className="control">
                                                <Roll top>
                                                    <div className="tags has-addons">
                                                        <p className="tag is-link is-large">Ajax</p>
                                                    </div>
                                                </Roll>
                                            </div>
                                            <div className="control">
                                                <Roll bottom>
                                                    <div className="tags has-addons">
                                                        <p className="tag is-link is-large">jQuery</p>
                                                    </div>
                                                </Roll>
                                            </div>
                                            <div className="control">
                                                <Roll bottom>
                                                    <div className="tags has-addons">
                                                        <p className="tag is-link is-large">React</p>
                                                    </div>
                                                </Roll>
                                            </div>
                                            <div className="control">
                                                <Roll bottom>
                                                    <div className="tags has-addons">
                                                        <p className="tag is-link is-large">NodeJS</p>
                                                    </div>
                                                </Roll>
                                            </div>
                                            <div className="control">
                                                <Roll bottom>
                                                    <div className="tags has-addons">
                                                        <p className="tag is-link is-large">Django</p>
                                                    </div>
                                                </Roll>
                                            </div>
                                            <div className="control">
                                                <Roll bottom>
                                                    <div className="tags has-addons">
                                                        <p className="tag is-link is-large">Ruby on Rails</p>
                                                    </div>
                                                </Roll>
                                            </div>
                                            <div className="control">
                                                <Roll bottom>
                                                    <div className="tags has-addons">
                                                        <p className="tag is-link is-large">Git</p>
                                                    </div>
                                                </Roll>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>)
    }

    Courses = () => {
        return (<div>
                    <section className="hero is-light is-bold">
                        <div className="hero-body">
                            <div className="container has-text-centered">
                                <div className="columns">
                                    <div className="column is-5 is-narrow">
                                        <h1 className="title is-3 has-text-left-tablet">{this.props.langGerman ? "Full-Stack Entwicklerkurs" : "Full-stack developer course"}</h1>
                                        <h5 className="subtitle is-5 has-text-left-tablet"><a href="//www.bogotabootcamp.com">Bogota Bootcamp</a></h5>
                                        <h5 className="subtitle is-6 has-text-left-tablet">{this.props.langGerman ? "Bogota Bootcamp unterrichtet Fullstack-Entwicklung mit Ruby on Rails und React" : "Bogota Bootcamp teaches full-stack development with Ruby on Rails and React"}</h5>
                                        <div className="level">
                                            <div className="level-left">
                                                <div className="level-item">
                                                    <figure className="image is-32x32" style={{"margin-right":"0.5em"}}>
                                                        <i class="far fa-calendar-alt fa-2x" style={{color:"#3298dc"}} alt="calender"></i>
                                                    </figure> 
                                                    <p className="subtitle is-6">
                                                    10/2019 - 12/2019
                                                    </p>
                                                </div>
                                                <div className="level-item">
                                                    <figure className="image is-32x32">
                                                        <img src={require("./location-pin-icon-13.jpg")} alt="location" />
                                                    </figure> 
                                                    <p className="subtitle is-6">
                                                    {this.props.langGerman ? "Bogota, Kolumbien" : "Bogota, Colombia"}
                                                    </p>
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                    <div className="column is-offset-1 is-5 is-narrow">
                                        <h5 className="subtitle is-5 has-text-left-tablet">{this.props.langGerman ? "Kursinhalte" : "Course contents"}</h5>
                                        <div className="content">
                                            <ul className="has-text-left">
                                                <li>{this.props.langGerman ? "Ruby on Rails als full-stack framework" : "Ruby on Rails as a Full-Stack Framework"}</li>
                                                <li>{this.props.langGerman ? "React (Front-end)" : "React (Front-end)"}</li>
                                                <li>{this.props.langGerman ? "SQL (PG, Sqlite) und NoSQL Datenbanken (Firebase)" : "SQL (PG, Sqlite) and NoSQL databases (Firebase)"}</li>
                                                <li>{this.props.langGerman ? "Javascript, Ajax und jQuery" : "Javascript, Ajax and jQuery"}</li>
                                                <li>{this.props.langGerman ? "HTML, CSS, Bootstrap und Bulma" : "HTML, CSS, Bootstrap and Bulma"}</li>
                                                <li>{this.props.langGerman ? "AWS tools" : "AWS tools"}</li>
                                                <li>{this.props.langGerman ? "GIT & GitHub" : "GIT & GitHub"}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                 </div>)
    }


    render(){
        return (<div>
                    <this.TitleHeader phoneNumber={this.state.phoneNumber} currentLocation={this.state.currentLocation} />
                    <section className="hero is-bold is-info">
                        <div className="hero-body">
                            <h1 className="title is-2 has-text-centered">
                                <button className="button is-outlined is-link" onClick={() => this.toggleSegment("profExperience")}>
                                    <span className="icon is-large">
                                        <i className={this.state.profExperience ? this.state.eyeClassNames[1] : this.state.eyeClassNames[0]}></i>
                                    </span>
                                </button>{this.props.langGerman ? " Berufliche Erfahrung" :  " Professional Experience"}
                            </h1>    
                        </div>
                    </section>
                    <Fade left collapse when={this.state.profExperience}>
                        <this.ProfessionalExperience />
                    </Fade>
                    <section className="hero is-bold is-info">
                        <div className="hero-body">
                          <h1 className="title is-2 has-text-centered">
                                <button className="button is-outlined is-link" onClick={() => this.toggleSegment("acadEducation")}>
                                    <span className="icon">
                                        <i className={this.state.acadEducation ? this.state.eyeClassNames[1] : this.state.eyeClassNames[0]}></i>
                                    </span>
                                </button>{this.props.langGerman ? " Akademische Ausbildung" :  " Academic education"}
                            </h1>
                        </div>
                    </section>
                    <Fade left collapse when={this.state.acadEducation}>
                        <this.AcademicEducation />
                    </Fade>
                    
                    <section className="hero is-bold is-info">
                        <div className="hero-body">
                          <h1 className="title is-2 has-text-centered">
                                <button className="button is-outlined is-link" onClick={() => this.toggleSegment("courses")}>
                                    <span className="icon">
                                        <i className={this.state.courses ? this.state.eyeClassNames[1] : this.state.eyeClassNames[0]}></i>
                                    </span>
                                </button>{this.props.langGerman ? " Kurse" :  " Courses"}
                            </h1>
                        </div>
                    </section>
                    <Fade left collapse when={this.state.courses}>
                        <this.Courses />
                    </Fade>
                    <section className="hero is-bold is-info">
                        <div className="hero-body">
                          <h1 className="title is-2 has-text-centered">
                          <button className="button is-outlined is-link" onClick={() => this.toggleSegment("langStack")}>
                                <span className="icon">
                                    <i className={this.state.langStack ? this.state.eyeClassNames[1] : this.state.eyeClassNames[0]}></i>
                                </span>
                          </button>{this.props.langGerman ? " Sprachen & Stack" :  " Languages & Stack"}
                          </h1>
                        </div>
                    </section>
                    <Fade left collapse when={this.state.langStack}>
                        <this.LangStack />
                    </Fade>
                </div>);
    }
}

export default CvLong;