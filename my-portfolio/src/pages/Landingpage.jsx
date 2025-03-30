import React from 'react'
import Marquee from '../components/Marque'

const Landingpage = () => {
  return (
    <div>
        <Marquee vertical={true} pauseOnHover={true} repeat={5}>
      <div>Your content here</div>
    </Marquee>
    </div>
  )
}

export default Landingpage