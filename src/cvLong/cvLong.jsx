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
            phoneNumber: "+573112079379‬",
            currentLocation: "Bogota, Colombia",
            eyeClassNames: ["fas fa-eye", "fas fa-eye-slash"]
        }

        this.toggleSegment = this.toggleSegment.bind(this)
    }

    toggleSegment(segmentName){
        let update = {}
        update[segmentName] = !this.state[segmentName]
        this.setState(update)
    }

    render(){
        return (<div>
                    <TitleHeader phoneNumber={this.state.phoneNumber} currentLocation={this.state.currentLocation} />
                    <section className="hero is-bold is-info">
                        <div className="hero-body">
                            <h1 className="title is-2 has-text-centered">
                                <button className="button is-outlined is-link" onClick={() => this.toggleSegment("profExperience")}>
                                    <span className="icon is-large">
                                        <i className={this.state.profExperience ? this.state.eyeClassNames[1] : this.state.eyeClassNames[0]}></i>
                                    </span>
                                </button> Professional Experience
                            </h1>    
                        </div>
                    </section>
                    <Fade left collapse when={this.state.profExperience}>
                        <ProfessionalExperience />
                    </Fade>
                    <section className="hero is-bold is-info">
                        <div className="hero-body">
                          <h1 className="title is-2 has-text-centered">
                                <button className="button is-outlined is-link" onClick={() => this.toggleSegment("acadEducation")}>
                                    <span className="icon">
                                        <i className={this.state.acadEducation ? this.state.eyeClassNames[1] : this.state.eyeClassNames[0]}></i>
                                    </span>
                                </button> Academic education
                            </h1>
                        </div>
                    </section>
                    <Fade left collapse when={this.state.acadEducation}>
                        <AcademicEducation />
                    </Fade>
                    <section className="hero is-bold is-info">
                        <div className="hero-body">
                          <h1 className="title is-2 has-text-centered">
                          <button className="button is-outlined is-link" onClick={() => this.toggleSegment("langStack")}>
                                <span className="icon">
                                    <i className={this.state.langStack ? this.state.eyeClassNames[1] : this.state.eyeClassNames[0]}></i>
                                </span>
                          </button> Languages & Stack
                          </h1>
                        </div>
                    </section>
                    <Fade left collapse when={this.state.langStack}>
                        <LangStack />
                    </Fade>
                </div>);
    }
}

function TitleHeader(props){

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
                                                    <img src="https://img.icons8.com/plasticine/100/000000/whatsapp.png" />
                                                </figure>
                                                <a className="subtitle is-6" href={`https://api.whatsapp.com/send?phone=${props.phoneNumber}‬`} alt="whatsapp">
                                                 {formatPhoneNumber(props.phoneNumber)}
                                                </a>
                                            </div>
                                            <div className="level-item">
                                                <figure className="image is-32x32">
                                                    <img src="https://icon-library.net/images/location-pin-icon/location-pin-icon-13.jpg" alt="location" />
                                                </figure> 
                                                <p className="subtitle is-6">
                                                {props.currentLocation}
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

function ProfessionalExperience(){
    return (<div>
                <section className="hero is-light is-bold">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <div className="columns">
                                <div className="column is-5 is-narrow">
                                    <h1 className="title is-3 has-text-left-tablet">Full-stack developer course</h1>
                                    <h5 className="subtitle is-5 has-text-left-tablet"><a href="//www.synalis.de">Bogota Bootcamp</a></h5>
                                    <h5 className="subtitle is-6 has-text-left-tablet">Bogota Bootcamp teaches full-stack development with Ruby on Rails and React</h5>
                                    <div className="level">
                                        <div className="level-left">
                                            <div className="level-item">
                                                <figure className="image is-32x32">
                                                    <img src="https://carlisletheacarlisletheatre.org/images/calendar-png-blue-7.png" alt="calender" />
                                                </figure> 
                                                <p className="subtitle is-6">
                                                10/2019 - currently
                                                </p>
                                            </div>
                                            <div className="level-item">
                                                <figure className="image is-32x32">
                                                    <img src="https://icon-library.net/images/location-pin-icon/location-pin-icon-13.jpg" alt="location" />
                                                </figure> 
                                                <p className="subtitle is-6">
                                                Bogota, Colombia
                                                </p>
                                            </div>
                                        </div> 
                                    </div>
                                    
                                </div>
                                <div className="column is-offset-1 is-5 is-narrow">
                                    <h5 className="subtitle is-5 has-text-left-tablet">Course contents</h5>
                                    <div className="content">
                                        <ul className="has-text-left">
                                            <li>Ruby on Rails as a full-stack framework</li>
                                            <li>React (Front-end)</li>
                                            <li>SQL (PG, Sqlite) and NoSQL databases (Firebase)</li>
                                            <li>Javascript, Ajax and jQuery</li>
                                            <li>HTML, CSS, Bootstrap and Bulma</li>
                                            <li>AWS tools</li>
                                            <li>GIT & GitHub</li>
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
                                    <h5 className="subtitle is-5 has-text-left-tablet"><a href="//www.synalis.de">Synalis GmbH & Co. KG</a></h5>
                                    <h5 className="subtitle is-6 has-text-left-tablet">Synalis is a mid-sized IT company from Germany that specializes in the areas of DMS / ECM, ERP, CRM, Collaboration, Microsoft Cloud and Cyber Security</h5>
                                    <div className="level">
                                        <div className="level-left">
                                            <div className="level-item">
                                                <figure className="image is-32x32">
                                                    <img src="https://carlisletheacarlisletheatre.org/images/calendar-png-blue-7.png" alt="calender" />
                                                </figure> 
                                                <p className="subtitle is-6">
                                                12/2018 - 10/2019
                                                </p>
                                            </div>
                                            <div className="level-item">
                                                <figure className="image is-32x32">
                                                    <img src="https://icon-library.net/images/location-pin-icon/location-pin-icon-13.jpg" alt="location" />
                                                </figure> 
                                                <p className="subtitle is-6">
                                                Bonn, Germany
                                                </p>
                                            </div>
                                        </div> 
                                    </div>
                                    
                                </div>
                                <div className="column is-offset-1 is-5 is-narrow">
                                    <h5 className="subtitle is-5 has-text-left-tablet">Responsibilities and Tasks</h5>
                                    <div className="content">
                                        <ul className="has-text-left">
                                            <li>Implementation and configuration of <a href="//www.elo.com">ELO</a> (ELO is an Enterprise Content Management (ECM) system from Stuttgart, Germany) on premise including its modular business solution packages. </li>
                                            <li>Development of custom scripts and functions within the framework of Tomcat Apache (using Javascript in Rhino Engine)</li>
                                            <li>Management of projects, starting from the diagnosis/analysis of the customer’s needs until and including the final implementation</li>
                                            <li>Led workshops to determine customer needs, align digital processes and optimize system integration</li>
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
                                    2018 - Gap year
                                </div>
                                <div className="column  is-offset-1 is-5 is-narrow">
                                    Travelled, volunteered, learned Spanish, wrote Python Code
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
                                    <h5 className="subtitle is-6 has-text-left-tablet">Solactive is a fast paced, aggressively expansive Fintech company specialized in Index calculation and passively managed financial products</h5>
                                    <div className="level">
                                        <div className="level-left">
                                            <div className="level-item">
                                                <figure className="image is-32x32">
                                                    <img src="https://carlisletheacarlisletheatre.org/images/calendar-png-blue-7.png" alt="calender" />
                                                </figure> 
                                                <p className="subtitle is-6">
                                                    06/2016 - 01/2018
                                                </p>
                                            </div>
                                            <div className="level-item">
                                                <figure className="image is-32x32">
                                                    <img src="https://icon-library.net/images/location-pin-icon/location-pin-icon-13.jpg" alt="location" />
                                                </figure> 
                                                <p className="subtitle is-6">
                                                Frankfurt, Germany
                                                </p>
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                                <div className="column  is-offset-1 is-5 is-narrow">
                                    <h5 className="subtitle is-5 has-text-left-tablet">Responsibilities and Tasks</h5>
                                    <div className="content">
                                        <ul className="has-text-left">
                                            <li>Managed IT projects, tested and released platform features for the index calculation. Set-up new back-end calculation logics with the developers</li>
                                            <li>Performed the selection of equity stocks for index rebalancings</li>
                                            <li>Direct customer contact and relationship management</li>
                                            <li>Responsible for the acquisition and setup of new custom indices</li>
                                            <li>Continuously improved processes to achieve standardization using Python, VBA and SQL Databases</li>
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
                                    <h1 className="title is-3 has-text-left-tablet">Quality Management (Internship)</h1>
                                    <h5 className="subtitle is-5 has-text-left-tablet"><a href="//www.solactive.com">Robert Bosch GmbH</a></h5>
                                    <h5 className="subtitle is-6 has-text-left-tablet">Bosch is a leader in the automotive supply industry and offers a vast variety of solutions</h5>
                                    <div className="level">
                                        <div className="level-left">
                                            <div className="level-item">
                                                <figure className="image is-32x32">
                                                    <img src="https://carlisletheacarlisletheatre.org/images/calendar-png-blue-7.png" alt="calender" />
                                                </figure> 
                                                <p className="subtitle is-6">
                                                    06/2015 - 05/2016
                                                </p>
                                            </div>
                                            <div className="level-item">
                                                <figure className="image is-32x32">
                                                    <img src="https://icon-library.net/images/location-pin-icon/location-pin-icon-13.jpg" alt="location" />
                                                </figure> 
                                                <p className="subtitle is-6">
                                                Brussels, Belgium
                                                </p>
                                            </div>
                                        </div>   
                                    </div>
                                </div>
                                <div className="column  is-offset-1 is-5 is-narrow">
                                    <h5 className="subtitle is-5 has-text-left-tablet">Responsibilities and Tasks</h5>
                                    <div className="content">
                                        <ul className="has-text-left">
                                            <li>Analysis and process improvement of sold parts with quality concerns</li>
                                            <li>Created and optimized reports on a monthly basis by using Excel and VBA</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>)
}

function AcademicEducation(){
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
                                                <figure className="image is-32x32">
                                                    <img src="https://carlisletheacarlisletheatre.org/images/calendar-png-blue-7.png" alt="calender" />
                                                </figure> 
                                                <p className="subtitle is-6">
                                                    09/2013 - 06/2015
                                                </p>
                                            </div>
                                            <div className="level-item">
                                                <figure className="image is-32x32">
                                                    <img src="https://icon-library.net/images/location-pin-icon/location-pin-icon-13.jpg" alt="location" />
                                                </figure> 
                                                <p className="subtitle is-6">
                                                Maastricht, the Netherlands
                                                </p>
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                                <div className="column  is-offset-1 is-5 is-narrow">
                                    <h5 className="subtitle is-5 has-text-left-tablet">Master of Science: International Business - Strategy & Innovation</h5>
                                    <div className="content">
                                        <ul className="has-text-left">
                                            <li>Master thesis investigated the effect of ownership structures on divestiture abnormal market performance</li>
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
                                    <h1 className="title is-3 has-text-left-tablet"><a href="//www.wu.ac.at/">Vienna University of Economics and Business</a></h1>
                                    <div className="level">
                                        <div className="level-left">
                                            <div className="level-item">
                                                <figure className="image is-32x32">
                                                    <img src="https://carlisletheacarlisletheatre.org/images/calendar-png-blue-7.png" alt="calender" />
                                                </figure>
                                                <p className="subtitle is-6">
                                                    10/2014 - 02/2015
                                                </p> 
                                            </div>
                                            <div className="level-item">
                                                <figure className="image is-32x32">
                                                    <img src="https://icon-library.net/images/location-pin-icon/location-pin-icon-13.jpg" alt="location" />
                                                </figure> 
                                                <p className="subtitle is-6">
                                                Vienna, Austria
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column  is-offset-1 is-5 is-narrow">
                                    <h5 className="subtitle is-5 has-text-left-tablet">Study Abroad</h5>
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
                                                <figure className="image is-32x32">
                                                    <img src="https://carlisletheacarlisletheatre.org/images/calendar-png-blue-7.png" alt="calender" />
                                                </figure>
                                                <p className="subtitle is-6">
                                                    09/2009 - 09/2013
                                                </p>
                                            </div>
                                            <div className="level-item">
                                                <figure className="image is-32x32">
                                                    <img src="https://icon-library.net/images/location-pin-icon/location-pin-icon-13.jpg" alt="location" />
                                                </figure> 
                                                <p className="subtitle is-6">
                                                Maastricht, the Netherlands
                                                </p>
                                            </div>
                                        </div>  
                                    </div>
                                </div>
                                <div className="column  is-offset-1 is-5 is-narrow">
                                    <h5 className="subtitle is-5 has-text-left-tablet">Bachelor of Science: International Business - Finance</h5>
                                    <div className="content">
                                        <ul className="has-text-left">
                                            <li>Bachelor thesis analyzed initial IPO performance and its relation to IPO pricing</li>
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
                                                <figure className="image is-32x32">
                                                    <img src="https://carlisletheacarlisletheatre.org/images/calendar-png-blue-7.png" alt="calender" />
                                                </figure> 
                                                <p className="subtitle is-6">
                                                    02/2012 - 06/2012
                                                </p>
                                            </div>
                                            <div className="level-item">
                                                <figure className="image is-32x32">
                                                    <img src="https://icon-library.net/images/location-pin-icon/location-pin-icon-13.jpg" alt="location" />
                                                </figure> 
                                                <p className="subtitle is-6">
                                                Spokane, USA
                                                </p>
                                            </div>
                                        </div>   
                                    </div>
                                </div>
                                <div className="column  is-offset-1 is-5 is-narrow">
                                    <h5 className="subtitle is-5 has-text-left-tablet">Study Abroad</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>)
}

function LangStack(){
    return (<div>
                <section className="hero is-light is-bold">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <div className="columns">
                                <div className="column is-5 is-narrow">
                                    <h5 className="subtitle is-5 has-text-left-tablet">German <progress className="progress is-primary" value="100" max="100">100%</progress></h5>
                                    <h5 className="subtitle is-5 has-text-left-tablet">English <progress className="progress is-primary" value="95" max="100">95%</progress></h5>
                                    <h5 className="subtitle is-5 has-text-left-tablet">Spanish <progress className="progress is-primary" value="70" max="100">70%</progress></h5>
                                    <h5 className="subtitle is-5 has-text-left-tablet">French <progress className="progress is-primary" value="15" max="100">15%</progress></h5>
                                    <h5 className="subtitle is-5 has-text-left-tablet">Dutch <progress className="progress is-primary" value="30" max="100">30%</progress></h5>
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
                                            <Roll right>
                                                <div className="tags has-addons">
                                                    <p className="tag is-link is-large">SQL</p>
                                                </div>
                                            </Roll>
                                        </div>
                                        <div className="control">
                                            <Roll left>
                                                <div className="tags has-addons">
                                                    <p className="tag is-link is-large">NoSQL</p>
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
                                                    <p className="tag is-link is-large">CSS</p>
                                                </div>
                                            </Roll>
                                        </div>
                                        <div className="control">
                                            <Roll bottom>
                                                <div className="tags has-addons">
                                                    <p className="tag is-link is-large">Rails 6</p>
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
                                                    <p className="tag is-link is-large">Git</p>
                                                </div>
                                            </Roll>
                                        </div>
                                        <div className="control">
                                            <Roll bottom>
                                                <div className="tags has-addons">
                                                    <p className="tag is-link is-large">Ruby</p>
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>)
}

export default CvLong;