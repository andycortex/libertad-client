import React from 'react'

const Subject = (props) => {
  return (
      <div className='box'>

        <img src={props.img} alt={props.alt} />
        <h3>{ props.title }</h3>
        <p>{props.modules}</p>
      </div>
  )
}

export default Subject