import React from 'react'
import './pageintro.css'
import { Link } from 'react-router-dom'

function PageIntro({pageTitle, page}) {
  return (
    <>
      <div className="intro-wrapper section-space">
        <div className="intro">
            <h1>{pageTitle}</h1>
            <div className="back-link">
                <Link to={'/'}>Home</Link>
                <span>-</span>
                <p>{page}</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default PageIntro
