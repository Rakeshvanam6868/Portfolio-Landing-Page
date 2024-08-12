import React from 'react'

const Button = (props) => {
  return (
    <div className=" w-[188px] h-[52px] pt-[14px] mt-[7px]  rounded-[5px] text-white bg-[#FD6F00] text-center text-[21px] cursor-pointer">
       {props.name}
    </div>
  )
}

export default Button