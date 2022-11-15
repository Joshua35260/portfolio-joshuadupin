import { Component } from 'react'
import { Link } from 'react-router-dom'
import * as Icon from 'react-feather'
export default class ProjectCard extends Component {
  handleRadio = event => {
    let radio = event.target.value
    this.setState({ selectedRadio: radio })
  }

  render() {
    let { name, picture, info } = this.props.item

    return (
      <div className='card'>
        <div className='card-header'>
          <img
            src={require(`../assets/img/${picture}`)}
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
      </div>
    )
  }
}
