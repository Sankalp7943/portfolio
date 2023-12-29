import React from 'react'

const Button = ({name, target_url}) => {
  return (

    <a href={target_url} target="_blank" className="button_link">
          <button className='button_class glow-on-hover'>{name}</button>
    </a>
  )
}

export default Button