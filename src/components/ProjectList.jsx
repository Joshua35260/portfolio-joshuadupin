import { Component } from 'react'
import { portfolioData } from '../assets/data/portfolioData'
import Card from './ProjectCard'
import { motion } from 'framer-motion'

export default class ProjectList extends Component {
  state = {
    projects: portfolioData,
    buttons: [
      { id: 1, value: 'Tous', className: 'btnActive' },
      { id: 2, value: 'React' },
      { id: 3, value: 'Node.JS' },
      { id: 4, value: 'Javascript' },
      { id: 5, value: 'PHP' },
      { id: 6, value: 'C#' }
    ],
    selectedButton: 'Tous'
  }

  handleButton = event => {
    let button = event.target.value
    this.setState({ selectedButton: button })
  }

  render() {
    let { projects, buttons, selectedButton } = this.state

    return (
      <section className='portfolioContent'>
        <motion.h1
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0, type: 'spring' }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 }
          }}
        >
          MES RÉALISATIONS
        </motion.h1>
        <h2>Une partie des projets sur lesquels j'ai travaillé</h2>
        <div className='buttonDisplay'>
          {buttons.map(button => {
            return (
              <li key={button.id}>
                <input
                  type='button'
                  className='buttonProject'
                  value={button.value}
                  id={button.id}
                  onClick={this.handleButton}
                />
              </li>
            )
          })}
        </div>

        <div className='projects'>
          {projects
            .filter(project => project.languages.includes(selectedButton))
            .map(project => {
              return <Card key={project.id} item={project} />
            })}
        </div>
      </section>
    )
  }
}
