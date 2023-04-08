import React from 'react'

const Card = (props) => {
  return (
    <div className={`${'bg-white mb-4 shadow-lg px-10 py-5 rounded-md'} ${props.className}`}>{props.children}</div>
  )
}

export default Card