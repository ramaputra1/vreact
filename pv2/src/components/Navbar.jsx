import React from 'react'
import ThemeSlider from './ThemeSlider'

const Navbar = () => {
  return (
    <div className='navbar flex flex-row-reverse p-5'>

  
      <div className='navbox theme mr-3 ml-3'>Gml</div>
          <div className='navbox theme mr-3 ml-3'>Rsm</div>
            <div className='navbox theme mr-3 ml-3'><ThemeSlider/></div>
    </div>
  )
}

export default Navbar
