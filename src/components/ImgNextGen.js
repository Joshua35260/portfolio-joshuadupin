import React from 'react'

const ImgNextGen = ({ srcWebp, fallback, alt, ...props }) => {
  return (

    <picture>
      <source srcSet={srcWebp} type='image/webp' />
      <source srcSet={fallback} type='image/jpeg' />
      <img src={fallback} alt={alt} {...props}/>
    </picture>
  )
}

export default ImgNextGen
