import { Component } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default class ProjectCard extends Component {
  handleRadio = event => {
    let radio = event.target.value
    this.setState({ selectedRadio: radio })
  }

  render() {
    let { name, picture, info } = this.props.item

    return (
      <motion.div className='card'   initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay: 0, type: 'spring' }}
      variants={{
        visible: { opacity: 1, y: 0,},
        hidden: { opacity: 0, y: 400 }
      }}>
        <div className='card-header'>
          <img
            src={require(`../assets/img/${picture}`)}
            width="370"
            height="240"
            alt={name}
            className='header-image'
          ></img>
          <div className='card-content'>
            <div className='card-name'>
              <h1>{name}</h1>
            </div>
            <div className='card-description'>{info}</div>
            <div className='card-footer'>
              <Link to=''>Voir le site</Link>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }
}
