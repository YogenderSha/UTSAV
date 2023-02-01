import React from 'react';
import './About.css';
import logo from './hero.jpg';

export default function About() {
  return (
    <>
    <section className='border-2 box-border p-4 flex flex-col align-middle md:flex-row w-[95%] mx-auto md:h-[50vh] bg-gradient-to-t from-gray-700 to-gray-900'>
        <div className='mx-auto block md:hidden my-3 md:my-2'><span className='text-white font-semibold font-sans text-4xl'>About Us</span></div>
        <div className='mx-auto w-full'>
            {/* <span className=''><iframe src={logo}  frameborder="0"></iframe></span> */}
            <img className='h-32 sm:h-44 md:h-600 lg:h-80  mx-auto' src={logo} alt="" />
        </div>
        <main className='flex flex-col w-full md:mx-10'>
        <div className='mx-auto hidden md:block my-2'><span className='text-white font-semibold font-sans md:text-4xl lg:text-6xl'>About Us</span></div>
        <div className='mx-auto w-[95%]'><p className='text-center text-white font-sans font-medium  text-lg md:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus accusantium veniam exercitationem tempore fugiat beatae magnam, veritatis debitis ratione dolorum.</p>
        </div>
        </main>

    </section>
    </>
  )
}
