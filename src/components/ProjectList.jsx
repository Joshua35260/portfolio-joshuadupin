import { Component } from 'react'
import { portfolioData } from '../assets/data/portfolioData'
import Card from './ProjectCard'

export default class ProjectList extends Component {
  state = {
    projects: portfolioData,
    radios: [
      { id: 1, value: "javascript" },
      { id: 2, value: "css" },
      { id: 3, value: "react" },
      { id: 4, value: "express" },
    ],
    selectedRadio: "javascript",
  };

  handleRadio = (event) => {
    let radio = event.target.value;
    this.setState({ selectedRadio: radio });
  };

  render() {
    let { projects, radios, selectedRadio } = this.state;
  

    return (
      <div className="portfolioContent">
        <h1>MES RÉALISATIONS</h1>
        <h2>Une partie des projets sur lesquels j'ai travaillé</h2>
        <ul className="radioDisplay">
          {radios.map((radio) => {
            return (
              <li key={radio.id}>
                <input
                  type="radio"
                  name="radio"
                  checked={radio.value === selectedRadio}
                  value={radio.value}
                  id={radio.value}
                  onChange={this.handleRadio}
                />
                <label htmlFor={radio.value}>{radio.value}</label>
              </li>
            );
          })}
        </ul>

        <div className="projects">
          {projects
            .filter((project) => project.languages.includes(selectedRadio))
            .map((project) => {
              return <Card key={project.id} item={project} />;
            })}
        </div>
      </div>
    );
  }
}