import { Component } from 'react'
import { motion } from 'framer-motion'
import ImgNextGen from './ImgNextGen'
import LazyLoad from 'react-lazy-load'
export default class ProjectCard extends Component {
  
  handleRadio = event => {
    let radio = event.target.value
    this.setState({ selectedRadio: radio })
  }

  render() {
    let { name, picture, picture2, info, url } = this.props.item

    return (
      <motion.div
        className='card'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0, type: 'spring' }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 250 }
        }}
      >
        <div className='card-header'>
        <LazyLoad >
          <ImgNextGen
            srcWebp={require(`../assets/img/webp/${picture}`)}
            fallback={require(`../assets/img/jpeg/${picture2}`)}
            width='130%'
            height='auto'
            alt={name}
            className='header-image'
          />
 </LazyLoad>
          <div className='card-content'>
            <div className='card-name'>
              <h1>{name}</h1>
            </div>
            <div className='card-description'>{info}</div>
            <div className='card-footer'>
              <a href={url} target='_blank' rel='noreferrer'>
                Voir le site
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }
}
