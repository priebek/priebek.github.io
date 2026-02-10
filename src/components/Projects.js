import React, { Component } from "react";
import PropTypes from "prop-types";
import ProjectDetailsModal from "./ProjectDetailsModal";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });
    if (this.props.resumeProjects && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.projects;
      var projects = this.props.resumeProjects.map(function (projects) {
        return (
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            key={projects.title}
            style={{ cursor: "pointer" }}
          >
            <span className="portfolio-item d-block">
              <div className="foto" onClick={() => detailsModalShow(projects)}>
                <div>
                  <img
                    src={projects.images[0]}
                    alt="projectImages"
                    style={{
                      marginBottom: 0,
                      paddingBottom: 0,
                      position: "relative",
                      objectFit: "contain",
                      width: "100%",
                      aspectRatio: "350/230",
                      maxWidth: "400px",
                      height: "auto",
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                      borderRadius: "6px",
                    }}
                  />
                  <span className="project-date">{projects.startDate}</span>
                  <br />
                  <p className="project-title-settings mt-3">
                    {projects.title}
                  </p>
                  <p
                    className="project-subtitle"
                    style={{
                      textAlign: "center",
                      color: "#666",
                      fontSize: "1rem",
                      marginTop: "-10px",
                    }}
                  >
                    {projects.subtitle}
                  </p>
                </div>
              </div>
            </span>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div style={{
          width: "100%",
          height: "1px",
          backgroundColor: "#333",
          marginTop: "0",
          marginBottom: "60px"
        }}></div>
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">{projects}</div>
          </div>
          <ProjectDetailsModal
            show={this.state.detailsModalShow}
            onHide={detailsModalClose}
            data={this.state.deps}
          />
        </div>
      </section>
    );
  }
}

Projects.propTypes = {
  resumeProjects: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    startDate: PropTypes.string,
    description: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
    url: PropTypes.string,
    technologies: PropTypes.array
  })),
  resumeBasicInfo: PropTypes.shape({
    section_name: PropTypes.shape({
      projects: PropTypes.string
    })
  })
};

export default Projects;
