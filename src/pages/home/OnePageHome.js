import React, { Component } from "react";
import Header from "../../components/header/Header";
import TopButton from "../../components/topButton/TopButton";
import Footer from "../../components/footer/Footer";

// Import containers for each section
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion";
import Educations from "../../containers/education/Educations";
import Projects from "../../containers/projects/Projects";
import Contact from "../../containers/contact/Contact";
import { experience } from "../../portfolio.js";

// Import CSS if needed
import "./OnePageHome.css";

class OnePageHome extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="one-page-container">
        <Header theme={theme} isOnePage={true} isHome={true} />

        {/* Greeting Section */}
        <section id="greeting" className="section-container">
          <Greeting theme={theme} />
        </section>

        {/* Skills Section */}
        <section id="skills" className="section-container">
          <Skills theme={theme} />
        </section>

        {/* Experience Section */}
        <section id="experience" className="section-container">
          <ExperienceAccordion
            sections={experience["sections"]}
            theme={theme}
          />
        </section>

        {/* Education Section */}
        <section id="education" className="section-container">
          <Educations theme={theme} />
        </section>

        {/* Projects Section */}
        <section id="projects" className="section-container">
          <Projects theme={theme} />
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-container">
          <Contact theme={theme} />
        </section>

        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default OnePageHome;
