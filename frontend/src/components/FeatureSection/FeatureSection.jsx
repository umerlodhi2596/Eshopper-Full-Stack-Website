import React from 'react'
import FeatureCard from '../FeatureCard/FeatureCard'
import { FaTruckFast } from "react-icons/fa6";
import { LuArrowRightLeft } from "react-icons/lu";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";

function FeatureSection() {
  return (
    <>
      <div className="feature-section-wrapper section-space">
        <div className="container">
            <div className="row">
                <FeatureCard icon={<FaCheck/>} feature={'Quality Product'}/>
                <FeatureCard icon={<FaTruckFast/>} feature={'Free Shipping'}/>
                <FeatureCard icon={<LuArrowRightLeft/>} feature={'14-Day Return'}/>
                <FeatureCard icon={<BiSolidPhoneCall/>} feature={'24/7 Support'}/>
            </div>
        </div>
      </div>
    </>
  )
}

export default FeatureSection
