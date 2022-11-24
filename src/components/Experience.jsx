import { animate } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import useIntersection from './useIntersection'

export default function Experience() {
  const [from, setFrom] = useState(0)
  const [to, setTo] = useState(0)
  const [one, setOne] = useState(1)
  const ref = useRef()
  const inViewport = useIntersection(ref, '-100px')

  function Counter({ from, to }) {
    const nodeRef = useRef()

    useEffect(() => {
      const node = nodeRef.current

      const controls = animate(from, to, {
        duration: 2.5,
        onUpdate(value) {
          node.textContent = value.toFixed(0)
        }
      })

      return () => controls.stop()
    }, [from, to])

    return <p ref={nodeRef} />
  }

  if (inViewport) {
    console.log('in viewport:', ref.current)
    clearInterval()
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFrom(to)
      setTo(14)
      setOne(1)
    }, 2000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div className='experience'>
      <div ref={ref} className='achievement'>
        <div className='circle'>
          <Counter from={from} to={one} />
        </div>
        <span>Années</span>
        <span>d'expérience</span>
      </div>
      <div className='achievement'>
        <div className='circle'>
          <Counter from={from} to={to} />
        </div>
        <span>Projets</span>
        <span>réalisés</span>
      </div>
      <div className='achievement'>
        <div className='circle'>
          <Counter from={from} to={one} />
        </div>
        <span>Nombre de</span>
        <span>clients</span>
      </div>
    </div>
  )
}
