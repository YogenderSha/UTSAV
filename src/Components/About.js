import React from 'react';
import './About.css';
import logo from './hero.jpg';

export default function About() {
  return (
    <>
    <section className='flex flex-col align-middle md:flex-row w-[95%] mx-auto md:h-[60vh] bg-gradient-to-t from-gray-800 to-gray-900'>
        <div className='mx-auto block md:hidden my-2'><span className='text-white font-semibold font-sans text-3xl'>About Us</span></div>
        <div className='mx-auto w-full'>
            {/* <span className=''><iframe src={logo}  frameborder="0"></iframe></span> */}
            <img className='h-32 sm:h-44  mx-auto' src={logo} alt="" />
        </div>
        <main className='flex flex-col w-full md:mx-10'>
        <div className='mx-auto hidden md:block my-2'><span className='text-white font-semibold font-sans text-3xl'>About Us</span></div>
        <div className='mx-auto w-[95%]'><p className='text-center text-white font-sans font-medium text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus accusantium veniam exercitationem tempore fugiat beatae magnam, veritatis debitis ratione dolorum.</p>
        </div>
        </main>

    </section>
    </>
  )
}
