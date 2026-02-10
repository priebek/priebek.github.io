import React, { Component } from "react";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { API_ENDPOINTS } from "./constants/config";

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      resumeData: {},
      sharedData: {},
    };
  }

  applyPickedLanguage(pickedLanguage, oppositeLangIconId) {
    document.documentElement.lang = pickedLanguage;
    this.loadResumeFromPath(API_ENDPOINTS.PROJECTS);
  }

  componentDidMount() {
    this.loadSharedData();
    this.applyPickedLanguage(
      window.$primaryLanguage,
      window.$secondaryLanguageIconId
    );
  }

  loadResumeFromPath(path) {
    fetch(path)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to load ${path}: ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        this.setState({ resumeData: data });
      })
      .catch(error => {
        console.error('Error loading resume data:', error);
      });
  }

  loadSharedData() {
    fetch(API_ENDPOINTS.SHARED_DATA)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to load shared data: ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        this.setState({ sharedData: data });
        document.title = `${data.basic_info.name}`;
      })
      .catch(error => {
        console.error('Error loading shared data:', error);
      });
  }

  render() {
    return (
      <div>
        <Header sharedData={this.state.sharedData.basic_info} />
        <About
          resumeBasicInfo={this.state.resumeData.basic_info}
          sharedBasicInfo={this.state.sharedData.basic_info}
        />
        <Projects
          resumeProjects={this.state.resumeData.projects}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Skills
          sharedSkills={this.state.sharedData.skills}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Experience
          resumeExperience={this.state.resumeData.experience}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Footer sharedBasicInfo={this.state.sharedData.basic_info} />
      </div>
    );
  }
}

export default App;
