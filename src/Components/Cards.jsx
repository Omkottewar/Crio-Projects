import React, { useState } from 'react'

const Cards = ({data}) => {
   const {flag,name} = data




  return (
    <div className=' flex flex-col text-center  p-5 border border-gray-300 rounded-md hover:w-52'>
        <img className='w-40 h-32 ' src={flag} alt="" />
        <h3>{(name).slice(0,15)}</h3>
    </div>
  )
}

export default Cards