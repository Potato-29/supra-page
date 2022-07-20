import React from 'react'
import supra1 from '../assets/2.0.jpg'
import supra2 from '../assets/3.0.jpg'
import supra3 from '../assets/3Premium.jpg'
import supra4 from '../assets/a91cf.jpg'
import fhsupra1 from '../assets/fhpic1.png'
import fhsupra2 from '../assets/fhpic2.png'

export default function Cards() {
  return (
    <div className='m-5 lg:m-20'>
        <div className='flex flex-col lg:flex-row justify-center'>
            <div className='border-solid border-2 p-5 m-5 hover:shadow-lg transition-shadow duration-500'>
                <div className=''>
                    <img src={supra1} className='w-full h-full' alt="" />
                </div>
                <div>
                    <h6 className='text-xs'>2022</h6>
                    <h5 className='font-bold'>2.0</h5>
                    <div className='flex flex-row my-4 font-extralight'>
                        <div className='mr-4'>
                            <h3 className='text-3xl font-extralight'>$43,540</h3>
                            <p className='text-xs'>Starting MSRP*</p>
                        </div>
                        <div className=''>
                            <h3 className='text-3xl font-extralight'>25/32</h3>
                            <p className='text-xs'>Est. MPG*</p>
                        </div>
                    </div>
                    <div className='pl-4 my-4 font-extralight'>
                        <li>2.0L twin-scroll single-turbo inline 4-cylinder engine.</li>
                        <li>18-in. cast-aluminum 10-spoke wheels with dual-tone finish.</li>
                        <li>Complimentary 1-year NASA membership, * including one free High-Performance Driving Experience</li>
                    </div>
                    <div className='flex flex-row'>
                        <button className='text-red-700 text-sm mx-4 hover:border-b-red-700 border-b-2 transition-all duration-300'>More features</button>
                        <button className='text-red-700 text-sm mx-4 hover:border-b-red-700 border-b-2 transition-all duration-300'>Build your supra</button>
                    </div>
                </div>
            </div>
            <div className='border-solid border-2 p-5 m-5 hover:shadow-lg transition-shadow duration-500'>
                <div>
                    <img src={supra2} className='w-full h-full' alt="" />
                </div>
                <div>
                    <h6 className='text-xs'>2022</h6>
                    <h5 className='font-bold'>3.0</h5>
                    <div className='flex flex-row my-4 font-extralight'>
                        <div className='mr-4'>
                            <h3 className='text-3xl font-extralight'>$51,890</h3>
                            <p className='text-xs'>Starting MSRP*</p>
                        </div>
                        <div className=''>
                            <h3 className='text-3xl font-extralight'>22/30</h3>
                            <p className='text-xs'>Est. MPG*</p>
                        </div>
                    </div>
                    <div className='pl-4 my-4 font-extralight'>
                        <li>3.0L twin-scroll single-turbo inline 6-cylinder engine</li>
                        <li>Adaptive Variable Sport (AVS) suspension</li>
                        <li>Complimentary 1-year NASA membership, * including one free High-Performance Driving Experience</li>
                    </div>
                    <div className='flex flex-row'>
                        <button className='text-red-700 text-sm mx-4 hover:border-b-red-700 border-b-2 transition-all duration-300'>More features</button>
                        <button className='text-red-700 text-sm mx-4 hover:border-b-red-700 border-b-2 transition-all duration-300'>Build your supra</button>
                    </div>
                </div>
            </div>
            <div className='border-solid border-2 p-5 m-5 hover:shadow-lg transition-shadow duration-500'>
                <div className=''>
                    <img src={supra3} className='w-full h-full' alt="" />
                </div>
                <div>
                    <h6 className='text-xs'>2022</h6>
                    <h5 className='font-bold'>3.0 Premium</h5>
                    <div className='flex flex-row my-4 font-extralight'>
                        <div className='mr-4'>
                            <h3 className='text-3xl font-extralight'>$55,040</h3>
                            <p className='text-xs'>Starting MSRP*</p>
                        </div>
                        <div className=''>
                            <h3 className='text-3xl font-extralight'>22/30</h3>
                            <p className='text-xs'>Est. MPG*</p>
                        </div>
                    </div>
                    <div className='pl-4 my-4 font-extralight'>
                        <li>14-way heated power-adjustable sport seats.</li>
                        <li>12-speaker JBL® * HiFi Surround Sound system (500W).</li>
                        <li>Complimentary 1-year NASA membership, * including one free High-Performance Driving Experience.</li>
                    </div>
                    <div className='flex flex-row'>
                        <button className='text-red-700 text-sm mx-4 hover:border-b-red-700 border-b-2 transition-all duration-300'>More features</button>
                        <button className='text-red-700 text-sm mx-4 hover:border-b-red-700 border-b-2 transition-all duration-300'>Build your supra</button>
                    </div>
                </div>
            </div>
            <div className='border-solid border-2 p-5 m-5 hover:shadow-lg transition-shadow duration-500'>
                <div>
                    <img src={supra4} className='w-full h-full' alt="" />
                </div>
                <div>
                    <h6 className='text-xs'>2022</h6>
                    <h5 className='font-bold'>A91-CF Edition</h5>
                    <div className='flex flex-row my-4 font-extralight'>
                        <div className='mr-4'>
                            <h3 className='text-3xl font-extralight'>$63,280</h3>
                            <p className='text-xs'>Starting MSRP*</p>
                        </div>
                        <div className=''>
                            <h3 className='text-3xl font-extralight'>22/30</h3>
                            <p className='text-xs'>Est. MPG*</p>
                        </div>
                    </div>
                    <div className='pl-4 my-4 font-extralight'>
                        <li>Carbon-fiber splitter and canards.</li>
                        <li>19-in. forged-aluminum twin-spoke wheels with matte-black finish</li>
                        <li>Complimentary 1-year NASA membership, * including one free High-Performance Driving Experience </li>
                    </div>
                    <div className='flex flex-row'>
                        <button className='text-red-700 text-sm mx-4 hover:border-b-red-700 border-b-2 transition-all duration-300'>More features</button>
                        <button className='text-red-700 text-sm mx-4 hover:border-b-red-700 border-b-2 transition-all duration-300'>Build your supra</button>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}
