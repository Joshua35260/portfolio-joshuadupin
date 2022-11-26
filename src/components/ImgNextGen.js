import React from 'react'

const ImgNextGen = ({ srcWebp, fallback, alt, ...props }) => {
  return (
    <picture>
      <source srcset={srcWebp} type='image/webp' />
      <source srcset={fallback} type='image/jpeg' />
      <img src={fallback} alt={alt} {...props} width='100%' height='auto' loading="lazy" />
    </picture>
  )
}

export default ImgNextGen
