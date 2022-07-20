import React, {Suspense, useRef} from 'react'
import Navbar from '../Components/Navbar'
import { Canvas } from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import Grsupra from '../Components/Grsupra'
import R32 from '../Components/R32'
import '../App.css'
import {TbEngine} from 'react-icons/tb'
import {IoMdSpeedometer} from 'react-icons/io'
import {RiMoneyDollarCircleLine} from 'react-icons/ri'
import vid from '../assets/vid4.mp4'
import gazoo from '../assets/gr.webp'
import Cards from '../Components/Cards'
import {motion} from 'framer-motion'


// function Lights() {
//     const light = useRef()
//     useHelper(light, THREE.DirectionalLightHelper, 'cyan')
//     return 
// }

function Home() {
  return (
    <>
        
        <div className='vid-container flex justify-center h-screen '>
            {/* video here */}
            <video autoPlay muted loop className='w-full h-full absolute z-0 object-cover'>
                <source src={vid} type='video/mp4'/>
            </video>
            <div className='flex flex-row m-10'>
                <h1 className='text-2xl lg:text-6xl  text-white z-10 relative text-center '>The all new <span className='  font-extrabold'>SUPRA</span></h1>
                <img src={gazoo} className="w-10 z-10 h-6" alt="" />
            </div>
        </div>
        <div className='flex justify-center items-center pt-24'>
            <h1 className='text-4xl'>Top of the class specs</h1>
        </div>
        <div className=' w-full h-screen mb-24 flex flex-col lg:flex-row justify-center items-center'>
            <div className='flex flex-col w-full h-full justify-center items-center'>
                <Canvas className=' pt-20' camera={{ fov: 8, position: [-30, 1, 30]}}>
                    <OrbitControls enableZoom={false} />
                    <ambientLight color={0xffffff} intensity={1}/>
                    <spotLight intensity={1} position={[-5, 10, 1]} />
                    <Suspense fallback={null}>
                        <Grsupra />
                    </Suspense>
                </Canvas>
                <h1 className='text-xl'>Click and move me!</h1>
            </div>
            <div className='specs-basic flex flex-col w-full h-full justify-center m-0'>
                <div initial={{opacity: 0}} whileInView={{opacity: 1}} className='flex flex-col justify-center m-5'>
                    <div className='flex flex-row items-center'>
                        <TbEngine size={45} color="#d94141" className='mr-2' />
                        <h1 className='text-3xl font-bold'>3.0L Single Turbo I6</h1>
                    </div>
                    <p className='mx-2'>The 3.0L Inline 6 engine comes with a single turbo that makes 340hp @5000-6500 rpm, 100 hp more than it's predecessor.</p>
                </div>
                <div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.3}} className='flex flex-col justify-center m-5'>
                    <div className='flex flex-row items-center'>
                        <IoMdSpeedometer size={45} color="#ebdf0c" className='mr-2' />
                        <h1 className='text-3xl font-bold'>4.3 seconds, 0-100km/h</h1>
                    </div>
                    <p className='mx-2'>The acceleration on this car is actually really good as it goes from 0 to 100 kilometres in just 4.3 seconds, It is a whole second faster than the older supra.</p>
                </div>
                <div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.}} className='flex flex-col justify-center m-5'>
                    <div className='flex flex-row items-center'>
                        <RiMoneyDollarCircleLine size={45} color="#28b528" className='mr-2'/>
                        <h1 className='text-3xl font-bold'>43,540</h1>
                    </div>
                    <p className='mx-2'>The 2022 GR Supra starts from $43,540 and has 4 variants, the top model beginning from $63,180</p>
                </div>
            </div>
            
        </div>
        <div className='flex justify-center items-center'>
            <h1 className='text-4xl'>Find your SUPRA</h1>
        </div>
        <Cards />
    </> 
  )
}

export default Home