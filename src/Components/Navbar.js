import React from 'react'
import logo from '../assets/logo.png'

function Navbar() {
  return (
    <div className='flex flex-row justify-between items-center bg-matteBlack p-4'>
        <div>
            <img src={logo} className='w-20 h-full' alt="" />
            {/* <p className='text-4xl text-white'>Toyota</p> */}
        </div>
        <div className='text-white'>
            <li className='inline m-2'>Home</li>
            <li className='inline m-2'>Cars</li>
            <li className='inline m-2'>About</li>
        </div>
    </div>
  )
}

export default Navbar