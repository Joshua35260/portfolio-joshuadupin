import React, { useState } from 'react'
import Card from './ProjectCard'
const ProjectListclass = (projects, buttons, selectedButton) => {

  const [value, setValue] = useState()

  const handleButton = event => {
    let button = event.target.value
    setValue({ selectedButton: button })
    console.log('value',value)
  } 
 

  return (
    <div className='portfolioContent'>
      <h1>MES RÉALISATIONS</h1>
      <h2>Une partie des projets sur lesquels j'ai travaillé</h2>
      <div className='buttonDisplay'>
        {/* {buttons.map(button => (
          <button key={button.id}>
            <input
              type='button'
              className='buttonProject'   
              value={value}
              id={button.value}
              onClick={handleButton}
            />
          </button>
        ))} */}
      </div>

      <div className='projects'>
        {projects
          .filter((project) => project.languages.includes(selectedButton)
          .map((project) => {
            return <Card key={project.id} item={project} />
          }))}
      </div>
      {console.log('test',value)}
    </div>
  )
}

export default ProjectListclass
