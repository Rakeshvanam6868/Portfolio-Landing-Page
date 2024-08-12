import React from 'react'
import { poppins } from '../layout'

const Navbar = (props) => {
  return (
    <div className={`${poppins.className} text-[21px] flex gap-[10px] cursor-pointer font-[400]`}>
        {props.name}
    </div>
  )
}

export default Navbar