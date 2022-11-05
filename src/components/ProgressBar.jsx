import React from 'react'

const ProgressBar = props => {
  const { bgColor, completed, content } = props
  const containerStyles = {
    height: 20,
    width: '100%',
    backgroundColor: '#e0e0de',
    borderRadius: 50,
    margin: 50
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgColor,
    borderRadius: 'inherit',
    textAlign: 'right',
    transition: 'width 4s ease-in-out',
    content: 'react'
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }
  return (
    <div>
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${content}`}</span>
        </div>
      </div>
    </div>
  )
}

export default ProgressBar
