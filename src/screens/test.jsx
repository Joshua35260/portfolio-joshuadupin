import React from 'react'
import DancingLines from 'react-dancing-lines'

const test = () => {
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
      }}
    >
      <DancingLines />
      <h1>Hello, world!</h1>
    </div>
  )
}

export default test
