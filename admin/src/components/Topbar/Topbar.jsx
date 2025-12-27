import React from 'react'
import './topbar.css'

function Topbar() {
  return (
    <>
      <div className="top-bar">
        <div className="container">
            <div className="top-bar-inner">
                <div className="top-bar-left">
                    <h2 className='top-bar-logo'><span>E</span>Shopper</h2>
                </div>
                <div className="top-bar-right">
                    <button>Logout</button>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Topbar
