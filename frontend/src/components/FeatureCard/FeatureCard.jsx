import React from 'react'
import './featurecard.css'
import { FaCheck } from "react-icons/fa";

function FeatureCard({icon, feature}) {
    return (
        <>
            <div className="col-md-3">
                <div className="feature-card">
                    <div className="feature-card-inner">
                        <div className="feature-icon">
                            {icon}
                        </div>
                        <div className='feature-content'>
                            <h4>{feature}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeatureCard
