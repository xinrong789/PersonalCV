import React, { Component } from "react"
import { Slide } from "react-awesome-reveal"

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }

  render() {
    if (!this.props.data) return null

    const skillmessage = this.props.data.skillmessage
    const education = this.props.data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      )
    })

    const work = this.props.data.project.map(function (work) {
      return (
        <div key={work.name}>
          <h3>{work.name}</h3>
          <p className="info">{work.skills}</p>
          <p>{work.description}</p>
        </div>
      )
    })

    const skills = this.props.data.skills.map((skills) => {
      const backgroundColor = this.getRandomColor()
      const className = "bar-expand " + skills.name.toLowerCase()
      const width = skills.level

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      )
    })

    return (
      <section id="resume">
        <Slide direction="left" duration={1300} triggerOnce>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide direction="left" duration={1300} triggerOnce>
          <div id="projects" className="row project">
            <div className="three columns header-col">
              <h1>
                <span>Projects</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide>

        <Slide direction="left" duration={1300} triggerOnce>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <p>{skillmessage}</p>

              <div className="bars">
                <ul className="skills">{skills}</ul>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    )
  }
}

export default Resume
