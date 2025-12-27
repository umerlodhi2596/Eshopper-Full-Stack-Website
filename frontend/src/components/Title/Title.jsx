import React from 'react'
import './title.css'

function Title({title}) {
  return (
    <>
        <div className="title-wrapper">
            <span className='section-title'>{title}</span>
        </div>
    </>
  )
}

export default Title
