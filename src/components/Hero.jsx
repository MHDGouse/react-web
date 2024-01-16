import React from 'react'
import {useTypewriter, Cursor} from 'react-simple-typewriter';
const Hero = () => {
    const[typeEffect]=useTypewriter({
        words:['BTB','BTC','SASS'],
        loop:{},
        typeSpeed:120,
        deleteSpeed:120
    })
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96] w-full h-screen mx-auto text-center flex flex-col justify-center'>
    <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
    <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data. </h1>
    <div className='flex justify-center items-center '>
        <p className='md:text-5xl sm: text-4xl font-bold'>Fast, flexible financing  for</p>
        <span className='md:text-5xl sm:text-4xl text-xl font-bold pl-4'>{typeEffect}</span>
    </div>
        </div>
    </div>
  )
}

export default Hero